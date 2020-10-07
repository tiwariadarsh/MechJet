import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
const StarRating = () => {
    const [rating,setRating] = useState(null);
    
    return (
    <div>
    {[...Array(5)].map((star,i) => {
        const ratingValue= i + 1;
        return (
        
 <label>
  <input type="radio" 
  name="rating"
  value={ratingValue}
  onClick={() => setRating(ratingValue)} />
  <FaStar className="star" color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} />
</label>
    );

    })}
   
    </div>
    );
};
export default StarRating;