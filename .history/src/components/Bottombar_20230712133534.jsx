import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { links } from "../data/links";
import { Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

const Bottombar = () => {
  return (
    <Box position={"relative"} px={4} py={4} height={"200px"} sx={{ backgroundColor: grey[900] }}>
      <Box sx={{ columnCount: 3, width: "50%" }}>
        <Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
          {links.map((item) => (
            <Typography color={grey[200]}>{item}</Typography>
          ))}
        </Box>
      </Box>
      <Box position={"absolute"} color={grey[200]} sx={{ right: 15, bottom: 15 }}>
      <SchoolOutlinedIcon/>
      <Typography position={"absolute"} color={grey[200]} sx={{ right: 15, bottom: 15 }}>
        Academy© 2023
      </Typography>
    </Box>
  );
};

export default Bottombar;
