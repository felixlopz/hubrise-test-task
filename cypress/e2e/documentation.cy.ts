/// <reference types="cypress" />

describe("Documentation", () => {
  describe("Languages", () => {
    const headerDesktop = () => cy.get("[data-testid='header:desktop']")

    it("switches language via header links", () => {
      cy.visit("/fr/apps/0test")
      cy.contains("Connecter Acme à HubRise")
      cy.wait(2000)
      headerDesktop().contains("English").click()
      cy.contains("Connecting Acme to HubRise")
    })

    it("switches language via <Link href='...'>", () => {
      cy.visit("/fr/apps/0test")
      cy.contains("en anglais uniquement").click()
      cy.contains("Connecting Acme to HubRise")
    })

    it("opens external links in a new tab", () => {
      cy.visit("/apps/0test")
      cy.get("a").contains("external link").should("have.attr", "target", "_blank")
    })

    it("shows a warning on non translated pages (copy_files_from: en)", () => {
      cy.visit("/fr/developers/api/account-management")
      cy.contains("Cette documentation est disponible en anglais uniquement.")
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

    it("navigates via custom anchors", () => {
      cy.visit("/fr/apps/0test/connexion-hubrise")
      cy.contains("section fonctionnalités").click()
      cy.contains("Fonctionnalités de l'intégration")
    })
  })
})
