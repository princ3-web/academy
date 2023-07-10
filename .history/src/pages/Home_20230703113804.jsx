import React from "react";
import Button from '@mui/material/Button';

import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Button variant="contained">Hello World</Button>
    </div>
  );
};

export default Home;
