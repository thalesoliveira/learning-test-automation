describe('Tela de Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
  })
  it('Realizar Login', () => {
    cy.login('user', 'usuario123');
  })
})