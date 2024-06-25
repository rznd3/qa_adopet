describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.acessarPaginaCadastro()

    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/register', {
      statusCode: 200, 
      }).as('stubPost')
    })
  
    
    it('Deve preencher os campos do formulário corretamente para cadatrar um novo usuário', () => {
      cy.preencherCadastro('Gabriel Rezende', 'gabriel@email.com', 'Senha123', 'Senha123')
      cy.wait('@stubPost')
    })
})