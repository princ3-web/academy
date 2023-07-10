import React from "react";
import image from "../assets/icons/image.png";

const Image = ({ imageWidth, height, src, objectFit, margin, padding }) => (
  <img height={height} src={src} style={{ objectFit: objectFit, width: imageWidth, margin: margin }} alt="" />
);

Image.defaultProps = {
  width: 300,
  height: 200,
  src: image,
  backgroundSize: "cover",
  margin: 1,
  padding: 1
};

export default Image;
