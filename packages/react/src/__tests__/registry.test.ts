import { readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import * as RootExports from '../index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..', '..', '..', '..')
const ASSETS_DIR = join(REPO_ROOT, 'assets')

const iconModules = import.meta.glob('../icons/*/*.tsx', { eager: true }) as Record<
  string,
  Record<string, unknown>
>
const iconEntries = Object.entries(iconModules)

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
  it('re-exports every generated icon and the factory from the package root', () => {
    const rootExports = RootExports as Record<string, unknown>
    const expected = new Set<string>(['createIcon'])

    for (const [path, module] of iconEntries) {
      const component = module.default as { displayName?: string } | undefined
      const displayName = component?.displayName
      expect(displayName, `Missing displayName for "${path}"`).toBeTruthy()
      expected.add(displayName!)
      expected.add(`${displayName}Icon`)
      expect(rootExports[displayName!], `Missing root export "${displayName}"`).toBe(component)
      expect(
        rootExports[`${displayName}Icon`],
        `Missing root alias export "${displayName}Icon"`,
      ).toBe(component)
    }

    expect(rootExports.createIcon).toBeTypeOf('function')
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

  it('exports each component as default, bare name, and Icon-suffixed alias', () => {
    for (const [path, module] of iconEntries) {
      const component = module.default as { displayName?: string } | undefined
      const displayName = component?.displayName
      expect(displayName, `Missing displayName for "${path}"`).toBeTruthy()
      expect(module[displayName!], `Missing bare export "${displayName}" in "${path}"`).toBe(
        component,
      )
      expect(
        module[`${displayName}Icon`],
        `Missing alias export "${displayName}Icon" in "${path}"`,
      ).toBe(component)
    }
  })

  it('keeps component names unique across generated modules', () => {
    const names = iconEntries.map(([, module]) => {
      const component = module.default as { displayName?: string } | undefined
      return component?.displayName
    })
    expect(names.every(Boolean)).toBe(true)
    expect(new Set(names).size).toBe(names.length)
  })
})
