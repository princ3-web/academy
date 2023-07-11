import React from "react";
import image from "../assets/icons/image.png";
import { Box } from "@mui/material";

const Image = ({ imageWidth, height, src, objectFit }) => (
  <Box>
    <img height={height} src={src} style={{ objectFit: objectFit, width: imageWidth }} alt="" />
  </Box>
);

Image.defaultProps = {
 
  src: image,
  objectFit: "cover",

};

export default Image;
