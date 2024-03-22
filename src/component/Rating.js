import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className='rating'>
      {[...Array(5)].map((_, index) => (
<span className='star' key={index}>
          ☆
          <span
            className={`filled ${hoverRating > index ? 'hover' : ''}`}
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(index)}
            role='radio'
            tabIndex={0}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleRating(index);
              }
            }}
          >
            ☆
          </span>
        </span>
      ))}
      <span>{rating}</span>
    </div>
  );
};

export default Rating;