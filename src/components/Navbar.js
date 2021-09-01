import React from 'react';
import './Navbar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import logo from '../images/tomato1.svg';


const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className='logo-name'>
        <img className='logo'src={logo} alt='Logo-Tomato' />
        <h1>Tomates Podres</h1>
      </div>
      {props.chosenMovie && <Link to='/'><button /*onClick={() => props.returnHome()}*/>Return to Home</button></Link>}
      {!props.chosenMovie && 
      <SearchBar filterMovies={props.filterMovies}/>}
    </div>
  )
}

export default Navbar;
