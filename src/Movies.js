import React from 'react';
import movieData from './movieData';
import MovieCard from './MovieCard'
import './Movies.css';

const Movies = ( {movieData} ) => {
    let movieCards = movieData.map(movie => {
        return (
            <MovieCard 
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            />
        )
    })

    return (
        <div>
            {movieCards}
        </div>
        // container for the movies
    );
}


export default Movies;