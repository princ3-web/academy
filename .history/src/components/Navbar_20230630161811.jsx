import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png";
import glass from "../assets/icons/glass.png";
import cart from "../assets/icons/cart.png";

const Navbar = () => {
  const navbarIcons = [
    { name: "Home", link: "/", icon: logo },
    { name: "Cart", link: "/", icon: glass },
    { name: "Language", link: "/", icon: cart },
  ];
  const navbarItems = [
    { name: "Categories", link: "/Categories" },
    { name: "Business", link: "/Business" },
    { name: "Teach", link: "/Teach" },
  ];
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.icon} src={navbarIcons[0].icon} alt="" />
      <div className={navbarStyles.item}>{navbarItems[0].name}</div>
      <div className={navbarStyles.item}>{navbarItems[1].name}</div>
      <div className={navbarStyles.item}>{navbarItems[2].name}</div>
      <img className={navbarStyles.icon} style={{width: "2rem"}} src={navbarIcons[2].icon} alt="" />

    </div>
  );
};

export default Navbar;
