import React, { useState, useEffect } from "react";
import imageSliderStyles from "../css/ImageSlider.module.css";
import image0 from "../assets/images/image0.webp";
import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import arrow from "../assets/icons/arrow.png";

const ImageSlider = () => {
  const images = [image0, image1, image2];

  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <div className={imageSliderStyles.slider} >
      {images.map((object, n) => (
        <img
          className={imageSliderStyles.image}
          src={object}
          alt=""
        />
      ))}

      <div className={imageSliderStyles.arrows}>
        <img
          className={imageSliderStyles.arrow}
          onClick={() => (index > 0 ? setIndex((state) => state - 1) : setIndex(images.length))}
          style={{ rotate: "180deg" }}
          src={arrow}
          alt=""
        />
        <img
          className={imageSliderStyles.arrow}
          onClick={() => (index < images.length - 1 ? setIndex((state) => state + 1) : setIndex(0))}
          src={arrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageSlider;
