import React, { useRef } from "react";
import { Box } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import { Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const CourseCardTooltip = ({ display, placement }) => {
  return (
    <Box
      width={250}
      position={"absolute"}
      display={display}
      border={"1px solid" + grey[400]}
      sx={{ backgroundColor: grey[50] }}
      left={placement ? "-100%" : "100%"}
      top={0}
      zIndex={1}
      p={2}
    >
      <Typography fontSize={24} fontWeight={600}>
        Automate the Boring Stuff with Python Programming
      </Typography>
      <Typography fontSize={12} fontWeight={600} color={teal[600]}>
        Updated February 2023
      </Typography>
      <Typography fontSize={14} color={grey[600]}>
        9.5 total hours · All Levels · Subtitles
      </Typography>
      <Typography fontSize={16}>
        A practical programming course for office workers, academics, and administrators who want to
        improve their productivity.
      </Typography>
      <PlayArrowIcon position={"absolute"} sx={{}}/>
    </Box>
  );
};

export default CourseCardTooltip;
