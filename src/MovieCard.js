import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <img src={props.poster} className="poster" alt="Movie Poster" />
        {/* <img>{props.poster}</img> */}
    )
}

export default MovieCard;