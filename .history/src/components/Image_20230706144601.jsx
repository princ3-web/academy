import React from "react";
import image from "../assets/icons/image.png";
import { Box } from "@mui/material";
import { spacing } from '@mui/system';

const Image = ({ imageWidth, height, src, objectFit, margin, padding }) => (
  <Box p={padding} m={margin}>
    <img height={height} src={src} style={{ objectFit: objectFit, width: imageWidth }} alt="" />
  </Box>
);

Image.defaultProps = {
  width: 300,
  height: 200,
  src: image,
  objectFit: "cover",
  margin: 1,
  padding: 1,
};

export default Image;
