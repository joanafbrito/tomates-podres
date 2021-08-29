// import logo from './logo.svg';
import Movies from './Movies';
import ChosenOne from './ChosenOne';
import Navbar from './Navbar';
import React, { Component } from 'react';
import { getSingleMovie, getAllMovies, getMovieVideo } from './apiCalls';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      videos: [],
      filteredMovies: [],
      error: null
      //if there is a ChosenOne - get all the info on that movie
      //if not, then have all the information
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({
      movies: [...this.state.movies, ...data.movies]}))
  }

  getMovieById = (movieId) => {

    getSingleMovie(movieId)
    .then(data => this.setState({selectedMovie: data.movie}))
    .catch(err => console.log(err))

    getMovieVideo(movieId)
    .then(data => this.filterVideoByType(data.videos))
    .catch(err => console.log(err))

    return (
      null
    );

  }

  filterVideoByType = (dataVideos) => {
    let trailerVideo = dataVideos.filter(video => video.type ===  "Trailer")
    this.setState({
      videos:[...this.state.videos, ...trailerVideo]
    })   
  }

  returnHome = () => {
    this.setState( {selectedMovie: null, videos: [], filteredMovies: []} )
  } 

  filterMovies = (searchInput) => {
    console.log(searchInput)
    let lowerCaseInput = searchInput.toLowerCase();
    const matchingMovieTitles = this.state.movies.filter(movie => {
    let lowerCaseMovie = movie.title.toLowerCase();
    if (lowerCaseMovie.includes(lowerCaseInput)) {
      return movie
    }
    })
    this.setState({
      filteredMovies: [...matchingMovieTitles]
    })
  }


  render() {
    let text = 'NO MOVIES'
    
    return ( 
      <section>
        <Navbar 
          backToHome={this.state.selectedMovie}
          returnHome={this.returnHome}
          filterMovies={this.filterMovies}/>
        {!this.state.movies && <h2>{text}</h2>}
        {this.state.filteredMovies.length !== 0 && !this.state.selectedMovie &&
        <Movies 
          movieData={this.state.filteredMovies}
          getMovieById={this.getMovieById}
        />}
        {this.state.selectedMovie && <ChosenOne details={this.state.selectedMovie} trailer={this.state.videos}/>}
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
