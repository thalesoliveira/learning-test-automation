describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Realizar login no AdoPet com sucesso', () => {
    cy.login('admin@email.com', 'Admin123')
  })

});
