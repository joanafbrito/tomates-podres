import Movies from './Movies';
import ChosenOne from './ChosenOne';
import Navbar from './Navbar';
import ErrorInformation from './ErrorInformation'
import React, { Component } from 'react';
import { getAllMovies } from '../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      searchBar: true,
      error: null,
      errorStausCode: null   
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(res => res.ok ? res.json() : this.displayErrorInfo(res))
    .then(data => { this.setState({
      movies: [...this.state.movies, ...data.movies]})})    
    .catch(err => this.setState({error: <ErrorInformation errorCode={this.state.errorStatusCode}/>}))
    }

  displayErrorInfo = (response) => {
    console.log(response)
    let errorCode = response.status;
    this.setState({errorStatusCode: errorCode})
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
    let text = 'Loading Movies....'
    
    return ( 
      <section className='home-page'>
      <Navbar 
        isSearchBar={this.state.searchBar}
        updateSearchBar={this.updateSearchBar}
        filterMovies={this.filterMovies}/>
      {(this.state.movies.length === 0 && !this.state.error)&&<h2>{text}</h2>}
      <Switch>
        <Route exact path='/' render={() => (
          <section>
              {this.state.error && <h1>{this.state.error}</h1>}
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
          }}          
          /> 
          {/* <Route render={() => {

          }} */}
          {/* /> */}
      </Switch> 
          <footer><h6>@Tomates Podres</h6></footer>
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
