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

    const carouselItems = [
        <Paper key={1} className={classes.carouselItem}>
          <Typography>Item 1</Typography>
        </Paper>,
        <Paper key={2} className={classes.carouselItem}>
          <Typography>Item 2</Typography>
        </Paper>,
        <Paper key={3} className={classes.carouselItem}>
          <Typography>Item 3</Typography>
        </Paper>,
        <Paper key={4} className={classes.carouselItem}>
          <Typography>Item 4</Typography>
        </Paper>,
        <Paper key={5} className={classes.carouselItem}>
          <Typography>Item 5</Typography>
        </Paper>,
        <Paper key={6} className={classes.carouselItem}>
          <Typography>Item 6</Typography>
        </Paper>,
        <Paper key={7} className={classes.carouselItem}>
          <Typography>Item 7</Typography>
        </Paper>,
        <Paper key={8} className={classes.carouselItem}>
          <Typography>Item 7</Typography>
        </Paper>,
        <Paper key={9} className={classes.carouselItem}>
          <Typography>Item 7</Typography>
        </Paper>,
        <Paper key={7} className={classes.carouselItem}>
          <Typography>Item 7</Typography>
        </Paper>,
        <Paper key={7} className={classes.carouselItem}>
          <Typography>Item 7</Typography>
        </Paper>,
        <Paper key={7} className={classes.carouselItem}>
          <Typography>Item 7</Typography>
        </Paper>,
        <Paper key={7} className={classes.carouselItem}>
          <Typography>Item 7</Typography>
        </Paper>,
      ];
  
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

  export default MultipleItemCarousel;