import React from 'react';
import './Navbar.css';
import logo from './images/tomato1.svg'
import magGlass from './images/magGlass2.png'
//import search image from 'search-image'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className='logo-name'>
        <img className='logo'src={logo} alt='Logo-Tomato image' />
        <h1>Tomates Podres</h1>
      </div>

      {props.backToHome && <button onClick={() => props.returnHome()}>Return to Home</button>}
      {!props.backToHome && 
      <form className='search-field'>
        <input type="search" className="search-bar" placeholder='Search Movie Title'/>
        <img className='search-btn'src={magGlass} alt='Search Magnifying Glass image'/>
      </form>}
    </div>
  )
}

export default Navbar;
