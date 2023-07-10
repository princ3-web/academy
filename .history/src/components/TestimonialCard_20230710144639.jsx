import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = ({ width }) => {
  return (
    <Box sx={{ width: width, backgroundColor: grey[50], border: "1px solid" + grey[400] }} p={3}>
        <FormatQuoteIcon py={2}/>
      <Typography fontSize={16}>
        I am proud to say that after a few months of taking this course...I passed my exam and am
        now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.
      </Typography>
      <Box my={2} sx={{borderTop: "1px solid" + grey[400]}}></Box>
      <Typography fontSize={18} fontWeight={600}>Will A</Typography>
    </Box>
  );
};

TestimonialCard.defaultProps = {
  width: 300,
};

export default TestimonialCard;
