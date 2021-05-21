import { createHeaderAnchor } from '../headers'

describe(`createHeaderAnchor`, () => {
  it(`should convert numbered header into a target for anchor`, () => {
    expect(createHeaderAnchor(`4. Overriding HTTP method`)).toBe(
      `overriding-http-method`
    )

    expect(createHeaderAnchor(`5. Order items (deal line)`)).toBe(
      `order-items-deal-line`
    )
  })
})
