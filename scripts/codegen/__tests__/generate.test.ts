import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'
import { generateIcons } from '../index'
import type { CodegenTarget, IconRecord } from '../index'

/** Minimal valid icon body: single path, currentColor only, no root presentation attrs. */
const ICON_BODY = '<path d="M1 1h22v22H1z" fill="currentColor"/>'

function svg(body: string, attrs = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"'): string {
  return `<svg ${attrs}>${body}</svg>`
}

interface Fixture {
  root: string
  packageDir: string
  assetsDir: string
}

/** Creates tmp/<cat>/<file>.svg trees: svgs[category][filename] = svg source string. */
async function makeFixture(svgs: Record<string, Record<string, string>>): Promise<Fixture> {
  const root = await mkdtemp(join(tmpdir(), 'appica-codegen-'))
  const packageDir = join(root, 'pkg')
  const assetsDir = join(root, 'assets')
  for (const [category, files] of Object.entries(svgs)) {
    const dir = join(assetsDir, category)
    await mkdir(dir, { recursive: true })
    for (const [file, source] of Object.entries(files)) {
      await writeFile(join(dir, file), source, 'utf-8')
    }
  }
  return { root, packageDir, assetsDir }
}

function baseTarget(fixture: Fixture): CodegenTarget {
  return {
    packageDir: fixture.packageDir,
    assetsDir: fixture.assetsDir,
    extension: '.tsx',
    renderIconFile: (record) => `${record.componentName}\n`,
    renderCategoryBarrel: (records) =>
      records.map((r) => `export { ${r.componentName} } from "./${r.name}.tsx";`).join('\n') + '\n',
  }
}

describe('generateIcons', () => {
  it('writes one icon file per SVG, category barrels, and the default root barrel; wipes stale output', async () => {
    const fixture = await makeFixture({
      alpha: { 'sun.svg': svg(ICON_BODY) },
      beta: { 'moon.svg': svg(ICON_BODY) },
    })
    const outRoot = join(fixture.packageDir, 'src', 'icons')
    try {
      // Stale marker must be removed by regeneration (old behavior: rm + mkdir of OUT_ROOT).
      await mkdir(outRoot, { recursive: true })
      await writeFile(join(outRoot, 'stale.tsx'), 'stale', 'utf-8')

      await generateIcons(baseTarget(fixture))

      await expect(readFile(join(outRoot, 'alpha', 'sun.tsx'), 'utf-8')).resolves.toBe('Sun\n')
      await expect(readFile(join(outRoot, 'beta', 'moon.tsx'), 'utf-8')).resolves.toBe('Moon\n')
      await expect(readFile(join(outRoot, 'alpha', 'index.ts'), 'utf-8')).resolves.toBe(
        'export { Sun } from "./sun.tsx";\n',
      )
      await expect(readFile(join(outRoot, 'beta', 'index.ts'), 'utf-8')).resolves.toBe(
        'export { Moon } from "./moon.tsx";\n',
      )
      await expect(readFile(join(outRoot, 'index.ts'), 'utf-8')).resolves.toBe(
        'export * from "./alpha/index.js";\nexport * from "./beta/index.js";\n',
      )
      await expect(readFile(join(outRoot, 'stale.tsx'), 'utf-8')).rejects.toThrow()
    } finally {
      await rm(fixture.root, { recursive: true, force: true })
    }
  })

  it('passes full parsed records (names, viewBox, root attrs, innerSvg) to the render hooks', async () => {
    const fixture = await makeFixture({
      alpha: {
        'line-star.svg': svg(
          '<path d="M2 2l20 20" stroke="currentColor"/>',
          'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"',
        ),
      },
    })
    const seen: IconRecord[] = []
    try {
      const target = baseTarget(fixture)
      target.renderIconFile = (record) => {
        seen.push(record)
        return ''
      }
      await generateIcons(target)
      expect(seen).toHaveLength(1)
      expect(seen[0]).toMatchObject({
        category: 'alpha',
        name: 'line-star',
        componentName: 'LineStar',
        aliasName: 'LineStarIcon',
        viewBox: '0 0 32 32',
        rootAttrs: {
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        },
      })
      expect(seen[0].innerSvg).toBe('<path d="M2 2l20 20" stroke="currentColor"/>')
    } finally {
      await rm(fixture.root, { recursive: true, force: true })
    }
  })

  it('uses a custom renderRootBarrel when one is provided', async () => {
    const fixture = await makeFixture({
      alpha: { 'sun.svg': svg(ICON_BODY) },
      beta: { 'moon.svg': svg(ICON_BODY) },
    })
    try {
      const target = baseTarget(fixture)
      target.renderRootBarrel = (categories) =>
        categories.map((c) => `// category ${c}`).join('\n') + '\n'
      await generateIcons(target)
      await expect(
        readFile(join(fixture.packageDir, 'src', 'icons', 'index.ts'), 'utf-8'),
      ).resolves.toBe('// category alpha\n// category beta\n')
    } finally {
      await rm(fixture.root, { recursive: true, force: true })
    }
  })

  it('rejects a category containing an invalid SVG, naming the category and file', async () => {
    const fixture = await makeFixture({
      alpha: { 'broken.svg': '<svg xmlns="http://www.w3.org/2000/svg"><path d="M1 1h22v22H1z" fill="currentColor"/></svg>' },
    })
    try {
      await expect(generateIcons(baseTarget(fixture))).rejects.toThrow(
        'Failed to process icons in "alpha"',
      )
      await expect(generateIcons(baseTarget(fixture))).rejects.toThrow(
        'alpha/broken.svg: Source <svg> is missing a viewBox attribute.',
      )
    } finally {
      await rm(fixture.root, { recursive: true, force: true })
    }
  })

  it('rejects component-name collisions across categories', async () => {
    const fixture = await makeFixture({
      alpha: { 'star.svg': svg(ICON_BODY) },
      beta: { 'star.svg': svg(ICON_BODY) },
    })
    try {
      await expect(generateIcons(baseTarget(fixture))).rejects.toThrow(
        '"Star" defined by both alpha/star and beta/star',
      )
    } finally {
      await rm(fixture.root, { recursive: true, force: true })
    }
  })
})