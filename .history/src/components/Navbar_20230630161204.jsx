import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  const navbarItems = [
    { name: "Categories", link: "/Categories" },
    { name: "Business", link: "/Business" },
    { name: "Teach", link: "/Teach" },
  ];
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.logo} src={logo} alt="" />
      <div className={navbarStyles.item}>[</div>
    </div>
  );
};

export default Navbar;
