// cypress/integration/contact.spec.js
describe('Agenda de Contatos', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('Editar um contato', () => {
      // Adiciona um novo contato para editar
      cy.get('input[placeholder="Nome"]').type('Contato Original');
      cy.get('input[placeholder="E-mail"]').type('original@email.com');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('button.adicionar').click();
  
    // Editar o contato recém-adicionado
    cy.get('.contato:last-child .edit').click(); // Ajuste o seletor para ser mais específico
    cy.get('input[placeholder="Nome"]').clear().type('Contato Editado');
    
    cy.get('button.alterar').click();
  
      // Verifica se o contato foi editado corretamente
      cy.contains('.contato', 'Contato Editado').should('exist');
      cy.contains('.contato', 'original2@email.com').should('not.exist');
    });
  });
  