import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ poster, id, title, resetFilter }) => {
    return (
       <Link to={`/${id}`}>
        <img onClick={() => {resetFilter()}} src={poster} className="poster" alt={`Movie Poster for ${title}`}/>
       </Link>
    )
}

export default MovieCard;

MovieCard.propTypes = {
    poster: PropTypes.string,
    id: PropTypes.number
}