import { createHeaderAnchor } from "./misc"

describe("createHeaderAnchor", () => {
  it("should transform regular string", () => {
    expect(createHeaderAnchor("Quick Start Guide")).toBe("quick-start-guide")
  })

  it("should strip non alpha characters", () => {
    expect(createHeaderAnchor("Order items (deal line)")).toBe("order-items-deal-line")
  })

  it("should convert numbered header into a target for anchor", () => {
    expect(createHeaderAnchor("4. Overriding HTTP method")).toBe("overriding-http-method")
  })

  it("should convert accented characters", () => {
    expect(createHeaderAnchor("Chapître 1: L'Éléphant, le Ça et l'Être")).toBe("chapitre-1-l-elephant-le-ca-et-l-etre")
  })
})
