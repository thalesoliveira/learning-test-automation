describe('Tela de Cadastro de Usuario', () => {
  it('Cadastrando novo usuario', () => {
    cy.visit('http://localhost:4200/#/home')
    //cy.contains('a', 'Register now').click();
    //cy.get('[formcontrolname="email"]').type('usuario@email.com.br');
    //cy.get('[formcontrolname="fullName"]').type('Usuario Teste');
    //cy.get('[formcontrolname="userName"]').type('User');
    //cy.get('[formcontrolname="password"]').type('usuario123');
    //cy.contains('button', 'Register').click();

    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('usuario@email.com.br');
    cy.get('[data-test="fullName"]').type('Usuario Teste');
    cy.get('[data-test="registerUserName"]').type('user');
    cy.get('[data-test="registerPassword"]').type('usuario123');
    cy.contains('button', 'Register').click();

  })
})