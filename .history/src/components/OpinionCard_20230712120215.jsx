import { Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Button from "@mui/material/Button";
import { green, grey } from "@mui/material/colors";
import faceFemale from "../assets/icons/faceFemale.png";
import Image from "./Image";

const OpinionCard = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} height={250} width={"60vw"} px={4}>
      <Box
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        
      >
        <FormatQuoteIcon />
        <Typography>
          Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data
          scientists, with highly relevant and in-demand tech skills that are enabling consultants
          to stay ahead of big data trends and raise the bar on proficiency, skills, and
          competencies to meet client demand.
        </Typography>
        <Button>
          <Typography color={grey[900]}>Read full story</Typography>
        </Button>
      </Box>
      <Box
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box borderRadius={"100%"} overflow={"hidden"}>
          <Image src={faceFemale} width={150} />
        </Box>
        <Typography fontSize={20} fontWeight={600}>
          Jane Hemgen
        </Typography>
        <Typography color={grey[600]}>Principal</Typography>
        <Typography>Booz Allen Hamilton</Typography>
      </Box>
    </Box>
  );
};

export default OpinionCard;
