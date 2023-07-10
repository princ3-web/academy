import React from "react";
import SingleCarousel from "../components/SingleCarousel";
import ItemSelector from "../components/MultiCarouselWrapper";
import { Box } from "@mui/material";
import MultipleCarouselWrapper from "../components/MultipleCarouselWrapper";

const Home = () => {
  return (
    <Box>
      <SingleCarousel />
      <MultipleCarouselWrapper />

    </Box>
  );
};

export default Home;
