import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import logo from '../images/tomato1.svg';


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
      <div className='timeGreetings'>
        <h5>Good {timeOfDay}!</h5>
        {isSearchBar && 
        <SearchBar filterMovies={filterMovies}/>}
        {!isSearchBar && <Link to='/'><button onClick={() => updateSearchBar(true)}>Return to Home</button></Link>}
      </div>      
    </div>
  )
}

export default Navbar;
