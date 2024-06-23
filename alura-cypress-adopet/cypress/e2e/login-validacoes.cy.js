describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Falha no Login - Obrigatorios', () => {
    cy.get('[data-test="submit-button"]').click();

    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  })




  it('Deve preencher os campos do login incorretamente', () => {
    cy.get('[data-test="input-loginEmail"]').type('teste3');
    cy.get('[data-test="input-loginPassword"]').type('123');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')

  })

  it('Credenciais incorretas', () => {
    cy.get('[data-test="input-loginEmail"]').type('teste3@gmail.com');
    cy.get('[data-test="input-loginPassword"]').type('Teste123456');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
  })

});
