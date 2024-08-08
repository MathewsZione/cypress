beforeEach(() => {
    cy.visit('../src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
});

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () =>{
    cy.get('#privacy > a')
    .should('have.attr', 'target', '_blank')
    .invoke('removeAttr', 'target')
    .click()
    .should('have.text', 'CAC TAT - Política de privacidade')
})

