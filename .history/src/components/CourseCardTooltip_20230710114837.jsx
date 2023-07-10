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
      <Typography fontSize={24} fontWeight={600}>Automate the Boring Stuff with Python Programming</Typography>
      <Typography fontSize={24}>Updated February 2023</Typography>
      <Typography>9.5 total hoursAll LevelsSubtitles</Typography>
      <Typography>
        A practical programming course for office workers, academics, and administrators who want to
        improve their productivity.
      </Typography>
      <Typography>Automate tasks on their computer by writing simple Python programs.</Typography>
    </Box>
  );
};

export default CourseCardTooltip;
