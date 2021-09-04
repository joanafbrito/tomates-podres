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

Cypress.Commands.add('chosenOneDetails', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739', {
        movie: {
        average_rating: 7,
        backdrop_path: "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
        budget: 0,
        genres: ["Comedy", "Action"],
        id: 726739,
        overview: "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.",
        poster_path: "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
        release_date: "2020-10-02",
        revenue: 0,
        runtime: 84,
        tagline: "",
        title: "Cats & Dogs 3: Paws Unite"
        }
    });

    cy.visit('http://localhost:3000/726739');
})

Cypress.Commands.add('chosenOneTrailer', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/726739/videos', {
        videos: [
            {id: 332, movie_id: 726739, key: "ct5mQYE3Xk4", site: "YouTube", type: "Trailer"}
        ]
    });
    // cy.visit('http://localhost:3000/726739');
})




