# Changelog

All notable changes to `@appica/icons-react`.

The library follows [semantic versioning](https://semver.org/spec/v2.0.0.html).

## 1.1.0 - 2026-09-24

25 icons added across 11 categories — the collection now counts 5,000+ icons in total.

### Added

- **Arrows** — `arrow-fork-triple`.
- **Brands** — `brand-signal`, `brand-signal-filled`.
- **Communication** — `message-2-ai`, `message-2-sparkle`, `message-ai`, `message-sparkle`.
- **Devices** — `gpu`, `gpu-2`.
- **Document** — `folder-ai`, `folder-sparkle`, `folder-stats`, `folder-user`.
- **Ecommerce** — `cash-coin`.
- **Furniture** — an updated `rocking-chair`.
- **Git** — `git-branch-check`, `git-branch-x`, `git-merge-queue`, `git-pull-request-locked`, `git-pull-request-unlisted`.
- **Map & Travel** — `map-pinned`.
- **System** — `tabs`, `vault`.
- **Text Editing** — `edit-bulk`, `pencil-ai`.

### Improved

- **Dependencies** — all workspace dependencies updated to their latest versions, including the major bumps in TypeScript (6 → 7), Vitest (4 → 5), jsdom (29 → 30) and @testing-library/jest-dom (6 → 7).

## 1.0.0 - 2026-07-09

The first public release of `@appica/icons-react`.

### Added

- **Tree-shakeable React components** for the full icon collection, importable from the package root (`import { Bold } from '@appica/icons-react'`) or from per-icon subpaths (`import Bold from '@appica/icons-react/icons/text-editing/bold'`).
- **`createIcon`** — the factory for building custom icon components in the same style, with `IconProps`/`IconComponent` types.
