import React from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import T

const CourseCard = () => {
  return (
    <Box>
      <Image width={300} height={300} />
      <Typography>The Complete Python Bootcamp From Zero to Hero in Python</Typography>
      <Typography>Jose Portilla</Typography>
      <Box display={"flex"}>
        <Typography color="darkorange" mr={1}>
          4.6
        </Typography>
        <StarRating rating={3.5} />
      </Box>
    </Box>
  );
};

export default CourseCard;
