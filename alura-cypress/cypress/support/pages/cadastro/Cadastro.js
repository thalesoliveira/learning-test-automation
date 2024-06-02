const el = require('./elements').ELEMENTS;

class Cadastro {


    acessarTelaDeCadastro() {
        cy.visit('http://localhost:4200/#/home')
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario() {
        cy.get('input[data-test="email"]').type('usuario@email.com.br');
        cy.get('input[data-test="fullName"]').type('Usuario Teste');
        cy.get('input[data-test="registerUserName"]').type('user');
        cy.get('input[data-test="registerPassword"]').type('usuario123');
    }

    submeterCadastro() {
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();

