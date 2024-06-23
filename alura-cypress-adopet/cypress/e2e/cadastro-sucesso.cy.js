describe('Cadastro no site Adopet', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
  })

  it('Realizar um cadastro no site com sucesso', () => {
    cy.cadastrar('Usuario Admin', 'admin@email.com', 'Admin123');
  })

});