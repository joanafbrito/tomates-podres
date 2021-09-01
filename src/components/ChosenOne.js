import React, { Component } from 'react';
import './ChosenOne.css';
import RatingStar from './RatingStar';
import PropTypes from 'prop-types';
import { getSingleMovie, getMovieVideo } from '../apiCalls';


class ChosenOne extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedMovie: null,
      videos: []
    }
  }
  
componentDidMount = () => {
  getSingleMovie(this.props.movieId)
  .then(data => this.setState({selectedMovie: data.movie}))
  .catch(err => this.setState({error: err}))

  getMovieVideo(this.props.movieId)
  .then(data => this.filterVideoByType(data.videos))
  .catch(err => this.setState({error: err}))
}

filterVideoByType = (dataVideos) => {
  let trailerVideo = dataVideos.filter(video => video.type ===  "Trailer")
  this.setState({
    videos:[...this.state.videos, ...trailerVideo]
  })  
}

render() {
return (
 
  <div className='chosen-one'>
    {!this.state.selectedMovie && this.state.videos.length === 0  && <h2>Loading...</h2>}
    {this.state.selectedMovie && 
    <section>
      <h1>{this.state.selectedMovie.title}</h1>
      <section className="video">
      <iframe
        // width="800"
        // height="480"
        width="90%"
        height="90%"
        src={this.state.videos.length &&  `https://www.youtube.com/embed/${this.state.videos[0].key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </section>
    <section 
      className="chosenOne-details" 
      style={{backgroundImage:`url(${this.state.selectedMovie.backdrop_path})`}}
    >
      <h2>{this.state.selectedMovie.overview} </h2>
      <section className="RatingStar">
      {/* this will be the value of the star */}
        <RatingStar key={Date.now()} movieRating={this.state.selectedMovie.average_rating}/>
        <h2> {this.state.selectedMovie.average_rating} </h2>
      </section>
      </section>
    </section>}
  </div>
);
}
}


export default ChosenOne;
  

