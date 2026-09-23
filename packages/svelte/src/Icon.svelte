<script lang="ts">
  import type { IconProps } from './iconProps.js'

  let {
    size = 24,
    class: className,
    innerSvg,
    viewBox = '0 0 24 24',
    fill = 'currentColor',
    stroke,
    strokeWidth,
    'stroke-linecap': strokeLinecap,
    'stroke-linejoin': strokeLinejoin,
    'stroke-miterlimit': strokeMiterlimit,
    'aria-hidden': ariaHidden = true,
    width,
    height,
    ...rest
  }: IconProps = $props()
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}
  {fill}
  {stroke}
  stroke-width={strokeWidth}
  stroke-linecap={strokeLinecap}
  stroke-linejoin={strokeLinejoin}
  stroke-miterlimit={strokeMiterlimit}
  width={width ?? size}
  height={height ?? size}
  aria-hidden={ariaHidden}
  class={className ? `appica-icon ${className}` : 'appica-icon'}
  {...rest}
>
  {@html innerSvg}
</svg>
