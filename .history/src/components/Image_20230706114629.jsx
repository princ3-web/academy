import React from "react";
import image from "../assets/icons/image.png";
import 

const Image = ({ imageWidth, height, src, objectFit, margin, padding }) => (
  <Box>
    <img height={height} src={src} style={{ objectFit: objectFit, width: imageWidth, margin: margin, padding: padding }} alt="" />
  </Box>
);

Image.defaultProps = {
  width: 300,
  height: 200,
  src: image,
  backgroundSize: "cover",
  margin: 1,
  padding: 2,
};

export default Image;
