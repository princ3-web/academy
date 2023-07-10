import React from 'react';
import { Box } from '@mui/material';


const MultipleItemCarousel = () => {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

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