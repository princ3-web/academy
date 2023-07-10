import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ItemSelector = () => {
  return (
    <Box paddingX={4} paddingY={4}>
      <Typography fontSize={42} font>A broad selection of courses</Typography>
      <Typography fontSize={20}>Choose from over 210,000 online video courses with new additions published every month</Typography>
    </Box>
  );
};

export default ItemSelector;
