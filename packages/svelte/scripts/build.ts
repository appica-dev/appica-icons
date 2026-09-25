import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateIcons } from '../../../scripts/codegen/index.js'
import type { IconRecord } from '../../../scripts/codegen/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PACKAGE_DIR = join(__dirname, '..')

const DEFAULT_VIEWBOX = '0 0 24 24'

function buildPresentationProps(record: IconRecord): string {
  const lines: string[] = []
  if (record.viewBox !== DEFAULT_VIEWBOX) {
    lines.push(`viewBox={${JSON.stringify(record.viewBox)}}`)
  }
  const { fill, stroke, strokeWidth, strokeLinecap, strokeLinejoin, strokeMiterlimit } =
    record.rootAttrs
  if (fill !== undefined && fill.toLowerCase() !== 'currentcolor') {
    lines.push(`fill={${JSON.stringify(fill)}}`)
  }
  if (stroke !== undefined) lines.push(`stroke={${JSON.stringify(stroke)}}`)
  // camelCase to match Icon's `strokeWidth` prop, so a consumer's `strokeWidth` spread over it
  // wins. A kebab-case `stroke-width` would land in Icon's `...rest`, which is spread onto the
  // <svg> after `stroke-width={strokeWidth}` and would silently override the consumer's value.
  if (strokeWidth !== undefined) lines.push(`strokeWidth={${JSON.stringify(strokeWidth)}}`)
  if (strokeLinecap !== undefined) lines.push(`stroke-linecap={${JSON.stringify(strokeLinecap)}}`)
  if (strokeLinejoin !== undefined)
    lines.push(`stroke-linejoin={${JSON.stringify(strokeLinejoin)}}`)
  if (strokeMiterlimit !== undefined) {
    lines.push(`stroke-miterlimit={${JSON.stringify(strokeMiterlimit)}}`)
  }
  if (lines.length === 0) return ''
  return `\n  ${lines.join('\n  ')}`
}

function renderIconFile(record: IconRecord): string {
  const presentation = buildPresentationProps(record)
  return (
    `<script lang="ts">\n` +
    `  import Icon from "../../Icon.svelte";\n` +
    `  import type { IconProps } from "../../iconProps.js";\n\n` +
    // Without an annotation, svelte-package emits a .d.ts that references an undeclared
    // $$ComponentProps type, leaving every icon's props untyped for consumers.
    `  let props: Omit<IconProps, "innerSvg"> = $props();\n\n` +
    `  const innerSvg = ${JSON.stringify(record.innerSvg)};\n` +
    `</script>\n\n` +
    `<Icon\n` +
    `  innerSvg={innerSvg}${presentation}\n` +
    `  {...props}\n` +
    `/>\n`
  )
}

function renderRootBarrel(records: IconRecord[]): string {
  return (
    records
      .flatMap((record) => [
        `export { default as ${record.componentName} } from "./${record.category}/${record.name}.svelte";`,
        `export { default as ${record.aliasName} } from "./${record.category}/${record.name}.svelte";`,
      ])
      .join('\n') + '\n'
  )
}

generateIcons({
  packageDir: PACKAGE_DIR,
  extension: '.svelte',
  renderIconFile,
  renderRootBarrel,
}).catch((err) => {
  console.error(err instanceof Error ? err.message : err)
  process.exit(1)
})
