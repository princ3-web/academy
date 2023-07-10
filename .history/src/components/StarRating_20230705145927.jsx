import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const StarRating = ({ rating }) => {
  const stars = [];
  
  // Create an array of five stars
  for (let i = 1; i <= 5; i++) {
    let starIcon;
    if (i <= rating) {
      // Full star if rating is greater or equal to current index
      starIcon = <Star />;
    } else if (i - rating <= 0.5) {
      // Half star if rating is within half value of current index
      starIcon = <StarHalf />;
    } else {
      // Empty star if rating is less than current index
      starIcon = <StarBorder />;
    }
    
    stars.push(starIcon);
  }
  
  return <div>{stars}</div>;
};

export default StarRating;
