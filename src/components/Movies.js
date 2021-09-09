import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard'
import './Movies.css';

const Movies = ({ movieData, getMovieById, clearSearchInput }) => {
  const movieCards = movieData.map(movie => {
    return (
      <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            getMovieById={getMovieById}
            clearSearchInput={clearSearchInput}
            />
    )
  });

  return (
    <div className='all-movies'>
      {movieCards}
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  movieData: PropTypes.array,
  getMovieById: PropTypes.func
};
