describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.acessarPaginaCadastro()
  })
  
  it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    cy.preencherCadastro()

    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')
  })
})