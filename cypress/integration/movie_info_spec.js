describe('The Choose One details page', () => {
    beforeEach(()=> {
        cy.pageLoad()
          .get('img[src="https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg"]')
          .click()
    });

    it('Should contain the detailed information of the Selected Movie', () => {
        cy.get('.chosen-one')
          .should('be.visible')
          .get('.all-movies')
          .should('not.exist')
    });

    it('Should be able to click in the movie trailer and watch if the video exists on Youtube', () => {
        cy.get('iframe')
          .click()
    });

    it('Should display the Go Back option', () => {
        cy.get('.search-field')
          .should('not.exist')
          .get('.back')
          .should('be.visible')
    });

    it('Should be able to click and go Back to the Home Page', () => {
        cy.get('.back')
          .click()
          .get('.all-movies')
          .should('be.visible')
          .get('.chosen-one')
          .should('not.exist')
    });

    it('Should be able to navigate forward to the Chosen One Page using the Browser arrows', () => {
        cy.go('back')
          .get('.all-movies')
          .should('be.visible')
          .get('.chosen-one')
          .should('not.exist')
          .go('forward')
          .get('.chosen-one')
          .should('be.visible')
    });
})