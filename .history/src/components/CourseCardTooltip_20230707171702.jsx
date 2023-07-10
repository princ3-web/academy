import React, { useRef } from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Typography } from "@mui/material";

const CourseCardTooltip = ({ display, placement }) => {

  return (
    <Box
      width={250}
      position={"absolute"}
      display={display}
      border={"1px solid" + grey[400]}
      sx={{ p: 1, backgroundColor: grey[100] }}
      left={placement ? "-50%" : "50%"}
      top={0}
      zIndex={1}
    >
      <Typography>Automate the Boring Stuff with Python Programming</Typography>
      <Typography>Updated February 2023</Typography>
      <Typography>Automate the Boring Stuff with Python Programming</Typography>
      <Typography>Automate the Boring Stuff with Python Programming</Typography>
    </Box>
  );
};

export default CourseCardTooltip;
