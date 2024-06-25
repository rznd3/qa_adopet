describe('Página de Login', () => {
  beforeEach(() => {
    cy.acessarPaginaLogin()
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode:400, 
    }).as('stubPost')
  })

  it('Preencher os campos do login incorretamente. Mensagens de erro devem ser exibidas ao usuário', () => {
    cy.logon('gabriel@.com', 'senha')

    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })

  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
    cy.logon('ana@email.com', 'Senha123')
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
})
})