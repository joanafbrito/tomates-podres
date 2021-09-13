import React, { Component } from 'react';
import magGlass from '../../images/magGlass2.png';
import '../Navbar/Navbar.css';

class SearchBar extends Component {

handleClick = (event) => {
  event.preventDefault();
  this.props.filterMovies(event.target.value)  
}

  render() {
   return(
    <form className='search-field'>
      <input type="search" className="search-bar" placeholder='Search Movie Title' onChange={event => this.handleClick(event)}/>
      <img className='search-btn'src={magGlass} alt='Search Magnifying Glass'/>
    </form>
     ) 
  }
}

export default SearchBar;