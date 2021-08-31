import React from 'react';
import './ChosenOne.css';
import RatingStar from './RatingStar';
import PropTypes from 'prop-types';

const ChosenOne = (props) => {

return (
  <div 
    className='chosen-one'
    >
    <h1>{props.details.title}</h1>
    <section className="video">
    {/* maybe we wont keep this - maybe it will be a diferent function component */}
      <iframe
        // width="800"
        // height="480"
        width="90%"
        height="90%"
        src={props.trailer.length &&  `https://www.youtube.com/embed/${props.trailer[0].key}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </section>
    <section 
      className="chosenOne-details" 
      style={{backgroundImage:`url(${props.details.backdrop_path})`}}
    >
      <h2>{props.details.overview} </h2>
      <section className="RatingStar">
      {/* this will be the value of the star */}
        <RatingStar key={Date.now()} movieRating={props.details.average_rating}/>
        <h2> {props.details.average_rating} </h2>
      </section>
    </section>
  </div>
);
}

export default ChosenOne;
  

