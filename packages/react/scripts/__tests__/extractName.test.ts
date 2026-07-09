import { describe, it, expect } from 'vitest'
import { extractName, toPascalCase } from '../extractName'

describe('extractName', () => {
  it('extracts a single-segment name', () => {
    expect(extractName('dashboard.svg')).toEqual({
      name: 'dashboard',
      componentName: 'Dashboard',
      aliasName: 'DashboardIcon',
    })
  })

  it('PascalCases multi-segment kebab names', () => {
    expect(extractName('arrow-up.svg')).toMatchObject({
      name: 'arrow-up',
      componentName: 'ArrowUp',
      aliasName: 'ArrowUpIcon',
    })
    expect(extractName('arrow-autofit-content-filled.svg')).toMatchObject({
      componentName: 'ArrowAutofitContentFilled',
    })
  })

  it('allows trailing digits in segments', () => {
    expect(extractName('trash-2.svg')).toMatchObject({
      componentName: 'Trash2',
      aliasName: 'Trash2Icon',
    })
    expect(extractName('h2.svg')).toMatchObject({ componentName: 'H2' })
  })

  it('rejects filenames without the .svg extension', () => {
    expect(() => extractName('dashboard.png')).toThrow(/Expected an .svg/)
  })

  it('rejects names starting with a digit (invalid JS identifier)', () => {
    expect(() => extractName('2arrow.svg')).toThrow(/digit/)
  })

  it('rejects names containing invalid characters', () => {
    expect(() => extractName('Bad_Name.svg')).toThrow(/Invalid icon filename/)
    expect(() => extractName('arrow up.svg')).toThrow(/Invalid icon filename/)
    expect(() => extractName('-arrow.svg')).toThrow(/Invalid icon filename/)
    expect(() => extractName('arrow-.svg')).toThrow(/Invalid icon filename/)
  })

  it('rejects empty names', () => {
    expect(() => extractName('.svg')).toThrow()
  })
})

describe('toPascalCase', () => {
  it('handles single words', () => {
    expect(toPascalCase('star')).toBe('Star')
  })

  it('handles multi-segment kebab', () => {
    expect(toPascalCase('arrow-autofit-down')).toBe('ArrowAutofitDown')
  })

  it('preserves digits within segments', () => {
    expect(toPascalCase('h2')).toBe('H2')
    expect(toPascalCase('trash-2')).toBe('Trash2')
  })

  it('disambiguates adjacent digit-only segments with an underscore', () => {
    // Without disambiguation "ironing-1-1" would collapse to "Ironing11" and collide with "ironing-11".
    expect(toPascalCase('ironing-1-1')).toBe('Ironing1_1')
    expect(toPascalCase('ironing-11')).toBe('Ironing11')
    expect(toPascalCase('a-1-2-3')).toBe('A1_2_3')
    expect(toPascalCase('a-1-b')).toBe('A1B')
    expect(toPascalCase('a-b-1')).toBe('AB1')
  })
})
