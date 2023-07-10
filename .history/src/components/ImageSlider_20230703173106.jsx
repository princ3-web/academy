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
  ];

  const images = [image0, image1, image2, image3];

  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <Carousel>
      {items.map((item, i) => (
        <div></div>
      ))}
    </Carousel>
    // <div className={imageSliderStyles.slider}>
    //   {images.map((object, n) => (
    //     <img
    //       className={imageSliderStyles.image}
    //       style={{ translate: index < n ? "100%" : index === n ? "0%" : "-100%" }}
    //       src={object}
    //       alt=""
    //     />
    //   ))}

    //   <div className={imageSliderStyles.arrows}>
    //     <img
    //       className={imageSliderStyles.arrow}
    //       onClick={() => (index > 0 ? setIndex((state) => state - 1) : setIndex(images.length))}
    //       style={{ rotate: "180deg" }}
    //       src={arrow}
    //       alt=""
    //     />
    //     <img
    //       className={imageSliderStyles.arrow}
    //       onClick={() => (index < images.length - 1 ? setIndex((state) => state + 1) : setIndex(0))}
    //       src={arrow}
    //       alt=""
    //     />
    //   </div>
    // </div>
  );

};

export default ImageSlider;
