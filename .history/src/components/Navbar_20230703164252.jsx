import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png";
import glass from "../assets/icons/glass.png";
import cart from "../assets/icons/cart.png";
import language from "../assets/icons/language.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { TextField } from "@mui/material";

const Navbar = () => {
  const navbarIcons = [
    { name: "Home", link: "/", icon: logo },
    { name: "glass", link: "/", icon: glass },
    { name: "cart", link: "/", icon: cart },
    { name: "language", link: "/", icon: language },
  ];

  return (
    <div className={navbarStyles.navbar}>
      <IconButton>
        <SchoolOutlinedIcon />
      </IconButton>
      <Button variant="text" sx={{ color: "primary.dark", textTransform: "none", mr: 1 }}>
        Categories
      </Button>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="text" sx={{ color: "primary.dark", textTransform: "none", mr: 1 }}>
        Business
      </Button>
      <Button variant="text" sx={{ color: "primary.dark", textTransform: "none", mr: 1 }}>
        Teach
      </Button>
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
      <div className={navbarStyles.buttons}>
        <Button variant="contained" sx={{ backgroundColor: "primary.dark", textTransform: "none", mr: 1 }}>
          Log in
        </Button>
        <Button
          variant="outlined"
          sx={{ backgroundColor: "primary.light", textTransform: "none", color: "primary.dark", mr: 1 }}
        >
          Sign up
        </Button>
        <IconButton>
          <PublicOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
