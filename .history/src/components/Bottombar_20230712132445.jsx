import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { links } from "../data/links";
import { Typography } from "@mui/material";

const Bottombar = () => {
  return (
    <Box height={"200px"} sx={{ backgroundColor: grey[600], columnCount: 2 }}>
      <Box display={"flex"} width={"75%"} flexDirection={"column"} flexWrap={"wrap"} border >
        {links.map((item) => (
          <Typography>{item}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Bottombar;
