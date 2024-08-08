beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
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