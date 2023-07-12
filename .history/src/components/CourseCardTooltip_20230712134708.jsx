import React, { useRef } from "react";
import { Box } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import { Typography } from "@mui/material";

const CourseCardTooltip = ({ display, placement, title, text }) => {
  return (
    <Box
      width={250}
      position={"absolute"}
      display={display}
      border={"1px solid" + grey[600]}
      sx={{ backgroundColor: grey[50], boxShadow: 3, translate: }}
      right={"50%"}
      top={0}
      zIndex={1}
      p={2}
    >
      <Typography fontSize={24} fontWeight={600} mb={1}>
        {title}
      </Typography>
      <Typography fontSize={12} fontWeight={600} color={teal[600]}>
        Updated February 2023
      </Typography>
      <Typography fontSize={14} color={grey[600]}>
        9.5 total hours · All Levels · Subtitles
      </Typography>
      <Typography fontSize={16} my={1}>
        {text}
      </Typography>
    </Box>
  );
};

export default CourseCardTooltip;
