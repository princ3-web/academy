import React, { useState } from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const MultipleItemCarousel = () => {

    const useStyles = makeStyles(() => ({
        carouselContainer: {
          display: 'flex',
          overflow: 'hidden',
          position: 'relative',
        },
        carouselItem: {
          flex: '0 0 100%',
          transition: 'transform 0.5s ease',
        },
        carouselButton: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          borderRadius: 0,
        },
        prevButton: {
          left: 0,
        },
        nextButton: {
          right: 0,
        },
      }));

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

  export default