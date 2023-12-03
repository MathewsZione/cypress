/// <reference types="Cypress" />


beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
});

describe('Central de Atendimento ao Cliente TAT', function () {

    it('preenche os campos obrigatórios e envia o formulário', function () {
    
        cy.get('[id="firstName"]')
        .should('be.visible')
        .type('Matheus Silva')
        .should('have.value', 'Matheus Silva')

        cy.get('[id="lastName"]')
        .should('be.visible')
        .type('Santos')
        .should('have.value', 'Santos')

        cy.get('[id="email"]')
        .should('be.visible')
        .type('mgsilva@gmail.com')
        .should('have.value', 'mgsilva@gmail.com')

        cy.get('[id="phone"]')
        .should('be.visible')
        .type('22988365698')
        .should('have.value', '22988365698')

        cy.get('[id="product"]')
        .should('be.visible')
        .select('cursos')
        .should('to.have', 'cursos')

        cy.get('[id="product"]')
        .should('be.visible')
        .select('cursos')
        .should('to.have', 'cursos')

        cy.get('[type="radio"]')
        .should('be.visible')
        .check()
        .should('be.checked')
        
        cy.get('[id="email-checkbox"]')
        .should('be.visible')
        .check()
        .should('be.checked')

        cy.get('[id="open-text-area"]')
        .should('be.visible')
        .type('Essa é uma mensagem de teste.')
        .should('to.have.value', 'Essa é uma mensagem de teste.')

        cy.get('.button')
        .should('be.visible')
        .click()
        cy.get('span.success').should('to.have', 'Mensagem enviada com sucesso.');
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('[id="firstName"]')
        .should('be.visible')
        .type('Matheus Silva')
        .should('have.value', 'Matheus Silva')

        cy.get('[id="lastName"]')
        .should('be.visible')
        .type('Santos')
        .should('have.value', 'Santos')

        cy.get('[id="email"]')
        .should('be.visible')
        .type('mgsilva.com')
        .should('have.value', 'mgsilva.com')

        cy.get('.button')
        .should('be.visible')
        .click()
        .should('to.have', 'Valide os campos obrigatóri')
    });
})