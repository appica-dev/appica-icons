import { readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { extractName } from '../../../../scripts/codegen/extractName.js'
import * as RootExports from '../index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..', '..', '..', '..')
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
      expect(rootExports[`${displayName}Icon`], `Missing root alias export "${displayName}Icon"`).toBe(
        component,
      )
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
})
