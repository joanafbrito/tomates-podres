import Movies from './Movies';
import ChosenOne from './ChosenOne';
import Navbar from './Navbar';
import React, { Component } from 'react';
import { getSingleMovie, getAllMovies, getMovieVideo } from '../apiCalls';
import { Route } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      searchBar: true,
      error: null   
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
    .catch(err => this.setState({error: err}))

    getMovieVideo(movieId)
    .then(data => this.filterVideoByType(data.videos))
    .catch(err => this.setState({error: err}))

    // return (
    //   null
    // );

  }

  filterVideoByType = (dataVideos) => {
    let trailerVideo = dataVideos.filter(video => video.type ===  "Trailer")
    this.setState({
      videos:[...this.state.videos, ...trailerVideo]
    })   
  }

  updateSearchBar = (status) => {
    this.setState( {searchBar: status, filteredMovies: []} )
  } 

  filterMovies = (searchInput) => {
    let lowerCaseInput = searchInput.toLowerCase();
    const matchingMovieTitles = this.state.movies.filter(movie => {
    let lowerCaseMovie = movie.title.toLowerCase();
    if (lowerCaseMovie.includes(lowerCaseInput) && lowerCaseInput !== '') {
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
        isSearchBar={this.state.searchBar}
        updateSearchBar={this.updateSearchBar}
        // chosenMovie={this.state.selectedMovie}
        // returnHome={this.returnHome}
        filterMovies={this.filterMovies}/>
      {this.state.movies.length === 0 && <h2>{text}</h2>}
      <Route exact path='/' render={() => (
        <section>
              {this.state.filteredMovies.length !== 0 &&
              <Movies movieData={this.state.filteredMovies}
                getMovieById={this.getMovieById} />}
              {(this.state.filteredMovies.length === 0) &&
              <Movies
                movieData={this.state.movies}
                getMovieById={this.getMovieById}
              />}
            </section>
        )}
        />
        <Route exact path='/:id' render={({match}) => {
          const movieId = parseInt(match.params.id)
          return <ChosenOne movieId={movieId} updateSearchBar={this.updateSearchBar}/>
        }
        }
        />  
      </section>
    );  
  } 
}

export default App;
//Router looks in the array of all the movies and then bring the obj that has the same id

// {!this.state.movies && <h2>{text}</h2>}
// {this.state.filteredMovies.length !== 0 && !this.state.selectedMovie &&
// <Movies 
//   movieData={this.state.filteredMovies}
//   getMovieById={this.getMovieById}
// />}
// {this.state.selectedMovie && <ChosenOne details={this.state.selectedMovie} trailer={this.state.videos}/>}
// {(!this.state.selectedMovie && this.state.filteredMovies.length === 0) &&
// <Movies 
//   movieData={this.state.movies}
//   getMovieById={this.getMovieById}
// />
// }
