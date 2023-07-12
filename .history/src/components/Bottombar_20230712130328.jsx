import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material";
import { grey } from "@mui/material/colors";
import { links }

const Bottombar = () => {
  return <Box height={"200px"} sx={{ backgroundColor: grey[600] }}>
    {links.map((item) => <Typography>{item}</Typography>)}
  </Box>;
};

export default Bottombar;
