import React, { useState, useEffect } from "react";
import imageSliderStyles from "../css/ImageSlider.module.css";
import image0 from "../assets/images/image0.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";

const ImageSlider = () => {
  const images = [image0, image1, image2];

  const [index, setIndex] = useState(0);

  return (
    <div className={imageSliderStyles.slider}>
      <img className={imageSliderStyles.image} style={{ left: "0%" }} src={images[0]} alt="" />
      <img className={imageSliderStyles.image} style={{ left: "100%" }} src={images[1]} alt="" />
      <img className={imageSliderStyles.image} style={{ left: "200%" }} src={images[2]} alt="" />

      <div className={imageSliderStyles.arrows}>
        <i className={imageSliderStyles.arrow}></div>
        <div className={imageSliderStyles.arrow}></div>
      </div>
    </div>
  );
};

export default ImageSlider;
