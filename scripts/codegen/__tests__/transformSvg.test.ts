import { describe, it, expect } from 'vitest'
import { transformSvg } from '../transformSvg'

const wrap = (inner: string, attrs = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"') =>
  `<svg ${attrs}>${inner}</svg>`

describe('transformSvg', () => {
  it('extracts inner content and returns the viewBox', () => {
    const result = transformSvg(wrap('<path d="M0 0h24v24H0z" fill="currentColor"/>'), 'sample')
    expect(result.viewBox).toBe('0 0 24 24')
    expect(result.innerSvg).toBe('<path d="M0 0h24v24H0z" fill="currentColor"/>')
  })

  it('lifts presentation attrs from the source <svg> root', () => {
    const result = transformSvg(
      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><path d="M0 0"/></svg>`,
      'cat',
    )
    expect(result.rootAttrs).toEqual({
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
  })

  it('returns an empty rootAttrs object when the source has no relevant root attrs', () => {
    const result = transformSvg(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0" fill="currentColor"/></svg>`,
      'sample',
    )
    expect(result.rootAttrs).toEqual({})
  })

  it('strips XML prolog, doctype and comments', () => {
    const src = `<?xml version="1.0"?>\n<!DOCTYPE svg>\n<!-- a comment -->\n${wrap(
      '<path d="M0 0" fill="none"/>',
    )}`
    const result = transformSvg(src, 'sample')
    expect(result.innerSvg).toBe('<path d="M0 0" fill="none"/>')
  })

  it('throws when the source has no viewBox', () => {
    expect(() =>
      transformSvg('<svg xmlns="http://www.w3.org/2000/svg"><path/></svg>', 'sample'),
    ).toThrow(/viewBox/)
  })

  it('throws when the source is not a single <svg> document', () => {
    expect(() => transformSvg('<div></div>', 'sample')).toThrow(/well-formed/)
  })

  it('preserves alternate viewBoxes', () => {
    const result = transformSvg(
      wrap('<path fill="currentColor" d="M0 0"/>', 'viewBox="0 0 32 32"'),
      'sample',
    )
    expect(result.viewBox).toBe('0 0 32 32')
  })

  it('rejects hex fill colors on visible elements by default', () => {
    expect(() => transformSvg(wrap('<path fill="#101820" d="M0 0"/>'), 'sample')).toThrow(
      /Disallowed color/,
    )
  })

  it('rejects named fill colors (e.g. red) by default', () => {
    expect(() => transformSvg(wrap('<path fill="red" d="M0 0"/>'), 'sample')).toThrow(
      /Disallowed color/,
    )
  })

  it('allows fill="currentColor", "none", "transparent", "inherit"', () => {
    expect(() =>
      transformSvg(
        wrap('<path fill="currentColor" d="M0 0"/><path fill="none" stroke="currentColor"/>'),
        'sample',
      ),
    ).not.toThrow()
  })

  it('ignores fill colors that live inside <clipPath> content (geometry-only)', () => {
    const inner =
      '<g clip-path="url(#a)"><path fill="currentColor" d="M0 0"/></g>' +
      '<defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>'
    const result = transformSvg(wrap(inner), 'gamepad')
    expect(result.innerSvg).toContain('clip-path="url(#appica-gamepad-a)"')
    expect(result.innerSvg).toContain('id="appica-gamepad-a"')
  })

  it('ignores fill colors that live inside <mask> content', () => {
    const inner =
      '<g mask="url(#m)"><path fill="currentColor" d="M0 0"/></g>' +
      '<defs><mask id="m"><path fill="white" d="M0 0h24v24H0z"/></mask></defs>'
    expect(() => transformSvg(wrap(inner), 'sample')).not.toThrow()
  })

  it('honours the data-allow-color opt-out on the <svg> root', () => {
    const result = transformSvg(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-allow-color="true"><path fill="#101820" d="M0 0"/></svg>`,
      'multi',
    )
    expect(result.innerSvg).toContain('fill="#101820"')
  })

  it('rewrites ids and url(#…) references to a per-icon prefix', () => {
    const inner =
      '<g><path fill="url(#g1)" d="M0 0"/><circle fill="currentColor"/></g>' +
      '<defs><linearGradient id="g1"><stop/></linearGradient></defs>'
    const result = transformSvg(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-allow-color>${inner}</svg>`,
      'star',
    )
    expect(result.innerSvg).toContain('id="appica-star-g1"')
    expect(result.innerSvg).toContain('url(#appica-star-g1)')
    expect(result.innerSvg).not.toMatch(/id="g1"/)
    expect(result.innerSvg).not.toMatch(/url\(#g1\)/)
  })

  it('rewrites href="#…" and xlink:href="#…" id references', () => {
    const inner =
      '<use href="#shape"/><use xlink:href="#shape"/>' +
      '<defs><path id="shape" d="M0 0" fill="currentColor"/></defs>'
    const result = transformSvg(wrap(inner), 'reuse')
    expect(result.innerSvg).toContain('href="#appica-reuse-shape"')
    expect(result.innerSvg).toContain('xlink:href="#appica-reuse-shape"')
    expect(result.innerSvg).toContain('id="appica-reuse-shape"')
  })

  it('collapses runs of whitespace between elements', () => {
    const inner = `\n  <path fill="currentColor" d="M0 0"/>\n  <path fill="currentColor" d="M1 1"/>\n`
    const result = transformSvg(wrap(inner), 'sample')
    expect(result.innerSvg).toBe(
      '<path fill="currentColor" d="M0 0"/><path fill="currentColor" d="M1 1"/>',
    )
  })

  it('throws when the inner content is empty', () => {
    expect(() =>
      transformSvg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>`, 'sample'),
    ).toThrow(/inner content/)
  })
})
