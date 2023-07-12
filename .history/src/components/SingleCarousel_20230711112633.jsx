import React, { useState, useEffect } from "react";
import singleCarouselStyles from "../css/SingleCarousel.module.css";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

const SingleCarousel = ({images}) => {

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hover) {
        setIndex((state) => (state === images.length - 1 ? 0 : state + 1));
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [hover]);

  const handlePrevious = () => {
    if (!transition) {
      setTransition(true);
      setIndex((state) => (state > 0 ? setIndex(state - 1) : setIndex(images.length - 1)));
      setTimeout(() => setTransition(false), 500);
    }
  };

  const handleNext = () => {
    if (!transition) {
      setTransition(true);
      setIndex((state) => (state < images.length - 1 ? setIndex(state + 1) : setIndex(0)));
      setTimeout(() => setTransition(false), 500);
    }
  };

  return (
    <Box className={singleCarouselStyles.slider}>
      {images.map((item, n) => (
        <div
          className={singleCarouselStyles.slide}
          style={{ filter: n === index ? "Opacity(1)" : "Opacity(0)" }}
        >
          <img className={singleCarouselStyles.image} src={item.image} alt="" />
          <Box
            p={3}
            className={singleCarouselStyles.textBox}
            sx={{
              boxShadow: 10,
              width: 400,
              height: 100,
              backgroundColor: grey[100],
            }}
          >
            <Typography fontSize={28} fontWeight={600}>
              {item.name}
            </Typography>
            <Typography fontSize={16}>{item.description}</Typography>
          </Box>
        </div>
      ))}
      <div className={singleCarouselStyles.arrows}>
        <IconButton
          onClick={handlePrevious}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <KeyboardArrowLeftIcon
            fontSize="large"
            style={{ color: grey[50] }}
            className={singleCarouselStyles.arrow}
          />
        </IconButton>
        <IconButton
          onClick={handleNext}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <KeyboardArrowRightIcon
            fontSize="large"
            style={{ color: grey[50] }}
            className={singleCarouselStyles.arrow}
          />
        </IconButton>
      </div>
    </Box>
  );
};

export default SingleCarousel;
