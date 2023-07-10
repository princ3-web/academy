import React from "react";
import image from "../assets/icons/"

const Image = ({ width, height, src, objectFit }) => <img width={width} height={height} src={src} objectFit={objectFit} alt="" />;

Image.defaultProps = {
  width: 300, 
  height: 300,
  src: 
};

export default Image;
