/// <reference types="cypress" />

// To help debugging in GitHub Actions
beforeEach(() => {
  cy.on("window:console", (msg) => {
    console.log(msg)
  })
})

describe("Pages", () => {
  ;[
    ["/", "Integration for retail"],
    ["/apps", "Integrated Apps", "LivePepper"],
    ["/pricing", "Fair Pricing"],
    ["/blog", "The HubRise Blog"],
    ["/blog/catalog-variants", "Catalog Variants"],
    ["/apps/livepepper", "Overview"],
    ["/apps/livepepper/connect-hubrise", "Connect to HubRise"],
    ["/developers", "Quick Start"],
    ["/developers/api/account-management", "Account Management"],
    ["/fr", "Intégration pour le commerce"],
    ["/fr/apps", "Applications intégrées"],
  ].forEach(([page, ...keywords]) => {
    it(`renders ${page}`, () => {
      cy.visit(page)
      keywords.forEach((keyword) => cy.contains(keyword))
    })
  })

  it("shows a warning on non translated pages", () => {
    cy.visit("/fr/developers/api/account-management")
    cy.contains("Cette documentation est disponible en anglais uniquement.")
  })
})

describe("Documentation", () => {
  it("shows clickable links in documentation", () => {
    cy.visit("/fr/developers/api/catalog-management")
    cy.get("h2#skus a").click()
    cy.url().should("include", "#skus")
  })
})

describe("Contact popup", () => {
  it("opens the 'Contact us' modal and closes it", () => {
    const modal = () => cy.get("[role='modal']")

    cy.visit("/developers")
    cy.contains("button", "Contact us").click()
    modal().should("be.visible")

    modal().find("[data-testid='icon:close']").click()
    modal().should("not.exist")
  })
})

describe("Navigation", () => {
  const headerDesktop = () => cy.get("[data-testid='header:desktop']")

  // Disabled because it doesn't work on GitHub Actions (but works locally).
  it.skip("navigates to the apps page", () => {
    cy.visit("/")
    headerDesktop().contains("Apps").click()
    cy.url().should("include", "/apps")
  })
})
