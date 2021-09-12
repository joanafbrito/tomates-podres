import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../images/tomato1.svg';
import './Navbar.css';

const Navbar = ({ isSearchBar, filterMovies }) => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'Morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Afternoon';
  } else {
    timeOfDay = 'Night';
  }

  return (
    <div className='navbar'>
      <Link to='/' className='logo-name'>
        <img className='logo'src={logo} alt='Logo-Tomato' />
        <h1>Tomates Podres</h1>
      </Link>
      <div className='time-greetings'>
        <h2>Good {timeOfDay}, Movie Connoisseur!</h2>
        {isSearchBar &&
        <SearchBar filterMovies={filterMovies}/>}
        {!isSearchBar && <Link to='/' className='back'>Go Back</Link>}
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  isSearchBar: PropTypes.bool,
  filterMovies: PropTypes.func
};
