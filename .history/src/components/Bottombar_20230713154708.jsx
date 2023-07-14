import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { links } from "../data/links";
import { Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Bottombar = ({isMobile}) => {
  return (
    <Box position={"relative"} px={4} py={4} height={""} sx={{ backgroundColor: grey[900] }}>
      <Box sx={{ columnCount: 2, width: "50%" }}>
        <Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
          {links.map((item) => (
            <Typography color={grey[200]}>{item}</Typography>
          ))}
        </Box>
      </Box>
      <Box position={"absolute"} color={grey[200]} sx={{ left: 32, bottom: 15 }}>
        <SchoolOutlinedIcon />
      </Box>
      <Typography position={"absolute"} color={grey[200]} sx={{ right: 32, bottom: 15 }}>
        Academy© 2023
      </Typography>
    </Box>
  );
};

export default Bottombar;
