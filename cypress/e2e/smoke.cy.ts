/// <reference types="cypress" />

describe("doesn't crash and burn", () => {
  const pages = [
    "/",
    "/apps",
    "/pricing",
    "/apps/livepepper",
    "/apps/livepepper/connect-hubrise",
    "/developers",
    "/developers/api/account-management",
    "/fr",
    "/fr/apps",
    "/fr/developers/api/account-management",
    "/blog",
    "/blog/catalog-variants",
  ]

  pages.forEach((page) => {
    it(`renders ${page}`, () => {
      cy.visit(page)
      cy.contains("Apps")
    })
  })
})

it("opens the 'Contact us' modal and closes it", () => {
  const modal = () => cy.get("[role='modal']")

  cy.visit("/")
  cy.contains("Integration for retail")
  cy.contains("li", "Developers").click()
  cy.contains("Contact us").click()
  modal().should("be.visible")

  modal().find("[data-testid='icon:close']").click()
  modal().should("not.exist")
})

it("renders apps on the Apps page", () => {
  cy.visit("/fr")
  cy.contains("li", "Apps").click()
  cy.contains("LivePepper")
})

it("shows clickable links in documentation", () => {
  cy.visit("/fr/developers/api/catalog-management")
  cy.get("h2#skus a").click()
  cy.url().should("include", "#skus")
})
