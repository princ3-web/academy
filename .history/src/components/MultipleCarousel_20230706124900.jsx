import React from "react";
import { Box } from "@mui/material";

const MultipleItemCarousel = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <Box
    sx={{
      display: 'flex',
      overflowX: 'scroll',
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': {
        display: 'none', // hide the horizontal scrollbar
      },
    }}
  >
    {items.map((item, index) => (
      <Box
        key={index}
        sx={{
          minWidth: 200,
          height: 200,
          marginRight: 10,
          backgroundColor: 'lightgray',
        }}
      >
        {item}
      </Box>
    ))}
    </Box>
  );
};

export default MultipleItemCarousel;
