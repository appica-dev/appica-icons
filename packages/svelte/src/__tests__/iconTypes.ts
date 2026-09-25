// Compile-time assertions for generated icon props — checked by `pnpm typecheck`, not vitest.
import type { ComponentProps } from 'svelte'
import type ArrowLeft from '../icons/arrows/arrow-left.svelte'

type ArrowLeftProps = ComponentProps<typeof ArrowLeft>

export const valid: ArrowLeftProps[] = [
  { size: 20, strokeWidth: 1.75, class: 'size-5', color: 'gold' },
  { size: '1.5rem', strokeWidth: '2', width: 32, 'aria-hidden': false, 'aria-label': 'Back' },
]

// @ts-expect-error innerSvg is baked into every generated icon
export const withInnerSvg: ArrowLeftProps = { innerSvg: '<path/>' }

// @ts-expect-error strokeWidth takes a number or a string
export const invalidStrokeWidth: ArrowLeftProps = { strokeWidth: true }

// @ts-expect-error unknown props are rejected
export const unknownProp: ArrowLeftProps = { notAProp: 1 }
