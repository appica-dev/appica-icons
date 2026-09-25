[![Appica Icons for Svelte](https://raw.githubusercontent.com/appica-dev/appica-icons/main/.github/assets/appica-icons-svelte.jpg)](https://appica.dev/ui/icons)

[![npm](https://img.shields.io/npm/v/@appica/icons-svelte)](https://www.npmjs.com/package/@appica/icons-svelte)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue)](https://www.typescriptlang.org/)
[![Figma](https://img.shields.io/badge/Figma-design_file-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/community/file/1657080448204231925)

5,000+ tree-shakeable SVG icon components for Svelte 5.

Icons are sourced primarily from [Tabler Icons](https://tabler.io/icons), with a selection from [Hugeicons](https://hugeicons.com) and some custom designs. All icons are normalized, consistently refined, optimized for smaller file size, and organized into categories.

## Installation

```bash
npm install @appica/icons-svelte
# or
yarn add @appica/icons-svelte
# or
pnpm add @appica/icons-svelte
# or
bun add @appica/icons-svelte
```

Requires Svelte 5 or later. ESM only.

## Usage

Import icons from the package root:

```svelte
<script>
  import { Bold, Italic, Underline, Link } from '@appica/icons-svelte'
</script>

<div>
  <Bold />
  <Italic />
  <Underline />
  <Link />
</div>
```

Every icon exports its component as a bare named export and an `…Icon` alias, both pointing at the same component:

```svelte
<script>
  import { Bold, BoldIcon } from '@appica/icons-svelte'
</script>

<!-- Bold === BoldIcon -->
```

### Direct file imports

For a smaller dev-time module graph — or when you prefer an explicit import — every icon is also published as its own module at `@appica/icons-svelte/icons/<category>/<file>`:

```svelte
<script>
  import Bold from '@appica/icons-svelte/icons/text-editing/bold'
  import BoldIcon from '@appica/icons-svelte/icons/text-editing/bold'
</script>

<!-- Bold === BoldIcon -->
```

There are no category barrels: paths like `@appica/icons-svelte/animals` or `@appica/icons-svelte/icons/animals` do not resolve. Import from the package root or from a single icon file.

### Props

Every icon accepts these props plus the remaining SVG attributes (`color`, `stroke-linecap`, `stroke-linejoin`, `fill`, `role`, …):

| Prop          | Type               | Default         | Description                                                                                               |
| ------------- | ------------------ | --------------- | --------------------------------------------------------------------------------------------------------- |
| `size`        | `number \| string` | `24`            | Sets both `width` and `height`. Accepts a number (px) or any CSS length string.                           |
| `strokeWidth` | `number \| string` | `1.5`           | Stroke width for line icons (per-icon default baked into the component). Accepts floats e.g. `1.75`, `2`. |
| `class`       | `string`           | `"appica-icon"` | Additional classes appended to the base `appica-icon` class.                                              |
| `style`       | `string`           | —               | Inline styles.                                                                                            |
| `width`       | `number \| string` | `size`          | Explicit width override.                                                                                  |
| `height`      | `number \| string` | `size`          | Explicit height override.                                                                                 |
| `aria-hidden` | `boolean`          | `true`          | Decorative by default — see Accessibility.                                                                |

```svelte
<Dashboard class="size-5 text-zinc-700" />
<Star size={20} color="gold" strokeWidth={1.5} />
```

### Accessibility

Icons default to `aria-hidden="true"` because most uses are decorative. When an icon stands on its own as a meaningful interactive control, give it an accessible name:

```svelte
<button aria-label="Edit">
  <Pencil />
</button>

<!-- or directly on the svg: -->
<Pencil aria-hidden={false} aria-label="Edit" role="img" />
```

### `Icon` (base component)

Exposed for users who want to build wrappers (e.g. add a default size, drop-shadow, or default class). It renders the given `innerSvg` markup inside a normalized `<svg>` root:

```svelte
<script>
  import { Icon } from '@appica/icons-svelte'
</script>

<Icon innerSvg="<path d='M8 5l8 7-8 7z' />" size={16} />
```

`innerSvg` is required; every generated icon passes its own. `Icon` accepts the same props as any icon.

## TypeScript

Full TypeScript support is built in. `IconProps` is exported for use in your own components:

```ts
import type { IconProps } from '@appica/icons-svelte'
```

## Changelog

What changed in each release is in [`CHANGELOG.md`](./CHANGELOG.md), next to this file.

## Figma design file

The full icon collection is included in the free [Appica UI Figma file](https://www.figma.com/community/file/1657080448204231925), alongside the component library it pairs with — use the same icons in your designs that you import in code.

## Stay updated

Follow [@Appica_dev](https://x.com/Appica_dev) on X for release announcements and updates.

## License

MIT © [Appica](https://appica.dev)

Free to use in personal and commercial projects.
