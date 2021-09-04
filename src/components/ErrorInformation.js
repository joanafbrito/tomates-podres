import React from 'react';
import './ErrorInformation.css';

const ErrorInformation = ({ errorCode }) => {

  switch(errorCode) {
    case 404:
      return (
        <div>
          <h1>{errorCode}</h1>
          <img src='https://user-images.githubusercontent.com/82066350/130875779-4adc0578-e45d-4cd8-8992-06ab68a98b59.png'
            alt='movie camera image'/>
          <h2>Page Not Found - Look elsewhere, young Padawan</h2>
      
        </div>
      )
    case 500:
      return (
        <div>
          <h1>{errorCode}</h1>
          <img src='https://user-images.githubusercontent.com/82066350/130875779-4adc0578-e45d-4cd8-8992-06ab68a98b59.png'
            alt='movie camera image'/>
          <h2>Experiencing Server Issues - 
          "It was over. Skynet was gone. And now one road has become many. 
          Though questions remain, we'll search for the answers together. 
          But one thing we know for sure. The future is not set"</h2>
        </div>
      )
    default: 
    return (
      <div>
        <h1>{errorCode}</h1>
        <img src='https://user-images.githubusercontent.com/82066350/130875779-4adc0578-e45d-4cd8-8992-06ab68a98b59.png'
            alt='movie camera image'/>
        <h2>Experiencing Technical Diffifulties - There's been a glitch in the Matrix</h2>
      </div>
    )
  }
}

export default ErrorInformation;