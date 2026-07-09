import { readdir, readFile, writeFile, mkdir, stat, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractName } from './extractName.js'
import { transformSvg } from './transformSvg.js'
import type { RootPresentationAttrs } from './transformSvg.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const REPO_ROOT = join(ROOT, '..', '..')
const ASSETS_DIR = join(REPO_ROOT, 'assets')
const OUT_ROOT = join(ROOT, 'src', 'icons')

const DEFAULT_VIEWBOX = '0 0 24 24'

interface IconRecord {
  category: string
  name: string
  componentName: string
  aliasName: string
  innerSvg: string
  viewBox: string
  rootAttrs: RootPresentationAttrs
}

async function listCategories(): Promise<string[]> {
  const entries = await readdir(ASSETS_DIR, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name)
    .sort()
}

async function listSvgFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir)
  return entries.filter((f) => f.endsWith('.svg')).sort()
}

async function processCategory(category: string): Promise<IconRecord[]> {
  const categoryDir = join(ASSETS_DIR, category)
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

function buildOptionsLiteral(record: IconRecord): string {
  const entries: Array<[string, string]> = []
  if (record.viewBox !== DEFAULT_VIEWBOX) {
    entries.push(['viewBox', JSON.stringify(record.viewBox)])
  }
  // Skip the default fill (createIcon defaults to "currentColor"). All other present
  // root presentation attrs are emitted verbatim so line icons render correctly.
  const { fill, stroke, strokeWidth, strokeLinecap, strokeLinejoin, strokeMiterlimit } =
    record.rootAttrs
  if (fill !== undefined && fill.toLowerCase() !== 'currentcolor') {
    entries.push(['fill', JSON.stringify(fill)])
  }
  if (stroke !== undefined) entries.push(['stroke', JSON.stringify(stroke)])
  if (strokeWidth !== undefined) entries.push(['strokeWidth', JSON.stringify(strokeWidth)])
  if (strokeLinecap !== undefined) entries.push(['strokeLinecap', JSON.stringify(strokeLinecap)])
  if (strokeLinejoin !== undefined) entries.push(['strokeLinejoin', JSON.stringify(strokeLinejoin)])
  if (strokeMiterlimit !== undefined) {
    entries.push(['strokeMiterlimit', JSON.stringify(strokeMiterlimit)])
  }
  if (entries.length === 0) return ''
  return `, { ${entries.map(([k, v]) => `${k}: ${v}`).join(', ')} }`
}

function renderIconFile(record: IconRecord): string {
  const { componentName, aliasName, innerSvg } = record
  const optionsArg = buildOptionsLiteral(record)
  return (
    `import { createIcon } from "../../createIcon.js";\n` +
    `const ${componentName} = createIcon(${JSON.stringify(componentName)}, ${JSON.stringify(
      innerSvg,
    )}${optionsArg});\n` +
    `export { ${componentName}, ${componentName} as ${aliasName} };\n` +
    `export default ${componentName};\n`
  )
}

function renderCategoryBarrel(records: IconRecord[]): string {
  return (
    records
      .map((r) => `export { ${r.componentName}, ${r.aliasName} } from "./${r.name}.js";`)
      .join('\n') + '\n'
  )
}

function renderRootIconsBarrel(categories: string[]): string {
  return categories.map((c) => `export * from "./${c}/index.js";`).join('\n') + '\n'
}

async function emitCategory(category: string, records: IconRecord[]): Promise<void> {
  const outDir = join(OUT_ROOT, category)
  await mkdir(outDir, { recursive: true })

  await Promise.all(
    records.map((record) =>
      writeFile(join(outDir, `${record.name}.tsx`), renderIconFile(record), 'utf-8'),
    ),
  )

  await writeFile(join(outDir, 'index.ts'), renderCategoryBarrel(records), 'utf-8')
}

async function checkExists(p: string): Promise<boolean> {
  try {
    await stat(p)
    return true
  } catch {
    return false
  }
}

async function main(): Promise<void> {
  const startedAt = Date.now()
  console.log(`→ Reading source SVGs from ${ASSETS_DIR}`)

  if (await checkExists(OUT_ROOT)) {
    await rm(OUT_ROOT, { recursive: true, force: true })
  }
  await mkdir(OUT_ROOT, { recursive: true })

  const categories = await listCategories()
  console.log(`→ Found ${categories.length} categories`)

  const allRecords: IconRecord[] = []
  const componentNames = new Map<string, string>() // componentName → "category/name"
  const errors: string[] = []

  for (const category of categories) {
    const records = await processCategory(category)
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
    await emitCategory(category, records)
  }

  if (errors.length > 0) {
    throw new Error(
      `Component name collisions across categories — rename one of each pair:\n${errors.join(
        '\n',
      )}`,
    )
  }

  await writeFile(join(OUT_ROOT, 'index.ts'), renderRootIconsBarrel(categories), 'utf-8')

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(2)
  console.log(
    `✓ Generated ${allRecords.length} icons across ${categories.length} categories in ${elapsed}s`,
  )
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
