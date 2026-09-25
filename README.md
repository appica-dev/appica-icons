[![Appica Icons](.github/assets/appica-icons-root.jpg)](https://appica.dev/ui/icons)

A monorepo housing framework packages for the Appica SVG icon collection.

Icons are sourced primarily from [Tabler Icons](https://tabler.io/icons), with a selection from [Hugeicons](https://hugeicons.com) and some custom designs. All icons are normalized, consistently refined, optimized for smaller file size, and organized into categories.

SVG sources live in [`assets/`](./assets), organized by category — each framework package generates its components from them at build time and is published to npm independently.

## Packages

|                                                                 | Package                | Version                                                                                                         | Links                                                                                                       |
| --------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <img src=".github/assets/react.svg" width="35" alt="React" />   | `@appica/icons-react`  | [![npm](https://img.shields.io/npm/v/@appica/icons-react)](https://www.npmjs.com/package/@appica/icons-react)   | [Docs](https://appica.dev/ui/icons) · [Changelog](packages/react/CHANGELOG.md) · [Source](packages/react)   |
| <img src=".github/assets/svelte.svg" width="35" alt="Svelte" /> | `@appica/icons-svelte` | [![npm](https://img.shields.io/npm/v/@appica/icons-svelte)](https://www.npmjs.com/package/@appica/icons-svelte) | [Docs](https://appica.dev/ui/icons) · [Changelog](packages/svelte/CHANGELOG.md) · [Source](packages/svelte) |

More variants are planned — webfont, Vue and more.

## Figma design file

The full icon collection is included in the free [Appica UI Figma file](https://www.figma.com/community/file/1657080448204231925), alongside the component library it pairs with — use the same icons in your designs that you import in code.

## Stay updated

Follow [@Appica_dev](https://x.com/Appica_dev) on X for release announcements, new icons, and previews of what's coming.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and workflow.

## License

MIT © [Appica](https://appica.dev)

Free to use in personal and commercial projects.
