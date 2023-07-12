import React from "react";
import image from "../assets/icons/image.png";
import { Box } from "@mui/material";

const Image = ({width, height, src, objectFit }) => (
  <Box>
    <img width={width} src={src} style={{ objectFit: objectFit, height: height }} alt="" />
  </Box>
);

Image.defaultProps = {
  src: image,
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

export default Image;
