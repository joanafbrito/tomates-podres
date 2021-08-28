import React from 'react';
import './ChosenOne.css';
import PropTypes from 'prop-types';

const ChosenOne = (props) => {

// let src= videoSite(props.trailer[0].site)

return (
  <div 
    className='single-movie'
    >
    <h1>{props.details.title}</h1>
    <div className="video-responsive">
      <iframe
        width="800"
        height="480"
        src={props.trailer.length &&  `https://www.youtube.com/embed/${props.trailer[0].key}`}
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

// Pseudo-code for videos from vimeo - not sure if we will have time to do that

// let videoSite = if (props.trailer[0].site === youtube ) {
//   return   `https://www.youtube.com/embed/${props.trailer[0].key}`
// } else {
//   return `http://www.vimeo.com/${props.trailer[0].key}`
// }

// Paseudo code for us if we need to use the constructor and change the state in this file 
// }
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

