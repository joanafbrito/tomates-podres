import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ( {poster, id, getMovieById} ) => {
    return (
       <Link to={`/${id}`}>
        <img src={poster} className="poster" alt="Movie Poster" onClick={() => getMovieById(id)}/>
       </Link>
    )
}

export default MovieCard;