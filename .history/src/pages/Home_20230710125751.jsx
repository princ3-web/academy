import React from "react";
import SingleCarousel from "../components/SingleCarousel";
import ItemSelector from "../components/ItemSelector";
import { Box } from "@mui/material";
import MultipleCarousel from "../components/MultipleCarousel";

const Home = () => {
  return (
    <Box>
      <SingleCarousel />
      <ItemSelector />
      <MultipleCarousel/>

    </Box>
  );
};

export default Home;
