import React from 'react';
import { Box } from '@mui/material';


const MultipleItemCarousel = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'scroll',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          display: 'none', // hide the horizontal scrollbar
        },
      }}
    >
      {/* Carousel items */}
    </Box>
  );
};

  export default MultipleItemCarousel;