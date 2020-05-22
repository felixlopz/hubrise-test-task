describe(`website`, () => {
  it(`doesn't crash and burn`, () => {
    const englishPages = [
      '/',

      '/apps',

      '/apps/ikentoo',
      '/apps/ikentoo/developer_guide',
      '/apps/ikentoo/installation',
      '/apps/ikentoo/integration_guide',

      '/apps/livepepper',
      '/apps/livepepper/integration_guide',

      '/apps/myorderbox',
      '/apps/myorderbox/installation',
      '/apps/myorderbox/integration_guide',

      '/developers',
      '/developers/authentication',
      '/developers/integration',
      '/developers/quick_start',

      '/developers/api/account_management',
      '/developers/api/callbacks',
      '/developers/api/catalog_management',
      '/developers/api/extensions',
      '/developers/api/general_concepts',
      '/developers/api/order_management',
    ]

    const frenchPages = englishPages.map((page) => '/fr' + page)

    const englishOnlyPages = [
      '/pricing',
    ]

    const frenchOnlyPages = [
      '/faq',
      '/tarifs',
    ].map((page) => '/fr' + page)

    englishPages
      .concat(englishOnlyPages, frenchPages, frenchOnlyPages)
      .map((pagePath) => pagePath.replace(/_/g, '-'))
      .forEach((page) => {
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
