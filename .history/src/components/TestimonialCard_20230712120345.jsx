import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TestimonialCard = ({ width, name, text }) => {
  return (
    <Box sx={{ width: width, backgroundColor: grey[50], border: "1px solid" + grey[400] }} p={3} my={3} mr={3}>
      <FormatQuoteIcon />
      <Typography fontSize={16} mt={2}>
        {text}
      </Typography>
      <Box my={2} sx={{ borderTop: "1px solid" + grey[400] }}></Box>
      <Typography fontSize={18} fontWeight={600}>
        {name}
      </Typography>
    </Box>
  );
};

TestimonialCard.defaultProps = {
  width: 300,
};

export default TestimonialCard;
