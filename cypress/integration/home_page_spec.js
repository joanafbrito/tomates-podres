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
    });

    it('Should have a Search Bar to search for a Movie title', () => {
        cy.get('.search-field')
          .get('input[type="search"]')
          .type('Mulan')
          .should('have.value','Mulan')
          .get('img[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]')
          .should('be.visible')
          .get('img[src="https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg"]') 
          .should('not.exist')
    });

    it('Should change to the Chosen One page', () => {
        cy.get('img[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]')
          .click()
          .get('.poster')
          .should('not.exist')
          .get('.chosen-one')
          .should('be.visible')
    });

    it('Should be able to navigate back to the Home Page using the Browser arrows', () => {
        cy.get('img[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]')
          .click()
          .go('back')
          .get('.poster')
          .should('be.visible')
          .get('.chosen-one')
          .should('not.exist')
    });
})