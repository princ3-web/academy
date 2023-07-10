import React from "react";

const Image = ({ width, height, src, objectFit }) => <img width={width} height={height} src={src} objectFit={objectFit} alt="" />;

Image.defaultProps = {
    width: 100, // Default width if not provided
    height: 100, // Default height if not provided
  };
  

export default Image;
