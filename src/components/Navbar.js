import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import logo from '../images/tomato1.svg';


const Navbar = ({isSearchBar, filterMovies, updateSearchBar}) => {
  return (
    <div className='navbar'>
      <div className='logo-name'>
        <img className='logo'src={logo} alt='Logo-Tomato' />
        <h1>Tomates Podres</h1>
      </div>
      {isSearchBar && 
      <SearchBar filterMovies={filterMovies}/>}
      {!isSearchBar && <Link to='/'><button onClick={() => updateSearchBar(true)}>Return to Home</button></Link>}
    </div>
  )
}

export default Navbar;
