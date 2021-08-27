import React from 'react';
import './MovieCard.css';

const MovieCard = ( {poster, id, getMovieById} ) => {
    return (
        <img src={poster} className="poster" alt="Movie Poster" onClick={() => getMovieById(id)}/>
    )
}

export default MovieCard;