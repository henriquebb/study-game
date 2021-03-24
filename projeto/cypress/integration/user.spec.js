/// <reference types="cypress" />

context('testes de usuário', () => {

    const usuario = {
        username: 'engenhariadesoftware',
        password: '123',
        email: 'teste@teste.com.br',
        name: { firstName: 'Henrique', lastName: 'Barbosa'},
        school: 'ufmg'
    };
    const createdUser = {
        username: 'engenhariadesoftware',
        password: '123'
    }

    beforeEach(() => {
        cy.request('POST', 'http://localhost:5000/api/v1/users', usuario);
    });

    afterEach(() => {
        cy.exec(`mongo study-game --eval 'db.users.deleteMany({})'`);
    });

    it('fazer login de usuário', () => {
        cy.request('POST', 'http://localhost:5000/api/v1/users/login', createdUser).its('status').should('be.equal', 200);
    });

    it('logar e editar usuário', () => {
        const alteredUser = {
            name: {
                firstName: "Bernardo"
            }
        };
        cy.request('POST', 'http://localhost:5000/api/v1/users/login', createdUser).its('body').then((id) => {
            cy.request('PATCH', "http://localhost:5000/api/v1/users/" + id, alteredUser).then(() => {
                cy.request('GET', "http://localhost:5000/api/v1/users/" + id).its('body.name.firstName').should('be.equal','Bernardo');
            });
        });
    });

    it('adicionar 10 moedas a usuário', () => {

        const coins = {
            coins : 10
        };

        cy.request('POST', 'http://localhost:5000/api/v1/users/login', createdUser).its('body').then((id) => {
            cy.request('PATCH', "http://localhost:5000/api/v1/users/" + id + "/change-coins", coins).then(() => {
                cy.request('GET', "http://localhost:5000/api/v1/users/" + id).its('body.stats.coins').should('be.equal',10);
            });
        });
    });
});