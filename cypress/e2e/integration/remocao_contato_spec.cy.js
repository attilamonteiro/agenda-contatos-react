// cypress/integration/contact.spec.js
describe('Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Excluir um contato', () => {
        // Adiciona um novo contato para excluir
        cy.get('input[placeholder="Nome"]').type('Contato para Excluir');
        cy.get('input[placeholder="E-mail"]').type('excluir@email.com');
        cy.get('input[placeholder="Telefone"]').type('987654321');
        cy.get('button.adicionar').click();

        // Excluir o contato recém-adicionado
        cy.get('.contato:last-child .delete').click();

        // Verifica se o contato foi removido corretamente
        cy.contains('.contato', 'Contato para Excluir').should('not.exist');
    });
});
