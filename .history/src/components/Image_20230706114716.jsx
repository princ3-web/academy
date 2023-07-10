import React from "react";
import image from "../assets/icons/image.png";
import { Box } from "@material-ui/core";

const Image = ({ imageWidth, height, src, objectFit, margin, padding }) => (
  <Box m={2} p={padding}>
    <img height={height} src={src} style={{ objectFit: objectFit, width: imageWidth }} alt="" />
  </Box>
);

Image.defaultProps = {
  width: 300,
  height: 200,
  src: image,
  backgroundSize: "cover",
  margin: 1,
  padding: 1,
};

export default Image;
