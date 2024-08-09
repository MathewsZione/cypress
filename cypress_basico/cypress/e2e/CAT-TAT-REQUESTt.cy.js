describe('Deve validar a request', () => {
    it('realiza uma requisição GET para a URL especificada', () => {
        cy.request('GET', 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
          .then((response) => {
              expect(response.status).to.eq(200); 
          });
    });
    
});