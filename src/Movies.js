import React from 'react';
// import movieData from './movieData';
import MovieCard from './MovieCard'
import './Movies.css';

const Movies = ( {movieData, getMovieById} ) => {
    let movieCards = movieData.map(movie => {
        return (
            <MovieCard 
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            getMovieById={getMovieById}
            />
        )
    })

    return (
        <div  className='all-movies'>
            {movieCards}
        </div>
        // container for the movies
    );
}


export default Movies;