export interface TransformedSvg {
  /** Inner SVG markup, ready to be injected via dangerouslySetInnerHTML */
  innerSvg: string
  /** viewBox extracted from the source <svg> element */
  viewBox: string
  /**
   * Presentation attributes lifted from the source <svg> root. These are inherited by child
   * elements and must be applied to the rendered <svg> — otherwise line icons (fill="none"
   * stroke="currentColor") would render as solid filled blobs.
   */
  rootAttrs: RootPresentationAttrs
}

export interface RootPresentationAttrs {
  fill?: string
  stroke?: string
  strokeWidth?: string
  strokeLinecap?: string
  strokeLinejoin?: string
  strokeMiterlimit?: string
}

const ALLOWED_COLOR_VALUES = new Set(['currentcolor', 'none', 'transparent', 'inherit'])

const HEX_COLOR_RE = /^#[0-9a-f]{3,8}$/i

function stripXmlNoise(svg: string): string {
  return svg
    .replace(/<\?xml[\s\S]*?\?>/g, '')
    .replace(/<!DOCTYPE[\s\S]*?>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim()
}

function parseSvgEnvelope(svg: string): { attrs: string; body: string } {
  const match = svg.match(/^<svg([^>]*)>([\s\S]*)<\/svg>\s*$/)
  if (!match) {
    throw new Error('Source is not a single well-formed <svg>...</svg> document.')
  }
  return { attrs: match[1], body: match[2] }
}

function extractAttribute(attrs: string, name: string): string | undefined {
  const re = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, 'i')
  const m = attrs.match(re)
  return m ? m[1] : undefined
}

/** Remove <clipPath>…</clipPath> and <mask>…</mask> blocks for color analysis only. */
function stripStructuralContainers(body: string): string {
  return body
    .replace(/<clipPath\b[\s\S]*?<\/clipPath>/gi, '')
    .replace(/<mask\b[\s\S]*?<\/mask>/gi, '')
}

function collectColorViolations(body: string): string[] {
  const violations: string[] = []
  const colorAttrRe = /\b(fill|stroke)\s*=\s*"([^"]*)"/gi
  let m: RegExpExecArray | null
  while ((m = colorAttrRe.exec(body)) !== null) {
    const value = m[2].trim()
    if (value === '') continue
    const lower = value.toLowerCase()
    if (ALLOWED_COLOR_VALUES.has(lower)) continue
    if (lower.startsWith('url(')) continue // gradients/patterns referenced by id
    if (HEX_COLOR_RE.test(value)) {
      violations.push(`${m[1]}="${value}"`)
      continue
    }
    // Treat any non-allowed string (e.g. "red", "#abc", "rgb(...)") as a violation.
    violations.push(`${m[1]}="${value}"`)
  }
  return violations
}

function rewriteIds(body: string, name: string): string {
  const prefix = `appica-${name}`
  const ids = new Set<string>()
  const idRe = /\bid\s*=\s*"([^"]+)"/g
  let m: RegExpExecArray | null
  while ((m = idRe.exec(body)) !== null) {
    ids.add(m[1])
  }
  if (ids.size === 0) return body

  let out = body
  for (const id of ids) {
    const target = `${prefix}-${id}`
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    out = out
      .replace(new RegExp(`\\bid\\s*=\\s*"${escaped}"`, 'g'), `id="${target}"`)
      .replace(new RegExp(`url\\(#${escaped}\\)`, 'g'), `url(#${target})`)
      .replace(new RegExp(`\\bhref\\s*=\\s*"#${escaped}"`, 'g'), `href="#${target}"`)
      .replace(new RegExp(`\\bxlink:href\\s*=\\s*"#${escaped}"`, 'g'), `xlink:href="#${target}"`)
  }
  return out
}

const ROOT_ATTR_MAP: ReadonlyArray<[string, keyof RootPresentationAttrs]> = [
  ['fill', 'fill'],
  ['stroke', 'stroke'],
  ['stroke-width', 'strokeWidth'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['stroke-miterlimit', 'strokeMiterlimit'],
]

function extractRootAttrs(attrs: string): RootPresentationAttrs {
  const out: RootPresentationAttrs = {}
  for (const [sourceName, targetKey] of ROOT_ATTR_MAP) {
    const value = extractAttribute(attrs, sourceName)
    if (value !== undefined) out[targetKey] = value.trim()
  }
  return out
}

function collapseWhitespace(body: string): string {
  return body
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export function transformSvg(source: string, name: string): TransformedSvg {
  const cleaned = stripXmlNoise(source)
  const { attrs, body } = parseSvgEnvelope(cleaned)

  const viewBox = extractAttribute(attrs, 'viewBox')
  if (!viewBox) {
    throw new Error('Source <svg> is missing a viewBox attribute.')
  }

  const allowColor = /\bdata-allow-color\b/i.test(attrs) || /\bdata-allow-color\b/i.test(body)
  if (!allowColor) {
    const scannable = stripStructuralContainers(body)
    const violations = collectColorViolations(scannable)
    if (violations.length > 0) {
      throw new Error(
        `Disallowed color attribute(s) ${violations.join(', ')}. ` +
          `UI icons must use fill="currentColor" / stroke="currentColor" (or "none"). ` +
          `Add data-allow-color to the <svg> element to opt out for legitimately multi-color icons.`,
      )
    }
  }

  const idRewritten = rewriteIds(body, name)
  const innerSvg = collapseWhitespace(idRewritten)

  if (innerSvg.length === 0) {
    throw new Error('Source <svg> has no inner content.')
  }

  return {
    innerSvg,
    viewBox: viewBox.trim(),
    rootAttrs: extractRootAttrs(attrs),
  }
}
