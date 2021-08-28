// import React, { Component} from 'react';
import './ChosenOne.css';

const ChosenOne = (props) => {

return (
  <div 
    className='single-movie'
    style={{backgroundImage: `url(${props.details.backdrop_path})`}}>
    <h1>{props.details.title}</h1>
    <h2>{props.details.overview}</h2>
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

