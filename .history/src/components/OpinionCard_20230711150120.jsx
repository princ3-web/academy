import { Typography } from "@mui/material";
import React from "react";

const OpinionCard = () => {
  return (
    <Box>
      <Box>
        <Typography>
          Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data
          scientists, with highly relevant and in-demand tech skills that are enabling consultants
          to stay ahead of big data trends and raise the bar on proficiency, skills, and
          competencies to meet client demand.
        </Typography>
        <Typography>Read full story</Typography>
      </Box>
      <Box>
        <Image/>
        <Typography>Jim Hemgen</Typography>
        <Typography></Typography>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default OpinionCard;
