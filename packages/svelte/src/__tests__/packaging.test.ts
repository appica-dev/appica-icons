// @vitest-environment node
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { compile, preprocess } from 'svelte/compiler'
import config from '../../svelte.config.js'

const SRC_DIR = join(dirname(fileURLToPath(import.meta.url)), '..')

// svelte-package ships what svelte.config.js preprocesses. With current dependencies, Svelte before
// 5.14.3 can't compile TypeScript in .svelte files: shipped components must be plain JS.
describe('packaging', () => {
  it.each([
    'Icon.svelte',
    'icons/text-editing/bold.svelte',
    'icons/database/database-filled.svelte',
  ])('ships %s as plain JavaScript', async (file) => {
    const filename = join(SRC_DIR, file)
    const { code } = await preprocess(readFileSync(filename, 'utf-8'), config.preprocess, {
      filename,
    })
    // Without lang="ts", the compiler parses the script as JavaScript and rejects any TypeScript left.
    const javascript = code.replace(/(<script[^>]*?)\s+lang="ts"/g, '$1')
    for (const generate of ['client', 'server'] as const) {
      expect(() => compile(javascript, { filename, generate })).not.toThrow()
    }
  })
})
