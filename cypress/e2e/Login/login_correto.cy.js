describe('Página de Login', () => {
  beforeEach(() => {
    cy.acessarPaginaLogin()
  })

  it('Preencher os campos do login corretamente e autenticar o usuário na página', () => {
    cy.logon('gabriel@email.com', 'Senha123')
  })
})