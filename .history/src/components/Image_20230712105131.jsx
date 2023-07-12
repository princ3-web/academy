import React from "react";
import image from "../assets/icons/image.png";
import { Box } from "@mui/material";

const Image = ({width, height, src, objectFit }) => (
  <Box>
    <img height={height} w src={src} style={{ objectFit: objectFit }} alt="" />
  </Box>
);

Image.defaultProps = {
  src: image,
  objectFit: "cover",

};

export default Image;
