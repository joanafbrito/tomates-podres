import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css';

const Movies = ({ movieData, getMovieById, resetFilter }) => {
  const movieCards = movieData.map(movie => {
    return (
      <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            getMovieById={getMovieById}
            resetFilter={resetFilter}
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
