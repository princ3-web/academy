import { Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const OpinionCard = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box width={"50%"} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} alignContent={"space-b"}>
        <FormatQuoteIcon />
        <Typography>
          Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data
          scientists, with highly relevant and in-demand tech skills that are enabling consultants
          to stay ahead of big data trends and raise the bar on proficiency, skills, and
          competencies to meet client demand.
        </Typography>
        <Typography>Read full story</Typography>
      </Box>
      <Box width={"50%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <AccountCircleIcon />
        <Typography>Jim Hemgen</Typography>
        <Typography>Principal</Typography>
        <Typography>Booz Allen Hamilton</Typography>
      </Box>
    </Box>
  );
};

export default OpinionCard;
