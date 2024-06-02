describe('Tela de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')

    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 400
    }).as('stubPost')


  })

  it('Login e verificacao de obrigatoriedade', () => {
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Login com falha mesmo com os campos preenchidos corretamente', () => {
    cy.login('user', 'usuario123');
    cy.wait('@stubPost');
  })

})