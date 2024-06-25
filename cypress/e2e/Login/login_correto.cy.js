describe('Página de Login', () => {
  beforeEach(() => {
    cy.acessarPaginaLogin()
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login').as('loginRequest')
  })

  it('Preencher os campos do login corretamente e autenticar o usuário na página', () => {
    cy.logon('gabriel@email.com', 'Senha123')
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 201) 
    cy.url().should('include', '/home')
  })
  
})