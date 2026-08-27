import { render } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Icon from '../Icon.svelte';
const SAMPLE = '<path d="M0 0h24v24H0z"/>';
describe('Icon', () => {
    it('renders an svg with the default viewBox', () => {
        const { container } = render(Icon, { props: { innerSvg: SAMPLE } });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
        expect(svg.getAttribute('fill')).toBe('currentColor');
    });
    it('respects an explicit viewBox prop', () => {
        const { container } = render(Icon, { props: { innerSvg: SAMPLE, viewBox: '0 0 32 32' } });
        expect(container.querySelector('svg').getAttribute('viewBox')).toBe('0 0 32 32');
    });
    it('applies stroke presentation attrs (line icon shape)', () => {
        const { container } = render(Icon, {
            props: {
                innerSvg: SAMPLE,
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            },
        });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('fill')).toBe('none');
        expect(svg.getAttribute('stroke')).toBe('currentColor');
        expect(svg.getAttribute('stroke-width')).toBe('1.5');
        expect(svg.getAttribute('stroke-linecap')).toBe('round');
        expect(svg.getAttribute('stroke-linejoin')).toBe('round');
    });
    it('lets user props override default presentation attrs', () => {
        const { container } = render(Icon, {
            props: {
                innerSvg: SAMPLE,
                fill: 'red',
                stroke: 'blue',
            },
        });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('fill')).toBe('red');
        expect(svg.getAttribute('stroke')).toBe('blue');
    });
    it('defaults aria-hidden to "true" and allows override', () => {
        const { container, rerender } = render(Icon, { props: { innerSvg: SAMPLE } });
        expect(container.querySelector('svg').getAttribute('aria-hidden')).toBe('true');
        rerender({ innerSvg: SAMPLE, 'aria-hidden': false, 'aria-label': 'sample' });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('aria-hidden')).toBe('false');
        expect(svg.getAttribute('aria-label')).toBe('sample');
    });
    it('defaults size to 24 and applies it to width and height', () => {
        const { container } = render(Icon, { props: { innerSvg: SAMPLE } });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('width')).toBe('24');
        expect(svg.getAttribute('height')).toBe('24');
    });
    it('respects an explicit size prop', () => {
        const { container } = render(Icon, { props: { innerSvg: SAMPLE, size: 32 } });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('width')).toBe('32');
        expect(svg.getAttribute('height')).toBe('32');
    });
    it('lets explicit width/height props win over size', () => {
        const { container } = render(Icon, {
            props: { innerSvg: SAMPLE, size: 32, width: 48, height: 64 },
        });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('width')).toBe('48');
        expect(svg.getAttribute('height')).toBe('64');
    });
    it('forwards a color prop so currentColor inherits from it', () => {
        const { container } = render(Icon, { props: { innerSvg: SAMPLE, color: 'red' } });
        expect(container.querySelector('svg').getAttribute('color')).toBe('red');
    });
    it('forwards a numeric strokeWidth prop', () => {
        const { container } = render(Icon, {
            props: { innerSvg: SAMPLE, stroke: 'currentColor', strokeWidth: 2 },
        });
        expect(container.querySelector('svg').getAttribute('stroke-width')).toBe('2');
    });
    it('emits the "appica-icon" base class', () => {
        const { container } = render(Icon, { props: { innerSvg: SAMPLE } });
        const svg = container.querySelector('svg');
        expect(svg).toHaveClass('appica-icon');
    });
    it('merges a user-supplied class with the base class', () => {
        const { container } = render(Icon, {
            props: { innerSvg: SAMPLE, class: 'size-5 text-zinc-700' },
        });
        const svg = container.querySelector('svg');
        expect(svg).toHaveClass('appica-icon');
        expect(svg).toHaveClass('size-5');
        expect(svg).toHaveClass('text-zinc-700');
    });
    it('injects the supplied svg content via {@html}', () => {
        const { container } = render(Icon, { props: { innerSvg: '<circle cx="12" cy="12" r="6"/>' } });
        expect(container.querySelector('svg circle')).not.toBeNull();
    });
    it('passes through data-* attributes and event handlers', () => {
        const onClick = vi.fn();
        const { container } = render(Icon, {
            props: {
                innerSvg: SAMPLE,
                'data-foo': 'bar',
                onclick: onClick,
            },
        });
        const svg = container.querySelector('svg');
        expect(svg.getAttribute('data-foo')).toBe('bar');
        svg.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
