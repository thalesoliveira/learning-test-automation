describe('Teste quem ama adota', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('Verifica mensagem de texto', () => {
    cy.contains('p', 'Quem ama adota!').should('be.visible')
  })

  it('Verifica mensagem de texto', () => {
    cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
  })

});
