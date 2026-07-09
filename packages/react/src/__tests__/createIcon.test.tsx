import { createRef } from 'react'
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { createIcon } from '../createIcon.js'

const SAMPLE = '<path d="M0 0h24v24H0z"/>'

describe('createIcon', () => {
  it('renders an svg with the default viewBox', () => {
    const Icon = createIcon('Sample', SAMPLE)
    const { container } = render(<Icon data-testid="i" />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('viewBox')).toBe('0 0 24 24')
    expect(svg.getAttribute('fill')).toBe('currentColor')
  })

  it('respects an explicit viewBox option', () => {
    const Icon = createIcon('Sample', SAMPLE, { viewBox: '0 0 32 32' })
    const { container } = render(<Icon />)
    expect(container.querySelector('svg')!.getAttribute('viewBox')).toBe('0 0 32 32')
  })

  it('applies stroke presentation attrs (line icon shape)', () => {
    const Icon = createIcon('Cat', SAMPLE, {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    })
    const { container } = render(<Icon />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('fill')).toBe('none')
    expect(svg.getAttribute('stroke')).toBe('currentColor')
    expect(svg.getAttribute('stroke-width')).toBe('1.5')
    expect(svg.getAttribute('stroke-linecap')).toBe('round')
    expect(svg.getAttribute('stroke-linejoin')).toBe('round')
  })

  it('lets user props override factory presentation attrs', () => {
    const Icon = createIcon('Cat', SAMPLE, { fill: 'none', stroke: 'currentColor' })
    const { container } = render(<Icon fill="red" stroke="blue" />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('fill')).toBe('red')
    expect(svg.getAttribute('stroke')).toBe('blue')
  })

  it('defaults aria-hidden to "true" and allows override', () => {
    const Icon = createIcon('Sample', SAMPLE)
    const { container, rerender } = render(<Icon />)
    expect(container.querySelector('svg')!.getAttribute('aria-hidden')).toBe('true')
    rerender(<Icon aria-hidden={false} aria-label="sample" />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('aria-hidden')).toBe('false')
    expect(svg.getAttribute('aria-label')).toBe('sample')
  })

  it('forwards a ref to the underlying svg element', () => {
    const Icon = createIcon('Sample', SAMPLE)
    const ref = createRef<SVGSVGElement>()
    render(<Icon ref={ref} />)
    expect(ref.current).toBeInstanceOf(SVGSVGElement)
  })

  it('sets displayName from the supplied name', () => {
    const Icon = createIcon('Dashboard', SAMPLE)
    expect(Icon.displayName).toBe('Dashboard')
  })

  it('passes through style, data-* and event handlers', () => {
    const onClick = vi.fn()
    const Icon = createIcon('Sample', SAMPLE)
    const { container } = render(<Icon style={{ color: 'red' }} data-foo="bar" onClick={onClick} />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('style')).toContain('red')
    expect(svg.getAttribute('data-foo')).toBe('bar')
    svg.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('defaults size to 24 and applies it to width and height', () => {
    const Icon = createIcon('Sample', SAMPLE)
    const { container } = render(<Icon />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('width')).toBe('24')
    expect(svg.getAttribute('height')).toBe('24')
  })

  it('respects an explicit size prop', () => {
    const Icon = createIcon('Sample', SAMPLE)
    const { container } = render(<Icon size={32} />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('width')).toBe('32')
    expect(svg.getAttribute('height')).toBe('32')
  })

  it('lets explicit width/height props win over size', () => {
    const Icon = createIcon('Sample', SAMPLE)
    const { container } = render(<Icon size={32} width={48} height={64} />)
    const svg = container.querySelector('svg')!
    expect(svg.getAttribute('width')).toBe('48')
    expect(svg.getAttribute('height')).toBe('64')
  })

  it('forwards a color prop so currentColor inherits from it', () => {
    const Icon = createIcon('Sample', SAMPLE)
    const { container } = render(<Icon color="red" />)
    expect(container.querySelector('svg')!.getAttribute('color')).toBe('red')
  })

  it('forwards a numeric strokeWidth prop', () => {
    const Icon = createIcon('Sample', SAMPLE, { stroke: 'currentColor' })
    const { container } = render(<Icon strokeWidth={2} />)
    expect(container.querySelector('svg')!.getAttribute('stroke-width')).toBe('2')
  })

  it('emits the "appica-icon" base class', () => {
    const Icon = createIcon('ArrowUp', SAMPLE)
    const { container } = render(<Icon />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveClass('appica-icon')
  })

  it('merges a user-supplied className with the base class', () => {
    const Icon = createIcon('Dashboard', SAMPLE)
    const { container } = render(<Icon className="size-5 text-zinc-700" />)
    const svg = container.querySelector('svg')!
    expect(svg).toHaveClass('appica-icon')
    expect(svg).toHaveClass('size-5')
    expect(svg).toHaveClass('text-zinc-700')
  })

  it('injects the supplied svg content via dangerouslySetInnerHTML', () => {
    const Icon = createIcon('Sample', '<circle cx="12" cy="12" r="6"/>')
    const { container } = render(<Icon />)
    expect(container.querySelector('svg circle')).not.toBeNull()
  })
})
