import React, { Component } from 'react';
import './ChosenOne.css';
import RatingStar from './RatingStar';
import ErrorInformation from './ErrorInformation';
import PropTypes from 'prop-types';
import { getSingleMovie, getMovieVideo } from '../apiCalls';


class ChosenOne extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedMovie: null,
      videos: [],
      error: null,
      errorStatusCode: null
    }
  }
  
componentDidMount = () => {
  this.props.updateSearchBar(false)
  getSingleMovie(this.props.movieId)
  .then(res => res.ok ? res.json() : this.displayErrorInfo(res)) 
  .then(data => this.setState({selectedMovie: data.movie}))
  .catch(err => this.setState({error: <ErrorInformation errorCode={this.state.errorStatusCode}/>}))

  getMovieVideo(this.props.movieId)
  .then(res => res.ok ? res.json() : this.displayErrorInfo(res)) 
  .then(data => this.filterVideoByType(data.videos))
  .catch(err => this.setState({error: <ErrorInformation errorCode={this.state.errorStatusCode}/>}))
}

displayErrorInfo = (response) => {
  let errorCode = response.status;
  console.log(errorCode)
  this.setState({errorStatusCode: errorCode})
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
    {this.state.error && <h1>{this.state.error}</h1>}
    {(!this.state.selectedMovie && this.state.videos.length === 0 && !this.state.error)  && <h2>Loading...</h2>}
    {(this.state.selectedMovie && !this.state.error) &&
    <section>
      <h2>Trailer:  <strong>{this.state.selectedMovie.title}</strong></h2>
      <section className="video">
        <iframe
          width="800"
          height="480"
          src={this.state.videos.length &&  `https://www.youtube.com/embed/${this.state.videos[0].key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </section>
      <h3>See Details</h3>
      <section 
      className="chosenOne-details" 
      style={{backgroundImage:`url(${this.state.selectedMovie.backdrop_path})`}}
      > 
        <div className="details">
          <h2>{this.state.selectedMovie.overview} </h2>
          <section className="RatingStar">
            {/* this will be the value of the star */}
            <RatingStar key={Date.now()} movieRating={this.state.selectedMovie.average_rating}/>
            <h2> {this.state.selectedMovie.average_rating} </h2>
          </section>
        </div>
      </section> 
    </section>}
  </div>)}
}



export default ChosenOne;
  

