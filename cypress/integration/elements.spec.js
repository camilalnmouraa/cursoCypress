/// <reference types="cypress" />

describe('Work with basic elements', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Luiza')
            .should('have.value', 'Luiza')

        cy.get('#elementosForm\\:sugestoes').type('Sugestão')
            .should('have.value', 'Sugestão')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('Aqui')
            .should('have.value', 'Aqui')

        cy.get('[data-cy=dataSobrenome]').type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}Acerto', { delay: 100 })
            .should('have.value', 'Acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get('[name="formSexo"]').should('have.length', 2)
    })

    it('CheckBox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name="formComidaFavorita"]').click({ multiple: true })

        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

//TODO validar opções do combo
    it('ComboBox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior')
            .should('have.value', 'superior')

        cy.get('[data-test=dataEscolaridade]')
            .select('1o grau completo')
            .should('have.value', '1graucompclear')
    })

//TODO validar opções selecionadas do combo múltilo
    it.only('ComboMultiplo', () => {
        cy.get('[data-testid=dataEsportes]').select(['natacao', 'Corrida', 'nada'])
    })

})