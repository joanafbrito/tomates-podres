// import logo from './logo.svg';
import movieData from './movieData';
import Movies from './Movies';
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie:'',
      error: ''
    }
  }

  // componentWillMount() {
  componentDidMount() {
    this.setState({
      movies: [...this.state.movies, ...movieData.movies]
    //   // fetch call with data info- all movies
    //   // fetch for a single movie
    })    
  }

  getMovieById = (movieId) => {
    const movieById = this.state.movies.find(movie => movie.id === movieId)
    this.setState( {selectedMovie: movieById})
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
      <Movies 
        movieData={this.state.movies}
        getMovieById={this.getMovieById}
        />
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
