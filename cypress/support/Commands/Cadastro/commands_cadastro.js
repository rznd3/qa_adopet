import CadastroLocators from '../../Locators/locators_cadastro'
const cadastroLocators = new CadastroLocators

Cypress.Commands.add('acessarPaginaCadastro', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
})

Cypress.Commands.add('preencherCadastro', (name='', email='', password='', confirmPassword='') => {
    if (name) cy.get(cadastroLocators.inputName).type(name)
    if (email) cy.get(cadastroLocators.inputEmail).type(email)
    if (password) cy.get(cadastroLocators.inputPassword).type(password)
    if (confirmPassword) cy.get(cadastroLocators.inputConfirmPassword).type(confirmPassword)
    cy.get(cadastroLocators.buttonSubmit).click()
})



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })