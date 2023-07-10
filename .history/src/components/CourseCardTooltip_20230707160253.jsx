import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const CourseCardTooltip = () => {
  return (
    <Box position={"absolute"} border={"1px solid" + grey[400]} sx={{p: backgroundColor: grey[100] }} right={0} top={0}>
      Automate the Boring Stuff with Python Programming
    </Box>
  );
};

export default CourseCardTooltip;
