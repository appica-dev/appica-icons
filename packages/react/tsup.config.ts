import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.test.ts',
    '!src/**/*.test.tsx',
    '!src/**/__tests__/**',
  ],
  format: ['esm'],
  outDir: 'dist',
  dts: false,
  bundle: false,
  sourcemap: false,
  clean: true,
  external: ['react', 'react/jsx-runtime'],
})
