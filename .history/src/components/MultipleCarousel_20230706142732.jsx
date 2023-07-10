import React, { useRef, useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const MultipleCarousel = ({elements}) => {
  const carouselRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

  useEffect(() => {
    const updateContainerWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        setContainerWidth(containerWidth);
      }
    };

    window.addEventListener('resize', updateContainerWidth);
    updateContainerWidth();

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -containerWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: containerWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setScrollAmount(containerWidth);
  }, [containerWidth]);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {/* Carousel items */}
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              minWidth: 200,
              height: 200,
              marginRight: 10,
              backgroundColor: 'lightgray',
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
        }}
        onClick={handleScrollLeft}
        disabled={scrollAmount === 0}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
        onClick={handleScrollRight}
        disabled={scrollAmount >= items.length * 210} // Adjust 210 based on item width + margin
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

MultipleCarousel.DEFA

export default MultipleCarousel;
