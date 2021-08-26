// import logo from './logo.svg';
import movieData from './movieData';
import React, { Component }from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: ''
    }
  }

  compontentDidMount() {
    this.setState({
      movies: [...this.state.movies, ...movieData]
      // fetch call with data info
    })    
  }

  render() {
  return ( <h2>Hello</h2>


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
