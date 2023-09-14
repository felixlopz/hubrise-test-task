/// <reference types="cypress" />

describe("Documentation", () => {
  describe("Languages", () => {
    const headerDesktop = () => cy.get("[data-testid='header:desktop']")

    it("switches language via header links", () => {
      cy.visit("/fr/apps/0test")
      cy.contains("Connecter Acme à HubRise")
      headerDesktop().contains("English").click()
      cy.contains("Connecting Acme to HubRise")
    })

    it("switches language via <Link href='...'>", () => {
      cy.visit("/fr/apps/0test")
      cy.contains("en anglais uniquement").click()
      cy.contains("Connecting Acme to HubRise")
    })
  })

  describe("Anchors", () => {
    it("generates default header anchors", () => {
      cy.visit("/fr/apps/0test")
      cy.get("#pourquoi-se-connecter").contains("Pourquoi se connecter ?")
    })

    it("generates custom header anchors", () => {
      cy.visit("/fr/apps/0test")
      cy.get("#integration-features").contains("Fonctionnalités de l'intégration")
    })
  })
})
