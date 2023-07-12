import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { links } from "../data/links";
import { Typography } from "@mui/material";

const Bottombar = () => {
  return (
    <Box px={4} py={4} height={"200px"} sx={{ backgroundColor: grey[900] }}>
      <Box sx={{ columnCount: 3, width: "50%" }}>
        <Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
          {links.map((item) => (
            <Typography color={grey[200]}>{item}</Typography>
          ))}
        </Box>
      </Box>
      <Typography position={"absolute"} color={grey[200]} sx={}>Academy© 2023</Typography>
    </Box>
  );
};

export default Bottombar;
