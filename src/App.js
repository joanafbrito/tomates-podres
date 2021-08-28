// import logo from './logo.svg';
// import movieData from './movieData';
import Movies from './Movies';
import ChosenOne from './ChosenOne';
import React, { Component } from 'react';
import { getSingleMovie, getAllMovies } from './apiCalls';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      error: null
      //if there is a ChosenOne - get all the info on that movie
      //if not, then have all the information
    }
  }

  // componentWillMount() {
  componentDidMount() {
    getAllMovies()
    // const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
    // fetch(url)
    // .then(res => res.json())
    .then(data => this.setState({
      movies: [...this.state.movies, ...data.movies]}))
    
    //  fetch call with data info- all movies
    //  fetch for a single movie - moved to ChosenOne 
  }

  getMovieById = (movieId) => {
    getSingleMovie(movieId)
    .then(data => this.setState({selectedMovie: data.movie}))
    .catch(err => console.log(err))
    return (
      null
    );
    // const movieById = this.state.movies.find(movie => movie.id === movieId)
    // this.setState( {selectedMovie: movieById})
  }


  render() {
    let text = 'NO MOVIES'

    // if (this.state.movies.length > 0){
    //   console.log(this.state.movies[0].title)
    //   text = this.state.movies[0].title
    // }
    
    return ( 
      <section>
      {!this.state.movies && <h2>{text}</h2>}
      {this.state.selectedMovie && <ChosenOne details={this.state.selectedMovie}/>}
      {!this.state.selectedMovie &&
      <Movies 
        movieData={this.state.movies}
        getMovieById={this.getMovieById}
        />
      }
      </section>



    // Nav Bar - Search button(input)
    // Movies Components- all movies
    // MovieCard Image

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    );  
  } 
}
export default App;
