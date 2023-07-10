import React, { useState } from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Carousel = () => {
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