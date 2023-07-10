import React from "react";
import image from "../assets/icons/image.png";
import { Box } from "@mui/material";
import { spacing } from '@mui/system';

const Image = ({ imageWidth, height, src, objectFit, margin, padding }) => (
  <Box p={padding} m={margin}>
    <img height={height} src={"https://picsum.photos/id/237/200/300"} style={{ objectFit: objectFit, width: imageWidth }} alt="" />
  </Box>
);

Image.defaultProps = {
  width: 300,
  height: 200,
  src: image,
  objectFit: "contain",
  margin: 1,
  padding: 1,
};

export default Image;
