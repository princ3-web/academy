import React from "react";

const Image = ({ width, height, src, objectFit }) => <img width={width} height={height} src={src} objectFit={objectFit} alt="" />;

Image.defaultProps = {
  width: 100, 
  height: 100,
};

export default Image;
