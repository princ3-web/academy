import React, { useState, useEffect } from "react";
import imageSliderStyles from "../css/ImageSlider.module.css";
import image0 from "../assets/images/image0.webp";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
import arrow from "../assets/icons/arrow.png";
import Carousel from "react-material-ui-carousel";

const ImageSlider = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  const images = [image0, image1, image2, image3];

  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <Carousel
      sx={{ height: "183vh", border: "1px solid black" }}
      indicatorIconButtonProps={{
        style: {
          padding: "10px", // 1
          color: "blue", // 3
        },
      }}
    >
      {images.map((item, i) => (
        <img
          className={imageSliderStyles.image}
          src={item}
          alt=""
        />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
