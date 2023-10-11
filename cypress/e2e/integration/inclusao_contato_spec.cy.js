// cypress/integration/inclusao_contato_spec.js

describe('Teste de Inclusão de Contato', () => {
    it('Adiciona um novo contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/'); 
  
      // Preencha os campos do formulário
      cy.get('input[placeholder="Nome"]').type('Novo Contato');
      cy.get('input[placeholder="E-mail"]').type('novo@email.com');
      cy.get('input[placeholder="Telefone"]').type('123456789');
  
      // Clique no botão "Adicionar"
      cy.get('button.adicionar').click();
  
      // Verifique se o contato foi adicionado corretamente
      cy.contains('Novo Contato').should('exist');
    });
  });
  