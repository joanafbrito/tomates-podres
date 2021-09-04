describe('The Choose One details page', () => {
    beforeEach(()=> {
        cy.pageLoad()
          .get('img[src="https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg"]')
          .click()
    })

    it('Should contain the detailed information of the Selected Movie', () => {
        cy.get('.chosen-one')
          .should('be.visible')
          .get('.all-movies')
          .should('not.exist')
    })


})