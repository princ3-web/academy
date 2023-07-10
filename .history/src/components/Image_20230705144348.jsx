import React from "react";
import image from "../assets/icons/image.png";

const Image = ({ width, height, src, objectFit, margin }) => (
  <img width={width} height={height} src={src} style={{ objectFit: objectFit, margin: margin }} alt="" />
);

Image.defaultProps = {
  width: 300,
  height: 200,
  src: image,
  backgroundSize: "contain",
  margin: 1,
};

export default Image;
