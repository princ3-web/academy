import React from "react";

const Image = ({ width, height, src, objectFit }) => <img width={width} height={height} src={src} objectFit={objectFit} alt="" />;

Image.defaultProps = {
  width: 300, 
  height: 300,
};

export default Image;
