import { kebabify, generateKey } from '../index'

describe(`kebabify`, () => {
  it(`should transform regular string`, () => {
    expect(kebabify(`Quick Start Guide`)).toBe(`quick-start-guide`)
  })

  it(`should transform regular string while keeping original letter casing`, () => {
    expect(kebabify(`QuicK StarT GuidE`, true)).toBe(`QuicK-StarT-GuidE`)
  })
})

describe(`generateKey`, () => {
  it(`should generate a key prop`, () => {
    expect(generateKey(`absolutely`, `83`)).toBe(`absolutely--83`)
  })
})
