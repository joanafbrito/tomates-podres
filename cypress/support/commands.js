Cypress.Commands.add('pageLoad', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        movies:[
            {
                "id": 337401,
                "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
                "title": "Mulan",
                "average_rating": 4.909090909090909,
                "release_date": "2020-09-04"
            },   
            {
                "id": 718444,
                "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
                "title": "Rogue",
                "average_rating": 5.428571428571429,
                "release_date": "2020-08-20"
            },
            {
                "id": 726739,
                "poster_path": "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
                "title": "Cats & Dogs 3: Paws Unite",
                "average_rating": 7.4,
                "release_date": "2020-10-02"
            }
        ]
    })
    cy.visit('http://localhost:3000/');
})


