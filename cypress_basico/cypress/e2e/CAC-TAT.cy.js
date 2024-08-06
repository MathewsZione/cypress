/// <reference types="cypress" />


beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
});

describe('Central de Atendimento ao Cliente TAT', function () {

    it('preenche os campos obrigatórios e envia o formulário', function () {
    
        cy.get('[id="firstName"]')
        .should('be.visible')
        .type('Matheus Silva', {delay:100})
        .should('have.value', 'Matheus Silva')

        cy.get('[id="lastName"]')
        .should('be.visible')
        .type('Santos', {delay:100})
        .should('have.value', 'Santos')

        cy.get('[id="email"]')
        .should('be.visible')
        .type('mgsilva@gmail.com', {delay:100})
        .should('have.value', 'mgsilva@gmail.com')

        cy.get('[id="phone"]')
        .should('be.visible')
        .type('22988365698', {delay:100})
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
        .type('Essa é uma mensagem de teste.', {delay:100})
        .should('to.have.value', 'Essa é uma mensagem de teste.')

        cy.get('.button')
        .should('be.visible')
        .click()
        cy.get('span.success').should('to.have', 'Mensagem enviada com sucesso.');
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('[id="firstName"]')
        .should('be.visible')
        .type('Matheus Silva', {delay:100})
        .should('have.value', 'Matheus Silva')

        cy.get('[id="lastName"]')
        .should('be.visible')
        .type('Santos', {delay:100})
        .should('have.value', 'Santos')

        cy.get('[id="email"]')
        .should('be.visible')
        .type('mgsilva.com', {delay:100})
        .should('have.value', 'mgsilva.com')

        cy.get('.button')
        .should('be.visible')
        .click()
        .should('to.have', 'Valide os campos obrigatório')
    });

    it('Validar valor do input do campo telefone informando caracter não numerico', () => {
        cy.get('[id="phone"]')
        .should('be.visible')
        .type('abcdefghijk', {delay:100})
        .should('have.value', '')
    });

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('[id="firstName"]')
        .should('be.visible')
        .type('Matheus Silva', {delay:100})
        .should('have.value', 'Matheus Silva')

        cy.get('[id="lastName"]')
        .should('be.visible')
        .type('Santos', {delay:100})
        .should('have.value', 'Santos')

        cy.get('[id="email"]')
        .should('be.visible')
        .type('mgsilva@gmail.com', {delay:100})
        .should('have.value', 'mgsilva@gmail.com')

        cy.get('#phone-checkbox')
        .should('be.visible', 'be.checked')
        .check()

        cy.get('[id="phone"]')
        .should('be.visible')
        .type('ABC', {delay:100})
        .should('have.value', '')

        cy.get('[id="product"]')
        .should('be.visible')
        .select('cursos')
        .should('to.have', 'cursos')

        cy.get('[type="radio"]')
        .should('be.visible')
        .check()
        .should('be.checked')

        cy.get('[id="open-text-area"]')
        .should('be.visible')
        .type('Essa é uma mensagem de teste.', {delay:100})
        .should('to.have.value', 'Essa é uma mensagem de teste.')

        cy.get('.button')
        .should('be.visible')
        .click()
        cy.get('span.success').should('to.have', 'Valide os campos obrigatório');
    });

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('[id="firstName"]')
        .should('be.visible')
        .type('Matheus Silva', {delay:100})
        .should('have.value', 'Matheus Silva')
        .clear({delay:100})
        .should('have.value', '')

        cy.get('[id="lastName"]')
        .should('be.visible')
        .type('Santos', {delay:100})
        .should('have.value', 'Santos')
        .clear()
        .should('have.value', '')

        cy.get('[id="email"]')
        .should('be.visible')
        .type('mgsilva@gmail.com', {delay:100})
        .should('have.value', 'mgsilva@gmail.com')
        .clear()
        .should('have.value', '')

        cy.get('#phone-checkbox')
        .should('be.visible', 'be.checked')
        .check()

        cy.get('[id="phone"]')
        .should('be.visible')
        .type('2298836598', {delay:100})
        .should('have.value', '2298836598')
        .clear()
        .should('have.value', '')

        cy.get('[id="product"]')
        .should('be.visible')
        .select('cursos')
        .should('to.have', 'cursos')

        cy.get('[type="radio"]')
        .should('be.visible')
        .check()
        .should('be.checked')

        cy.get('[id="open-text-area"]')
        .should('be.visible')
        .type('Essa é uma mensagem de teste.', {delay:100})
        .should('to.have.value', 'Essa é uma mensagem de teste.')
        .clear()
        .should('have.value', '')

        cy.get('.button')
        .should('be.visible')
        .click()
        cy.get('span.success').should('to.have', 'Valide os campos obrigatório');
    });

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

        cy.get('.button')
        .should('be.visible')
        .click()
        cy.get('span.success').should('to.have', 'Valide os campos obrigatório');
    });

    it('envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit()
    });

    it('Deve utilizar cy.contains no lugar de cy.get', () => {
    
        cy.contains(':nth-child(1) > :nth-child(1) > label > strong', 'Nome')
        .should('be.visible')
        .type('Matheus Silva', {delay:100})

        cy.contains(':nth-child(1) > :nth-child(2) > label > strong', 'Sobrenome')
        .should('be.visible')
        .type('Santos', {delay:100})

        cy.contains(':nth-child(2) > :nth-child(1) > label > strong','E-mail')
        .should('be.visible')
        .type('mgsilva@gmail.com', {delay:100})

        cy.contains(':nth-child(2) > :nth-child(2) > label > strong', 'Telefone')
        .should('be.visible')
        .type('22988365698', {delay:100})

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
        .type('Essa é uma mensagem de teste.', {delay:100})
        .should('to.have.value', 'Essa é uma mensagem de teste.')

        cy.contains('.button', 'Enviar')
        .should('be.visible')
        .click()
    })
})