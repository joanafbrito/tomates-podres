import React, { Component } from 'react';
import magGlass from './images/magGlass2.png';
import './Navbar.css';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      movieTitle: ''
    }
  }

handleClick = (event) => {
  this.setState({movieTitle: event.target.value})
  this.props.filterMovies(this.state.movieTitle)
}

  render() {
   return(
    <form className='search-field'>
    <input type="search" className="search-bar" placeholder='Search Movie Title' onChange={(event) => this.handleClick(event)}/>
    <img className='search-btn'src={magGlass} alt='Search Magnifying Glass'/>
  </form>
     ) 
  }
}

export default SearchBar;