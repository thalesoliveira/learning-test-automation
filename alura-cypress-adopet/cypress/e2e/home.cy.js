describe('Teste de paginas no Adopet', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it("Verificacao dos botoes de home", () => {
    cy.get('.header__home').click()
  })

  it("Deve testar os botão de mensagens", () => {
    cy.get('.header__message').click()
  })

  it("Visita a página de /login do Adopet", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
  })

  it("Visita a página de /home do Adopet", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })

  it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click()
  })

  it('Verifica imagens dos animais', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.cards').should('be.visible');
  })



});
