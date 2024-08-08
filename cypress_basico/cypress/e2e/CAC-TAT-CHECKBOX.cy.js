beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
});

it('marca cada tipo de atendimento', () => {
    cy.get('input[type=radio]')
    .should('be.length', 3)
    .each(($radio) => {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
    })
})

it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
    
})