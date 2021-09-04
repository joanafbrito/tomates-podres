describe('Home page user flow', () => {
    beforeEach(() => {
        cy.pageLoad()
    });

    it('Should load all the movies when the page starts',() => {
        cy.get('.all-movies')
          .should('be.visible')

    });

    it('Should contain the Navigation bar with all elements', () => {
        cy.get('section')
          .should('be.visible')
          .get('.time-greetings')
          .contains('Good')
    })

})