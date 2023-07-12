import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { links } from "../data/links";
import { Typography } from "@mui/material";

const Bottombar = () => {
  return (
    <Box px={4} height={"200px"} sx={{ backgroundColor: grey[600] }}>
      <Box sx={{ columnCount: 4, width: "75%" }}>
        <Box display={"flex"} flexDirection={"column"} flexWrap={"wrap"}>
          {links.map((item) => (
            <Typography color={grey[200]}>{item}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Bottombar;
