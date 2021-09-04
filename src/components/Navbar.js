import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import logo from '../images/tomato1.svg';
import './Navbar.css';


const Navbar = ({isSearchBar, filterMovies, updateSearchBar}) => {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'Morning'
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'Afternoon'
  } else {
    timeOfDay = 'Night'
  }
  return (
    <div className='navbar'>
      <div className='logo-name'>
        <img className='logo'src={logo} alt='Logo-Tomato' />
        <h1>Tomates Podres</h1>
      </div>
      <div className='time-greetings'>
        <h5>Good {timeOfDay}!</h5>
        {isSearchBar && 
        <SearchBar filterMovies={filterMovies}/>}
        {!isSearchBar && <Link to='/' className='back' onClick={() => updateSearchBar(true)}>Go Back</Link>}
      </div>      
    </div>
  )
}

export default Navbar;
