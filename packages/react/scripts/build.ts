import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateIcons } from '../../../scripts/codegen/index.js'
import type { IconRecord } from '../../../scripts/codegen/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PACKAGE_DIR = join(__dirname, '..')

const DEFAULT_VIEWBOX = '0 0 24 24'

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

generateIcons({
  packageDir: PACKAGE_DIR,
  extension: '.tsx',
  renderIconFile,
  renderCategoryBarrel,
}).catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})