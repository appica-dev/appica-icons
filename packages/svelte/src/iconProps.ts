import type { SVGAttributes } from 'svelte/elements'

export type IconProps = Omit<SVGAttributes<SVGSVGElement>, 'width' | 'height' | 'stroke-width'> & {
  /** Sets both width and height on the rendered <svg>. Defaults to 24. */
  size?: number | string
  /** Inner SVG markup injected into the root <svg>. */
  innerSvg: string
  /** Stroke width. Accepts any number including floats (e.g. 1.5, 1.75). */
  strokeWidth?: number | string
  width?: number | string
  height?: number | string
}
