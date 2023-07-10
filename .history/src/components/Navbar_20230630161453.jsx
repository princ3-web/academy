import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  const navbarIcons = [
    { name: "Home", link: "/" },
    { name: "Cart", link: "/Business" },
    { name: "Language", link: "/Teach" },
  ];
  const navbarItems = [
    { name: "Categories", link: "/Categories" },
    { name: "Business", link: "/Business" },
    { name: "Teach", link: "/Teach" },
  ];
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.logo} src={logo} alt="" />
      <div className={navbarStyles.item}>{navbarItems[0].name}</div>
      <div className={navbarStyles.item}>{navbarItems[1].name}</div>
      <div className={navbarStyles.item}>{navbarItems[2].name}</div>
    </div>
  );
};

export default Navbar;
