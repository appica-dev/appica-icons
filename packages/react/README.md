[![Appica Icons for React](https://raw.githubusercontent.com/appica-dev/appica-icons/main/.github/assets/appica-icons-react.jpg)](https://appica.dev/ui/icons)

[![npm](https://img.shields.io/npm/v/@appica/icons-react)](https://www.npmjs.com/package/@appica/icons-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue)](https://www.typescriptlang.org/)
[![Figma](https://img.shields.io/badge/Figma-design_file-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/community/file/1657080448204231925)

5,000+ tree-shakeable SVG icon components for React.

Icons are sourced primarily from [Tabler Icons](https://tabler.io/icons), with a selection from [Hugeicons](https://hugeicons.com) and some custom designs. All icons are normalized, consistently refined, optimized for smaller file size, and organized into categories.

## Installation

```bash
npm install @appica/icons-react
# or
yarn add @appica/icons-react
# or
pnpm add @appica/icons-react
# or
bun add @appica/icons-react
```

Requires React 19 or later. ESM only.

## Usage

Import icons from the package root:

```tsx
import { Bold, Italic, Underline, Link } from '@appica/icons-react'

export function Toolbar() {
  return (
    <div>
      <Bold />
      <Italic />
      <Underline />
      <Link />
    </div>
  )
}
```

Every icon exports its component as a bare named export and an `…Icon` alias, both pointing at the same component:

```tsx
import { Bold, BoldIcon } from '@appica/icons-react'

// Bold === BoldIcon
```

### Direct file imports

For a smaller dev-time module graph — or when you prefer an explicit import — every icon is also published as its own module at `@appica/icons-react/icons/<category>/<file>`:

```tsx
import BoldDefault, { Bold, BoldIcon } from '@appica/icons-react/icons/text-editing/bold'

// BoldDefault === Bold
// Bold === BoldIcon
```

There are no category barrels: paths like `@appica/icons-react/animals` or `@appica/icons-react/icons/animals` do not resolve. Import from the package root or from a single icon file.

### Props

Every icon accepts these props plus the full `SVGProps<SVGSVGElement>` surface:

| Prop          | Type                 | Default         | Description                                                                     |
| ------------- | -------------------- | --------------- | ------------------------------------------------------------------------------- |
| `size`        | `number \| string`   | `24`            | Sets both `width` and `height`. Accepts a number (px) or any CSS length string. |
| `color`       | `string`             | inherits        | Sets `currentColor`. Pass directly as a prop, via `style`, or via CSS.          |
| `strokeWidth` | `number`             | `1.5`           | Stroke width for line icons. Accepts floats e.g. `1.75`, `2`.                   |
| `className`   | `string`             | `"appica-icon"` | Additional classes appended to the base `appica-icon` class.                    |
| `style`       | `CSSProperties`      | —               | Inline styles.                                                                  |
| `aria-hidden` | `boolean`            | `true`          | Decorative by default — see Accessibility.                                      |
| `ref`         | `Ref<SVGSVGElement>` | —               | Forwarded to the `<svg>` element.                                               |

```tsx
<Dashboard className="size-5 text-zinc-700" />
<Star size={20} color="gold" strokeWidth={1.5} />
```

### Accessibility

Icons default to `aria-hidden="true"` because most uses are decorative. When an icon stands on its own as a meaningful interactive control, give it an accessible name:

```tsx
<button aria-label="Edit">
  <Pencil />
</button>

// or directly on the svg:
<Pencil aria-hidden={false} aria-label="Edit" role="img" />
```

### `createIcon` (factory)

Exposed for users who want to build wrappers (e.g. add a default size, drop-shadow, or default class):

```tsx
import { createIcon } from '@appica/icons-react'
import type { IconFactoryOptions, IconComponent } from '@appica/icons-react'
```

## TypeScript

Full TypeScript support is built in. `IconProps` and `IconComponent` are exported for use in your own components:

```ts
import type { IconProps, IconComponent } from '@appica/icons-react'

// type a prop that accepts any icon
function Button({ icon: Icon, label }: { icon: IconComponent; label: string }) {
  return <button><Icon size={16} /> {label}</button>
}

// type a wrapper that forwards props to an icon
const MyIcon = (props: IconProps) => <Bold className="shrink-0" {...props} />
```

## Changelog

What changed in each release is in [`CHANGELOG.md`](./CHANGELOG.md), next to this file, and on [appica.dev/ui/icons](https://appica.dev/ui/icons) alongside the documentation and Figma updates that shipped with it.

## Figma design file

The full icon collection is included in the free [Appica UI Figma file](https://www.figma.com/community/file/1657080448204231925), alongside the component library it pairs with — use the same icons in your designs that you import in code.

## Stay updated

Follow [@Appica_dev](https://x.com/Appica_dev) on X for release announcements and updates.

## License

MIT © [Appica](https://appica.dev)

Free to use in personal and commercial projects.
