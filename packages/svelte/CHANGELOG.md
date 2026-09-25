# Changelog

All notable changes to `@appica/icons-svelte`.

The library follows [semantic versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.1 - 2026-09-25

### Fixed

- **`strokeWidth`** — the prop now takes effect. Each line icon's built-in `stroke-width="1.5"` used to override it, so `<Bold strokeWidth={2} />` still rendered at 1.5.
- **Direct file imports** — `import Bold from '@appica/icons-svelte/icons/text-editing/bold'` now resolves. The `./icons/*` export pointed at `.js` files the package doesn't contain; it now points at each icon's `.svelte` component and its type declarations.
- **Icon prop types** — every icon's props are now typed (`IconProps` without `innerSvg`). Each icon's declaration used to reference an undefined `$$ComponentProps` type, so any prop was accepted unchecked, and with `skipLibCheck: false` every icon reported a type error. TypeScript now flags unknown or mistyped props: if you passed the kebab-case `stroke-width` as a workaround, switch to `strokeWidth` (the attribute still works at runtime).
- **Package contents** — compiled test files are no longer published.

## 1.0.0 - 2026-09-24

The first public release of `@appica/icons-svelte`.

### Added

- **Tree-shakeable Svelte 5 components** for the full icon collection, importable from the package root (`import { Bold } from '@appica/icons-svelte'`).
- **`Icon`** — the base component for building custom icon wrappers, with the `IconProps` type.
