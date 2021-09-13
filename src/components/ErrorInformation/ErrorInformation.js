import React from 'react';
import PropTypes from 'prop-types';
import './ErrorInformation.css';

const ErrorInformation = ({ errorCode }) => {

  switch(errorCode) {
    case 404:
      return (
        <section className="error-msg">
          <img src='https://user-images.githubusercontent.com/82066350/130875779-4adc0578-e45d-4cd8-8992-06ab68a98b59.png'
            alt='movie camera'/>
          <h1>{errorCode}</h1>
          <h2>Page Not Found!</h2>
          <p>"Elsewhere, you shoul look... young Padawan"</p>
        </section>
      )

    case 500:
      return (
        <section className="error-msg">
          <img src='https://user-images.githubusercontent.com/82066350/130875779-4adc0578-e45d-4cd8-8992-06ab68a98b59.png'
            alt='movie camera'/>
          <h1>{errorCode}</h1>
          <h2>Experiencing Server Issues!</h2> 
          <p>"It was over. Skynet was gone. And now one road has become many. 
          Though questions remain, we'll search for the answers together. 
          But one thing we know for sure. The future is not set"</p>
        </section>
      )

    default: 
    return (
      <section className="error-msg">
        <img src='https://user-images.githubusercontent.com/82066350/130875779-4adc0578-e45d-4cd8-8992-06ab68a98b59.png'
            alt='movie camera'/>
        <h1>{errorCode}</h1>
        <h2>Experiencing Technical Diffifulties!</h2> 
        <p>"There's been a glitch in the Matrix"</p>
      </section>
    )
  }
}

export default ErrorInformation;

ErrorInformation.propTypes = {
  errorCode: PropTypes.number
}