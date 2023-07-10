import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const CourseCardTooltip = ({ display }) => {
  return (
    <Box
      position={"absolute"}
      display={display}
      border={"1px solid" + grey[400]}
      sx={{ p: 1, backgroundColor: grey[100] }}
      left={"100%"}
      top={0}
      zIndex={1}
    >
      Automate the Boring Stuff with Python Programming
    </Box>
  );
};

export default CourseCardTooltip;
