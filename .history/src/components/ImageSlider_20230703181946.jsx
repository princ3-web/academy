import React, { useState, useEffect } from "react";
import imageSliderStyles from "../css/ImageSlider.module.css";
import image0 from "../assets/images/image0.webp";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import arrow from "../assets/icons/arrow.png";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";

const ImageSlider = () => {
  var items = [
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

  console.log(index);

  return (
    <Carousel
    animation="slide"
    navButtonsAlwaysVisible
    autoPlay
    duration={300}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      indicatorContainerProps={{
        style: {
          position: "absolute",
          bottom: "0px",
          zIndex: 10,
          display: "none",
        },
      }}
    >
      {items.map((item, i) => (
        <div className={imageSliderStyles.slide}>
          <img className={imageSliderStyles.image} src={item.image} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
