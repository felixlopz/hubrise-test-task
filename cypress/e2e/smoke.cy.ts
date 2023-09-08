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
    ["/apps", "Integrated Apps"],
    ["/pricing", "Fair Pricing"],
    ["/apps/livepepper", "Overview"],
    ["/apps/livepepper/connect-hubrise", "Connect to HubRise"],
    ["/developers", "Quick Start"],
    ["/developers/api/account-management", "Account Management"],
    ["/fr", "Intégration pour le commerce"],
    ["/fr/apps", "Applications intégrées"],
    ["/fr/developers/api/account-management", "Account Management"],
    ["/blog", "The HubRise Blog"],
    ["/blog/catalog-variants", "Catalog Variants"],
  ].forEach(([page, content]) => {
    it(`renders ${page}`, () => {
      cy.visit(page)
      cy.contains(content)
    })
  })

  it("renders the homepage", () => {
    cy.visit("/")
    cy.contains("Integration for retail")
  })

  it("renders apps on the Apps page", () => {
    cy.visit("/fr")
    cy.contains("li", "Apps").click()
    cy.contains("LivePepper")
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
    cy.contains("Contact us").click()
    modal().should("be.visible")

    modal().find("[data-testid='icon:close']").click()
    modal().should("not.exist")
  })
})

describe("Navigation", () => {
  it("can navigate to the blog", () => {
    cy.visit("/")
    cy.contains("li", "Blog").click()
    cy.url().should("include", "/blog")
  })
})
