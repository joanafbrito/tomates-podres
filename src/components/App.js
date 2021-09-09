import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './Movies';
import ChosenOne from './ChosenOne';
import Navbar from './Navbar';
import ErrorInformation from './ErrorInformation';
import { getAllMovies } from '../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      error: null,
      errorStausCode: null
    };
  }

  componentDidMount() {
    getAllMovies()
      .then(res => res.ok ? res.json() : this.displayErrorInfo(res))
      .then(data => {
        this.setState({ movies: [...this.state.movies, ...data.movies] });
      })
      .catch(err =>
        this.setState({ error: <ErrorInformation errorCode={this.state.errorStatusCode}/> }));
  }

  displayErrorInfo = (response) => {
    const errorCode = response.status;
    this.setState({ errorStatusCode: errorCode });
  }

  filterVideoByType = (dataVideos) => {
    const trailerVideo = dataVideos.filter(video => video.type === 'Trailer');
    this.setState({
      videos: [...this.state.videos, ...trailerVideo]
    });
  }

  filterMovies = (searchInput) => {
    const lowerCaseInput = searchInput.toLowerCase();
    const matchingMovieTitles = this.state.movies.filter(movie => {
      const lowerCaseMovie = movie.title.toLowerCase();
      if (lowerCaseMovie.includes(lowerCaseInput) && lowerCaseInput !== '') {
        return movie;
      }
    });
    this.setState({
      filteredMovies: [...matchingMovieTitles]
    });
  }
  
  clearSearchInput = () => {
    this.setState({
      filteredMovies: []
    });
  }

  render() {
    const text = '⏳ Loading Movies....';

    return (
      <section>
      <Switch>
        <Route exact path='/tomates-podres/' render={() => (
          <section className='home-page'>
            <Navbar
              isSearchBar={true}
              filterMovies={this.filterMovies}/>
            {(this.state.movies.length === 0 && !this.state.error)&&<h2>{text}</h2>}
            {this.state.error && <h1>{this.state.error}</h1>}
            {this.state.filteredMovies.length !== 0 &&
              <Movies movieData={this.state.filteredMovies}
                getMovieById={this.getMovieById}
                clearSearchInput={this.clearSearchInput}
              />}
            {(this.state.filteredMovies.length === 0) &&
              <Movies
                movieData={this.state.movies}
                getMovieById={this.getMovieById}
                clearSearchInput={this.clearSearchInput}
              />}
            <footer><h6>@Tomates Podres</h6></footer>
          </section>
        )}
          />
          <Route exact path='/tomates-podres/:id' render={({match}) => {
            const movieId = parseInt(match.params.id);
            return (
           <section>
              <Navbar
                isSearchBar={false}
                filterMovies={this.filterMovies}
              />
              <ChosenOne
                movieId={movieId}
              />
              <footer><h6>@Tomates Podres</h6></footer>
            </section>
            );
          }}
          />
      </Switch>
      </section>
    );
  }
}

export default App;

