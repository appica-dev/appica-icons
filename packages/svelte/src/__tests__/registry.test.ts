import { existsSync } from 'node:fs'
import { readdir, readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { extractName } from '../../../../scripts/codegen/extractName.js'
import * as RootExports from '../index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PACKAGE_DIR = join(__dirname, '..', '..')
const REPO_ROOT = join(PACKAGE_DIR, '..', '..')
const ASSETS_DIR = join(REPO_ROOT, 'assets')

const iconModules = import.meta.glob('../icons/*/*.svelte', { eager: true }) as Record<
  string,
  Record<string, unknown>
>
const iconEntries = Object.entries(iconModules)

function componentNameFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return extractName(file.replace(/\.svelte$/, '.svg')).componentName
}

async function listCategories(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('.'))
    .map((entry) => entry.name)
    .sort()
}

async function listSvgs(dir: string): Promise<string[]> {
  return (await readdir(dir)).filter((file) => file.endsWith('.svg')).sort()
}

/** Maps a published dist/ file to the src/ file svelte-package emits it from. */
function sourceOf(distFile: string): string {
  const file = distFile.replace(/^\.\/dist\//, '')
  if (file.endsWith('.svelte.d.ts')) return file.slice(0, -'.d.ts'.length)
  if (file.endsWith('.svelte')) return file
  if (file.endsWith('.d.ts')) return `${file.slice(0, -'.d.ts'.length)}.ts`
  if (file.endsWith('.js')) return `${file.slice(0, -'.js'.length)}.ts`
  throw new Error(`Unexpected export target "${distFile}"`)
}

describe('registry: structural integrity', () => {
  it('re-exports every generated icon and Icon from the package root', () => {
    const rootExports = RootExports as Record<string, unknown>
    const expected = new Set<string>(['Icon'])

    for (const [path, module] of iconEntries) {
      const component = module.default
      const displayName = componentNameFromPath(path)
      expected.add(displayName)
      expected.add(`${displayName}Icon`)
      expect(component, `Missing default export for "${path}"`).toBeTruthy()
      expect(rootExports[displayName], `Missing root export "${displayName}"`).toBe(component)
      expect(
        rootExports[`${displayName}Icon`],
        `Missing root alias export "${displayName}Icon"`,
      ).toBe(component)
    }

    expect(rootExports.Icon).toBeTruthy()
    expect(new Set(Object.keys(rootExports))).toEqual(expected)
  })

  it('generates one directly importable module per source SVG', async () => {
    const categories = await listCategories(ASSETS_DIR)
    let svgCount = 0
    for (const category of categories) {
      svgCount += (await listSvgs(join(ASSETS_DIR, category))).length
    }
    expect(iconEntries).toHaveLength(svgCount)
  })

  it('keeps component names unique across generated modules', () => {
    const names = iconEntries.map(([path]) => componentNameFromPath(path))
    expect(names.every(Boolean)).toBe(true)
    expect(new Set(names).size).toBe(names.length)
  })

  it('points every package.json export condition at a file svelte-package emits', async () => {
    const { exports } = JSON.parse(await readFile(join(PACKAGE_DIR, 'package.json'), 'utf-8'))
    for (const [subpath, conditions] of Object.entries<Record<string, string>>(exports)) {
      // Resolve subpath patterns with the direct import documented in the README.
      const match = subpath.includes('*') ? 'text-editing/bold' : ''
      for (const [condition, target] of Object.entries(conditions)) {
        const source = join(PACKAGE_DIR, 'src', sourceOf(target.replace('*', match)))
        expect(existsSync(source), `"${subpath}" [${condition}] → ${target}`).toBe(true)
      }
    }
  })
})
