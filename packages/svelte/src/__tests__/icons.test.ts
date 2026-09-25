import { render } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import Bold from '../icons/text-editing/bold.svelte'
import DatabaseFilled from '../icons/database/database-filled.svelte'

describe('generated icons', () => {
  it('renders the presentation attributes baked into a line icon', () => {
    const { container } = render(Bold)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('fill')).toBe('none')
    expect(svg.getAttribute('stroke')).toBe('currentColor')
    expect(svg.getAttribute('stroke-width')).toBe('1.5')
    expect(svg.getAttribute('stroke-linecap')).toBe('round')
    expect(svg.getAttribute('stroke-linejoin')).toBe('round')
  })

  it.each([2, 1.75, '3'])(
    'lets strokeWidth={%s} override the baked-in stroke width',
    (strokeWidth) => {
      const { container } = render(Bold, { props: { strokeWidth } })
      expect(container.querySelector('svg')!.getAttribute('stroke-width')).toBe(String(strokeWidth))
    },
  )

  it('still honours a kebab-case stroke-width attribute from untyped consumers', () => {
    const props: Record<string, unknown> = { 'stroke-width': 2.5 }
    const { container } = render(Bold, { props })
    expect(container.querySelector('svg')!.getAttribute('stroke-width')).toBe('2.5')
  })

  it('lets consumer props override the other baked-in presentation attributes', () => {
    const { container } = render(Bold, {
      props: {
        fill: 'red',
        stroke: 'blue',
        'stroke-linecap': 'square',
        'stroke-linejoin': 'miter',
      },
    })
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('fill')).toBe('red')
    expect(svg.getAttribute('stroke')).toBe('blue')
    expect(svg.getAttribute('stroke-linecap')).toBe('square')
    expect(svg.getAttribute('stroke-linejoin')).toBe('miter')
  })

  it('renders filled icons without stroke attributes', () => {
    const { container } = render(DatabaseFilled)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('fill')).toBe('currentColor')
    expect(svg.hasAttribute('stroke')).toBe(false)
    expect(svg.hasAttribute('stroke-width')).toBe(false)
  })
})
