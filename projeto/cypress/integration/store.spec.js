/// <reference types="cypress" />

context('testes de loja', () => {
    it('criar loja', () => {
        cy.request('POST', 'http://localhost:5000/api/v1/stores').its('status').should('be.equal', 200);
    });
});