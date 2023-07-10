import React from "react";
import image from "../assets/icons/image.png";

const Image = ({ width, height, src, objectFit }) => (
  <img width={width} height={height} src={src} style={{ objectFit: objectFit }} alt="" />
);

Image.defaultProps = {
  width: 300,
  height: 200,
  src: image,
  margin: 1,
};

export default Image;
