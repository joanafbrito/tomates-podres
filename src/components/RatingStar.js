import React , { useState }from 'react';
import { FaStar } from 'react-icons/fa';
import './RatingStar.css';

const RatingStar = (props) => {
    const[rating, setRating ] = useState(null);
    const[hover, setHover ] = useState(null);
   
    return (
        <div>
            <h3>Rate this movie: {rating || 0} </h3>
            {[...Array(10)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input className="starIn"
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            size={20} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}   
                        />
                    </label>
                );
            })}
            <h5>Avarage rating: <strong>{props.movieRating}</strong></h5>
        </div>
    );
}

export default RatingStar;