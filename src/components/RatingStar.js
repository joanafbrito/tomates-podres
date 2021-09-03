import React , { useState }from 'react';
import { FaStar } from 'react-icons/fa';
import './RatingStar.css';

const RatingStar = (props) => {
    const[rating, setRating ] = useState(null);
    const[hover, setHover ] = useState(null);
   

    return (
        <div>
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
            <p>Movie rating: {props.movieRating}</p>
            <p>Your rate for this movie: {rating}</p>


        </div>
    );
}

export default RatingStar;