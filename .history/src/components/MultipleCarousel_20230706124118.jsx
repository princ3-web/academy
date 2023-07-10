import React, { useState } from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';




const MultipleItemCarousel = () => {
    const classes = useStyles();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    };
  
    return (
      <div className={classes.carouselContainer}>
        {carouselItems.map((item, index) => {
          let transformValue = `translateX(-${currentIndex * 100}%)`;
          const itemStyle = {
            transform: transformValue,
          };
  
          return (
            <div className={classes.carouselItem} style={itemStyle} key={index}>
              {item}
            </div>
          );
        })}
        <IconButton
          className={`${classes.carouselButton} ${classes.prevButton}`}
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          className={`${classes.carouselButton} ${classes.nextButton}`}
          onClick={handleNextClick}
          disabled={currentIndex === carouselItems.length - 1}
        >
          <ChevronRightIcon />
        </IconButton>
      </div>
    );
  };