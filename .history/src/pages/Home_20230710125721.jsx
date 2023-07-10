import React from "react";
import SingleCarousel from "../components/SingleCarousel";
import ItemSelector from "../components/ItemSelector";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <SingleCarousel />
      <ItemSelector />
      
    </Box>
  );
};

export default Home;
