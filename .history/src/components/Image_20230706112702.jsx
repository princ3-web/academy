import React from "react";
import image from "../assets/icons/image.png";

const Image = ({ width, height, src, objectFit }) => (
  <img height={height} src={src} style={{ objectFit: objectFit, width: width }} alt="" />
);

Image.defaultProps = {
  width: 400,
  height: 200,
  src: image,
  backgroundSize: "cover",
  margin: 1,
};

export default Image;
