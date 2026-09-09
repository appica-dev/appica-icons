import { readdir, readFile, writeFile, mkdir, stat, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractName } from './extractName.js'
import { transformSvg } from './transformSvg.js'
import type { RootPresentationAttrs } from './transformSvg.js'

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const DEFAULT_ASSETS_DIR = join(REPO_ROOT, 'assets')

export interface IconRecord {
  category: string
  name: string
  componentName: string
  aliasName: string
  innerSvg: string
  viewBox: string
  rootAttrs: RootPresentationAttrs
}

export interface CodegenTarget {
  /** Absolute path to the framework package directory; output goes to <packageDir>/src/icons. */
  packageDir: string
  /** Source SVG directory; defaults to the repository's <repo>/assets. */
  assetsDir?: string
  /** Output file extension for icon component files, e.g. ".tsx" or ".svelte". */
  extension: string
  /** Renders the full content of one icon component file from its record. */
  renderIconFile(record: IconRecord): string
  /** Renders a category barrel file ("index.ts") listing the category's icon files. */
  renderCategoryBarrel(records: IconRecord[]): string
  /** Renders the root icons barrel; defaults to `export * from "./<category>/index.js"` per category. */
  renderRootBarrel?(categories: string[]): string
}

function defaultRootBarrel(categories: string[]): string {
  return categories.map((c) => `export * from "./${c}/index.js";`).join('\n') + '\n'
}

async function listCategories(assetsDir: string): Promise<string[]> {
  const entries = await readdir(assetsDir, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name)
    .sort()
}

async function listSvgFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir)
  return entries.filter((f) => f.endsWith('.svg')).sort()
}

async function processCategory(assetsDir: string, category: string): Promise<IconRecord[]> {
  const categoryDir = join(assetsDir, category)
  const files = await listSvgFiles(categoryDir)
  const records: IconRecord[] = []
  const errors: string[] = []

  for (const file of files) {
    try {
      const { name, componentName, aliasName } = extractName(file)
      const source = await readFile(join(categoryDir, file), 'utf-8')
      const { innerSvg, viewBox, rootAttrs } = transformSvg(source, name)
      records.push({
        category,
        name,
        componentName,
        aliasName,
        innerSvg,
        viewBox,
        rootAttrs,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      errors.push(`  - ${category}/${file}: ${message}`)
    }
  }

  if (errors.length > 0) {
    throw new Error(`Failed to process icons in "${category}":\n${errors.join('\n')}`)
  }

  return records
}

async function emitCategory(
  target: CodegenTarget,
  outRoot: string,
  category: string,
  records: IconRecord[],
): Promise<void> {
  const outDir = join(outRoot, category)
  await mkdir(outDir, { recursive: true })

  await Promise.all(
    records.map((record) =>
      writeFile(
        join(outDir, `${record.name}${target.extension}`),
        target.renderIconFile(record),
        'utf-8',
      ),
    ),
  )

  await writeFile(join(outDir, 'index.ts'), target.renderCategoryBarrel(records), 'utf-8')
}

async function checkExists(p: string): Promise<boolean> {
  try {
    await stat(p)
    return true
  } catch {
    return false
  }
}

export async function generateIcons(target: CodegenTarget): Promise<void> {
  const startedAt = Date.now()
  const assetsDir = target.assetsDir ?? DEFAULT_ASSETS_DIR
  const outRoot = join(target.packageDir, 'src', 'icons')
  console.log(`→ Reading source SVGs from ${assetsDir}`)

  if (await checkExists(outRoot)) {
    await rm(outRoot, { recursive: true, force: true })
  }
  await mkdir(outRoot, { recursive: true })

  const categories = await listCategories(assetsDir)
  console.log(`→ Found ${categories.length} categories`)

  const allRecords: IconRecord[] = []
  const componentNames = new Map<string, string>() // componentName → "category/name"
  const errors: string[] = []

  for (const category of categories) {
    const records = await processCategory(assetsDir, category)
    for (const record of records) {
      const existing = componentNames.get(record.componentName)
      const slug = `${record.category}/${record.name}`
      if (existing) {
        errors.push(`  - "${record.componentName}" defined by both ${existing} and ${slug}`)
        continue
      }
      componentNames.set(record.componentName, slug)
      allRecords.push(record)
    }
    await emitCategory(target, outRoot, category, records)
  }

  if (errors.length > 0) {
    throw new Error(
      `Component name collisions across categories — rename one of each pair:\n${errors.join(
        '\n',
      )}`,
    )
  }

  const renderRootBarrel = target.renderRootBarrel ?? defaultRootBarrel
  await writeFile(join(outRoot, 'index.ts'), renderRootBarrel(categories), 'utf-8')

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(2)
  console.log(
    `✓ Generated ${allRecords.length} icons across ${categories.length} categories in ${elapsed}s`,
  )
}