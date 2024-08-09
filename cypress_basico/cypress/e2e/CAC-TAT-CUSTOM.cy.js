beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
});

it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
});

Cypress._.times(2,()=>{
    it('envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit()
    })
})