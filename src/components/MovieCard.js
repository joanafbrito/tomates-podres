import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ( {poster, id} ) => {
    return (
       <Link to={`/${id}`}>
        <img src={poster} className="poster" alt="Movie Poster"/>
       </Link>
    )
}

export default MovieCard;

MovieCard.propTypes = {
    poster: PropTypes.string,
    id: PropTypes.number
}