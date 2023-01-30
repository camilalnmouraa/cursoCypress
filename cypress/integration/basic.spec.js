/// <reference types="cypress" />

describe('Cypress basics', () => {

    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')


        /* o should nesse vai tentar a assertiva até entrar 
        no timeout do cypress */
        
        /* nesse caso ele faz uma busca de título para cada assertivas */

        /* cy.pause() */ /* e debug() servem para debugar*/

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        /* nesse caso ele faz apenas uma busca de título e duas assertivas */
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //TODO imprimir o log no console
        //TODO escrever o title em um campo de texto
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })

})