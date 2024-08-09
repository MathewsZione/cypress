const { faker } = require('@faker-js/faker')
var fakerBR = require('faker-br')

let nameFaker = faker.name.fullName()
let lastNameFaker = faker.name.lastName()
let phoneFaker = fakerBR.phone.phoneNumber() 
phoneFaker = phoneFaker.replace(/\D/g, '')
let emailFaker = faker.internet.email()

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.clock()

    cy.get('[id="firstName"]')
    .should('be.visible')
    .type(nameFaker)
    .should('have.value', nameFaker)

    cy.get('[id="lastName"]')
    .should('be.visible')
    .type(lastNameFaker)
    .should('have.value', lastNameFaker)

    cy.get('[id="email"]')
    .should('be.visible')
    .type(emailFaker)
    .should('have.value', emailFaker)

    cy.get('[id="phone"]')
    .should('be.visible')
    .type(phoneFaker.replace(/\D/g, ''))
    .should('have.value', phoneFaker)

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
    .type('Mensagem de teste')
    .should('to.have.value', 'Mensagem de teste')

    cy.get('.button')
    .should('be.visible')
    .click()
    cy.get('span.success').should('to.have', 'Mensagem enviada com sucesso.')
    .should('be.visible')
    cy.tick(3000)
    cy.get('span.success').should('to.have', 'Mensagem enviada com sucesso.')
    .should('be.not.visible')
})