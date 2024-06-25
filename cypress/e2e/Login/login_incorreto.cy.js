describe('Página de Login', () => {
  beforeEach(() => {
    cy.acessarPaginaLogin()
  })

  it('Preencher os campos do login incorretamente. Mensagens de erro devem ser exibidas ao usuário', () => {
    cy.logon('gabriel@.com', 'senha')

    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })
})