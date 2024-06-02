describe('Login  API', () => {
    it('Dados de login API', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
        })
    })


    it('Fotos de usuário', () => {

        const tempoEsperado = Math.random() * 50;


        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/user/photos',

        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body[0]).to.have.property('description');
            expect(res.body[0].description).to.be.equal('foto 1');
            expect(res.duration).to.be.lte(tempoEsperado);
        })
    })

})