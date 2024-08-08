beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
});

it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
        .select('YouTube', {force: true})
        .should('have.value', 'youtube');
});    

it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
    .select('Mentoria', {force: true})
    .should('have.value', 'mentoria');
})

it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
    .select(1)
    .should('have.value', 'blog');
})

it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('#support-type > label:nth-child(4) > input[type=radio]')
    .check()
    .should('be.checked')
})