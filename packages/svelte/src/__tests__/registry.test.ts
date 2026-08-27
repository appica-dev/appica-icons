import { readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import * as RootExports from '../index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..', '..', '..', '..')
const ASSETS_DIR = join(REPO_ROOT, 'assets')
const ICONS_DIR = join(__dirname, '..', 'icons')

async function listCategories(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name)
    .sort()
}

async function listSvgs(dir: string): Promise<string[]> {
  return (await readdir(dir)).filter((f) => f.endsWith('.svg')).sort()
}

async function listGenerated(dir: string): Promise<string[]> {
  return (await readdir(dir)).filter((f) => f.endsWith('.svelte')).sort()
}

const exportEntries = Object.entries(RootExports as Record<string, unknown>)
const utilityExports = new Set(['Icon'])
const iconExports = exportEntries.filter(([name]) => !utilityExports.has(name))

describe('registry: structural integrity', () => {
  it('export count is 2 × the number of source SVGs (bare + Icon-suffixed alias)', async () => {
    const categories = await listCategories(ASSETS_DIR)
    let svgCount = 0
    for (const cat of categories) {
      svgCount += (await listSvgs(join(ASSETS_DIR, cat))).length
    }
    expect(iconExports.length).toBe(svgCount * 2)
  })

  it('every icon has both a bare and an *Icon alias export pointing to the same component', () => {
    const byName = new Map<string, unknown>(exportEntries)
    const bareNames = [...byName.keys()].filter((n) => !utilityExports.has(n) && !n.endsWith('Icon'))
    expect(bareNames.length).toBeGreaterThan(0)
    for (const bare of bareNames) {
      const alias = `${bare}Icon`
      expect(byName.has(alias), `Missing alias export "${alias}"`).toBe(true)
      expect(byName.get(bare)).toBe(byName.get(alias))
    }
  })

  it('every exported icon component is defined', () => {
    for (const [name, value] of iconExports) {
      expect(value, `Missing component for "${name}"`).toBeTruthy()
    }
  })

  it('per-category counts mirror the assets directory exactly', async () => {
    const categories = await listCategories(ASSETS_DIR)
    for (const cat of categories) {
      const sourceCount = (await listSvgs(join(ASSETS_DIR, cat))).length
      const generatedCount = (await listGenerated(join(ICONS_DIR, cat))).length
      expect(generatedCount, `Mismatch in category "${cat}"`).toBe(sourceCount)
    }
  })

  it('component names are unique across the entire registry (no cross-category collisions)', () => {
    const names = exportEntries.map(([n]) => n)
    expect(new Set(names).size).toBe(names.length)
  })
})
