import React, { useState, useEffect } from "react";
import imageSliderStyles from "../css/ImageSlider.module.css";
import image0 from "../assets/images/image0.webp";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";

const ImageSlider = () => {
  var images = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: image0,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image1,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image2,
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: image3,
    },
  ];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const handlePrevious = () => {
    if (!transitioning) {
      setTransition(true);
      setIndex((state) => (state > 0 ? setIndex((state) => state - 1) : setIndex(images.length)));
      setTimeout(() => setTransitioning(false), 500);
    }
  };

  const handleNext = () => {

    if (!transitioning) {
      setTransition(true);
      setIndex((state) => (state > 0 ? setIndex((state) => state - 1) : setIndex(images.length)));
      setTimeout(() => setTransitioning(false), 500);
    }


    
  };

  console.log(index);

  return (
    <div className={imageSliderStyles.slider}>
      {images.map((item, n) => (
        <div className={imageSliderStyles.slide}>
          <img
            className={imageSliderStyles.image}
            style={{ transform: `translateX(-${index * 100}%)` }}
            src={item.image}
            alt=""
          />
        </div>
      ))}
      <div className={imageSliderStyles.arrows}>
        <IconButton onClick={handlePrevious}>
          <KeyboardArrowLeftIcon fontSize="large" style={{ color: grey[50] }} className={imageSliderStyles.arrow} />
        </IconButton>
        <IconButton onClick={handleNext}>
          <KeyboardArrowRightIcon fontSize="large" style={{ color: grey[50] }} className={imageSliderStyles.arrow} />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageSlider;
