import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

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
      <Box display={"flex"} flexDirection={"row"} marginTop={2}>
        {elements.map((i, n) => (
          <Button variant="text" onClick={() => setItem(n)}>
            <Typography fontWeight={600} color={item === n ? grey[900] : grey[500]}>
              {i}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box padding={4} border={1}>
        <Typography fontWeight={600} fontSize={28}>
          Build websites and applications with Web Development
        </Typography>
        <Typography width={"65%"} marginY={2}>
          The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the
          internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we
          increasingly rely on.
        </Typography>
        <Button variant="outlined" border={[color: grey[900]]}>
          <Typography fontWeight={600} color={grey[900]} textTransform={"none"}>Explore Web Development</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ItemSelector;
