import React from "react";
import ImageSlider from "../components/ImageSlider";
import ItemSelector from "../components/ItemSelector";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <ImageSlider />
      <ItemSelector/>
    </Box>
  );
};

export default Home;
