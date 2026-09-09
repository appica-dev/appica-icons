# Contributing

Appica Icons is developed in-house, and we're not accepting feature pull requests at this time. That said, your input genuinely helps the project:

- **Bug reports** are very welcome — please [open an issue](https://github.com/appica-dev/appica-icons/issues) — a small code example that shows the problem helps us fix it much faster.
- **Small fixes** (typos, docs, obvious one-line bugs) are fine as PRs.
- For anything larger — including new icon requests — **open an issue first** so we can discuss it before you invest time.

## Working on a fix or reproducing an issue locally

### Prerequisites

- Node.js >= 20
- [pnpm](https://pnpm.io) >= 9 (`npm install -g pnpm`)

### Setup and common commands

```sh
pnpm install

pnpm build          # build all packages (generates components from SVG assets, then bundles)
pnpm test           # run all test suites
pnpm typecheck      # type-check all packages
pnpm format         # format the codebase with Prettier
```

Package-specific commands can be run with a filter, e.g. `pnpm --filter @appica/icons-react codegen` to re-generate components from `assets/` without bundling.

### How codegen works

Icon components are generated, not hand-written: [`assets/`](./assets) holds the SVG sources, organized by category, and the shared pipeline in [`scripts/codegen/`](./scripts/codegen) parses and validates each source SVG before calling the framework package's render hooks to write one component file per icon into its `src/icons/`. Generated files are git-ignored build output (`packages/*/src/icons/` in `.gitignore`) — edit the SVG sources or the codegen scripts, never the generated files. After a fresh clone the icons only exist once codegen has run; packages regenerate them on demand and automatically before every `test`/`typecheck` run (via `pretypecheck`/`pretest` hooks, see `packages/react/package.json`).

#### Adding a new framework package

1. **Scaffold `packages/<framework>/`** with its package manifest and source files. No further wiring is needed: [`pnpm-workspace.yaml`](./pnpm-workspace.yaml) already includes `packages/*`, so the root `pnpm build`, `pnpm test`, and `pnpm typecheck` (`pnpm -r <script>`) pick the package up automatically, and `.gitignore` already covers its generated output.
2. **Write a thin `scripts/build.ts`** — the pipeline itself lives in the shared core, so the script only calls `generateIcons(target)` from `../../../scripts/codegen/index.js` (i.e. `scripts/codegen/` at the repo root) and writes into `<packageDir>/src/icons/`. The target describes only the framework-specific pieces:
   - `packageDir` — absolute path of the package directory (`assetsDir` defaults to the repo's [`assets/`](./assets)),
   - `extension` — component file extension, e.g. `".tsx"` or `".svelte"`,
   - `renderIconFile(record)` — full content of one icon component file; `record` provides `category`, `name`, `componentName`, `aliasName`, `innerSvg` (the sanitized SVG body), `viewBox`, and `rootAttrs` (presentation attributes such as `strokeWidth`),
   - `renderCategoryBarrel(records)` — content of each category's `index.ts`; a root `index.ts` re-exporting all categories is written by default.
3. **Wire codegen into the package scripts**, mirroring react: `"codegen": "tsx scripts/build.ts"`, run `codegen` as the first step of `build`, and add `"pretypecheck": "pnpm run codegen"` and `"pretest": "pnpm run codegen"` so tests and typechecks work straight from a fresh clone.

[`packages/react/scripts/build.ts`](./packages/react/scripts/build.ts) is the reference implementation — the examples below show only the hooks that differ per framework.

**Svelte 5** — every icon is a thin wrapper around `Icon.svelte` that receives `innerSvg` plus the kebab-case presentation attributes (`stroke-width`, …) and spreads consumer props onto the `<svg>`:

```ts
generateIcons({
  packageDir: PACKAGE_DIR,
  extension: '.svelte',
  renderIconFile({ innerSvg }) {
    // Emit non-default presentation attrs as kebab-case props on the <Icon> wrapper
    // (mirrors how the react template maps record.rootAttrs), then:
    return (
      `<script lang="ts">\n` +
      `  import Icon from "../../Icon.svelte";\n\n` +
      `  let props = $props();\n\n` +
      `  const innerSvg = ${JSON.stringify(innerSvg)};\n` +
      `</script>\n\n` +
      `<Icon\n` +
      `  innerSvg={innerSvg}\n` +
      `  {...props}\n` +
      `/>\n`
    )
  },
  renderCategoryBarrel(records) {
    return (
      records
        .flatMap((r) => [
          `export { default as ${r.componentName} } from "./${r.name}.svelte";`,
          `export { default as ${r.aliasName} } from "./${r.name}.svelte";`,
        ])
        .join('\n') + '\n'
    )
  },
})
```

**Vue** — illustrative (the vue package is planned but not implemented yet; adapt the hooks to the component style you choose):

```ts
generateIcons({
  packageDir: PACKAGE_DIR,
  extension: '.vue',
  renderIconFile({ innerSvg }) {
    return (
      `<script setup lang="ts">\n` +
      `  const innerSvg = ${JSON.stringify(innerSvg)}\n` +
      `</script>\n\n` +
      `<template>\n` +
      `  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-html="innerSvg" />\n` +
      `</template>\n`
    )
  },
  renderCategoryBarrel(records) {
    return (
      records
        .map((r) => `export { default as ${r.componentName} } from "./${r.name}.vue";`)
        .join('\n') + '\n'
    )
  },
})
```
