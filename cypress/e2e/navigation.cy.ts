/// <reference types="cypress" />

describe("Navigation", () => {
  const headerDesktop = () => cy.get("[data-testid='header:desktop']")

  // Disabled because it doesn't work on GitHub Actions (but works locally).
  it.skip("navigates to the apps page", () => {
    cy.visit("/")
    headerDesktop().contains("Apps").click()
    cy.url().should("include", "/apps")
  })
})
