import { usuarios } from '../../fixtures/usuarios.json'

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.acessarPaginaCadastro()
    })

    usuarios.forEach(usuario => {
        it('Deve preencher os campos do dormulário corretamente para cadastrar um novo usuário', () => {
            cy.preencherCadastro(usuario.name, usuario.email, usuario.password, usuario.password)
        })
    })
})