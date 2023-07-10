import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png";
import glass from "../assets/icons/glass.png";
import cart from "../assets/icons/cart.png";
import language from "../assets/icons/language.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const Navbar = () => {
  const navbarIcons = [
    { name: "Home", link: "/", icon: logo },
    { name: "glass", link: "/", icon: glass },
    { name: "cart", link: "/", icon: cart },
    { name: "language", link: "/", icon: language },
  ];
  const navbarItems = [
    { name: "Categories", link: "/Categories" },
    { name: "Business", link: "/Business" },
    { name: "Teach", link: "/Teach" },
  ];

  const buttons = [
    { name: "Log in", link: "/" },
    { name: "Sign up", link: "/" },
  ];
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.icon} src={navbarIcons[0].icon} alt="" />
      <div className={navbarStyles.item}>{navbarItems[0].name}</div>
      <div className={navbarStyles.searchBar}>
        <img className={navbarStyles.icon} style={{ height: "50%" }} src={navbarIcons[1].icon} alt="" />
      </div>
      <div className={navbarStyles.item}>{navbarItems[1].name}</div>
      <Button variant="text" sx={{ color: "primary.light", mr: 1 }}>
          Teach
        </Button>
      <IconButton >
        <ShoppingCartIcon/>
      </IconButton>
      <div className={navbarStyles.buttons}>
        <Button variant="contained" sx={{ backgroundColor: "primary.dark", mr: 1 }}>
          Log in
        </Button>
        <Button variant="outlined" sx={{ backgroundColor: "primary.light", color: "primary.dark", mr: 1 }}>
          Sign up
        </Button>

        <IconButton >
        <PublicOutlinedIcon/>
      </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
