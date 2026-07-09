import type { SVGProps } from 'react'

export interface IconFactoryOptions {
  /** SVG viewBox; defaults to "0 0 24 24" */
  viewBox?: string
  /** Root <svg> fill. Defaults to "currentColor"; line icons set "none". */
  fill?: SVGProps<SVGSVGElement>['fill']
  /** Root <svg> stroke. */
  stroke?: SVGProps<SVGSVGElement>['stroke']
  /** Root <svg> stroke-width. */
  strokeWidth?: SVGProps<SVGSVGElement>['strokeWidth']
  /** Root <svg> stroke-linecap. */
  strokeLinecap?: SVGProps<SVGSVGElement>['strokeLinecap']
  /** Root <svg> stroke-linejoin. */
  strokeLinejoin?: SVGProps<SVGSVGElement>['strokeLinejoin']
  /** Root <svg> stroke-miterlimit. */
  strokeMiterlimit?: SVGProps<SVGSVGElement>['strokeMiterlimit']
}

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'size' | 'strokeWidth'> {
  /** Sets both width and height on the rendered <svg>. Defaults to 24. */
  size?: number | string
  /** Stroke width. Accepts any number including floats (e.g. 1.5, 1.75). */
  strokeWidth?: number
}

export type IconComponent = ReturnType<typeof createIcon>

const BASE_CLASS = 'appica-icon'

export function createIcon(name: string, svgContent: string, options: IconFactoryOptions = {}) {
  const {
    viewBox = '0 0 24 24',
    fill = 'currentColor',
    stroke,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeMiterlimit,
  } = options

  function Component({
    size = 24,
    className,
    'aria-hidden': ariaHidden = 'true',
    ref,
    ...props
  }: IconProps) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeMiterlimit={strokeMiterlimit}
        width={size}
        height={size}
        aria-hidden={ariaHidden}
        className={className ? `${BASE_CLASS} ${className}` : BASE_CLASS}
        {...props}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    )
  }
  Component.displayName = name
  return Component
}
