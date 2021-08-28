import React from 'react';
import './Navbar.css';
//import logo from 'logo-space'
//import search image from 'search-image'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <h1>Tomates Podres 'logo'</h1>
      {props.backToHome && <button>Return to Home</button>}
      {!props.backToHome && <p>Searchbar logo</p>}
    </div>
  )
}

export default Navbar;
