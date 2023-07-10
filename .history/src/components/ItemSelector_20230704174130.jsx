import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ItemSelector = () => {
  const [item, setItem] = useState();

  const elements = ["Python", "Excel", "Web Development", "JavaScript", "Data Science", "Amazon AWS", "Drawing"];

  return (
    <Box paddingX={4} paddingY={4}>
      <Typography fontSize={42} fontWeight={600}>
        A broad selection of courses
      </Typography>
      <Typography fontSize={20}>
        Choose from over 210,000 online video courses with new additions published every month
      </Typography>
      <Box d flexDirection={"row"}>
        {elements.map((item, n) => (
          <Typography>{item}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ItemSelector;
