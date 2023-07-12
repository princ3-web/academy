import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";


const Navbar = () => {
  return (
    <Box className={navbarStyles.navbar} px={4}>
      <IconButton>
        <SchoolOutlinedIcon />
      </IconButton>
      <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
        Categories
      </Button>
      <TextField id="standard-basic" label="Search for anything" variant="filled" sx={{ width: "400px" }} />
      <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
        Business
      </Button>
      <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
        Teach
      </Button>
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
      <div className={navbarStyles.buttons}>
        <Button variant="contained" sx={{ backgroundColor: grey[900], textTransform: "none", mr: 1 }}>
          Log in
        </Button>
        <Button variant="outlined" sx={{ backgroundColor: grey[50], textTransform: "none", color: grey[900], mr: 1 }}>
          Sign up
        </Button>
        <IconButton>
          <PublicOutlinedIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default Navbar;
