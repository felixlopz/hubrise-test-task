describe(`website`, () => {
  it(`doesn't crash and burn`, () => {
    const englishPages = [
      "/",

      "/apps",

      "/apps/livepepper",
      "/apps/livepepper/configuration",

      "/developers",
      "/developers/authentication",
      "/developers/integration",
      "/developers/quick-start",

      "/developers/api/account-management",
      "/developers/api/callbacks",
      "/developers/api/catalog-management",
      "/developers/api/extensions",
      "/developers/api/general-concepts",
      "/developers/api/order-management",
    ]

    const frenchPages = englishPages.map((page) => "/fr" + page)

    const englishOnlyPages = ["/pricing"]

    const frenchOnlyPages = ["/faq", "/tarifs"].map((page) => "/fr" + page)

    englishPages.concat(englishOnlyPages, frenchPages, frenchOnlyPages).forEach((page) => {
      cy.visit(page)
    })
  })

  it(`renders elements, allows interaction and navigation between various pages`, () => {
    cy.viewport(1024, 660)

    cy.visit(`/`)
    cy.contains(`form`, `Create your account`)
    cy.contains(`HubRise Makes POS Integration Easy`)
    cy.contains(`li`, `Developers`).click()
    cy.contains(`Contact us`).click()
    cy.get(`div[role="dialog"]`).should(`be.visible`)

    cy.visit(`/fr`)
    cy.contains(`form`, `Créer votre compte`)
    cy.contains(`li`, `Apps`).click()
    cy.contains(`LivePepper`)

    cy.visit(`/fr/developers/api/catalog-management`)
    cy.get(`h2#skus a`).click()
    cy.url().should(`include`, `#skus`)
  })
})
