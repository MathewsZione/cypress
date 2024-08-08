beforeEach(() => {
    cy.visit('../src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
});

//Usando o comando .selectFile para realizar o upload do arquivo e logo após verificando se o mesmo foi enviado

it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/photo.jpg')
        .then(input => {
            expect(input[0].files[0].name).to.equal('photo.jpg')
        })
})

it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/photo.jpg', {
            action: 'drag-drop'
        })
        .then(input => {
            expect(input[0].files[0].name).to.equal('photo.jpg')
        })
})

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('photo.jpg').as('photoFile')
    cy.get('input[type="file"]')
        .selectFile('@photoFile')
        .then(input => {
            expect(input[0].files[0].name).to.equal('photo.jpg')
        })

});