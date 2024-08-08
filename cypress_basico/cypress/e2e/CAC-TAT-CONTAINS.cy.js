beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
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