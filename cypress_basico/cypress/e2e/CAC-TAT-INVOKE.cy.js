beforeEach(() => {
    cy.visit('../src/index.html')  
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')  
});

it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

it.only('preenche a area de texto usando o comando invoke', () => {
    const longText = Cypress._.repeat('Testes ', 20)
    cy.get('[id="open-text-area"]')
    .invoke('val', longText)
    .should('be.visible')
    .and('have.value', longText)

});