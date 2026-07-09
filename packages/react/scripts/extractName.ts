export interface IconNames {
  /** kebab-case name derived from the source filename (without extension) */
  name: string
  /** PascalCase React component name */
  componentName: string
  /** Aliased component name with `Icon` suffix */
  aliasName: string
}

const VALID_NAME = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function extractName(filename: string): IconNames {
  if (!filename.endsWith('.svg')) {
    throw new Error(`Expected an .svg filename, got: ${filename}`)
  }
  const name = filename.slice(0, -4)

  if (name.length === 0) {
    throw new Error(`Empty icon name from filename: ${filename}`)
  }
  if (!VALID_NAME.test(name)) {
    throw new Error(
      `Invalid icon filename "${filename}": expected lower-case kebab segments of [a-z0-9].`,
    )
  }
  if (/^[0-9]/.test(name)) {
    throw new Error(
      `Invalid icon filename "${filename}": first segment must not start with a digit (would yield an invalid JS identifier).`,
    )
  }

  const componentName = toPascalCase(name)
  return {
    name,
    componentName,
    aliasName: `${componentName}Icon`,
  }
}

export function toPascalCase(kebab: string): string {
  const segments = kebab.split('-')
  let out = ''
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    // Preserve segment boundary between adjacent digit-only segments — without this,
    // "ironing-1-1" and "ironing-11" would both collapse to "Ironing11".
    if (i > 0 && /^[0-9]+$/.test(seg) && /[0-9]$/.test(segments[i - 1])) {
      out += '_'
    }
    out += seg.charAt(0).toUpperCase() + seg.slice(1)
  }
  return out
}
