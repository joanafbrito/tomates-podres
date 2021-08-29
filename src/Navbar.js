import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';
import logo from './images/tomato1.svg';
// import magGlass from './images/magGlass2.png';
//import search image from 'search-image'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className='logo-name'>
        <img className='logo'src={logo} alt='Logo-Tomato' />
        <h1>Tomates Podres</h1>
      </div>
      {props.backToHome && <button onClick={() => props.returnHome()}>Return to Home</button>}
      {!props.backToHome && 
      <SearchBar filterMovies={props.filterMovies}/>}
    </div>
  )
}

export default Navbar;
