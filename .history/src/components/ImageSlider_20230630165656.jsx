import React, { useState, useEffect } from "react";
import imageSliderStyles from "../css/ImageSlider.module.css";
import image0 from "../assets/images/image0.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";

const ImageSlider = () => {
  const images = [image0, image1, image2];
  return (
    <div className={imageSliderStyles.slider}>
      <img className={imageSliderStyles.image} styl src={images[0]} alt="" />
      <img className={imageSliderStyles.image} src={images[1]} alt="" />
      <img className={imageSliderStyles.image} src={images[2]} alt="" />
    </div>
  );
};

export default ImageSlider;
