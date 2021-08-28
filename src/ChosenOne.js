// import React, { Component} from 'react';
import './ChosenOne.css';
import PropTypes from 'prop-types';

const ChosenOne = (props) => {

return (
  <div 
    className='single-movie'
    >
    <h1>{props.details.title}</h1>
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.trailer[0].key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
    <h2>{props.details.overview}</h2>
    <img className='movie-pic'src={props.details.backdrop_path} alt='movie poster' />
  </div>
)

}
  // constructor({details}) {
  //   super()
  //   this.details = details
  //   this.state = {
  //     movie: []
  //   }
  //   console.log(props)
  // }
  // componentDidMount() {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.details.id}`)
  //   .then(res => res.json())
  //   .then(data => this.setState({movie: data.movie}))
  //   .catch(err => console.log(err))
  // }
  //fetch call in here with the individual movie
    // render() {
    //   return(
    //     <h1>Hello</h1>
    //   )
    
    // }

    //Could use as function - to get the details
    //state only be changed on a class component
    //Cannot change a state inside the child one
  
export default ChosenOne

