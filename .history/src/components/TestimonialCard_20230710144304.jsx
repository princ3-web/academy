import React from "react";
import { Box, Typography } from "@mui/material";

const TestimonialCard = ({width}) => {
  return (
    <Box sx={{width: width}} p={2} b>
      <Typography>
        I am proud to say that after a few months of taking this course...I passed my exam and am
        now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
      </Typography>
      <Box></Box>
      <Typography>Will A</Typography>
    </Box>
  );
};

TestimonialCard.defaultProps = {
    width: 300
}

export default TestimonialCard;
