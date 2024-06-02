import Cadastro from "../support/pages/cadastro/Cadastro"

describe('Tela de Cadastro de Usuario', () => {
  it('Cadastrando com sucesso novo usuario', () => {
    cy.visit('http://localhost:4200/#/home')

    Cadastro.acessarTelaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();

  })
})