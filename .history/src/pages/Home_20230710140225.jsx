import React from "react";
import SingleCarousel from "../components/SingleCarousel";
import ItemSelector from "../components/MultiCarouselWrapper";
import { Box } from "@mui/material";
import MultipleCarouselWra from "../components/MultipleCarousel";

const Home = () => {
  return (
    <Box>
      <SingleCarousel />
      <ItemSelector />

    </Box>
  );
};

export default Home;
