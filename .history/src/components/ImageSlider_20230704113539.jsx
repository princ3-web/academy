import React, { useState, useEffect } from "react";
import imageSliderStyles from "../css/ImageSlider.module.css";
import image0 from "../assets/images/image0.webp";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";

const ImageSlider = () => {
  var slides = [
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

  return (
    <div className={imageSliderStyles.slider}>
      {slides.map((item, n) => (
        <div className={imageSliderStyles.slide}>
          <img className={imageSliderStyles.image} src={item.image} alt="" />
          <div className={imageSliderStyles.arrows}>
            <IconButton>
              <KeyboardArrowLeftIcon fontSize="large" color={"primary"} className={imageSliderStyles.arrow} />
            </IconButton>
            <IconButton>
              <KeyboardArrowRightIcon fontSize="large" className={imageSliderStyles.arrow} />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
