describe('CalidadT2', () => {
  beforeEach('IniciarSesion', () => {
      cy.visit(Cypress.env('pageUrl'))
      cy.get('#agregarBiblioteca').click()
      cy.get('#Gabriel').type('admin')
      cy.get('#12345').type('admin')
      cy.get('#IniciarSesion').click()

  })
})