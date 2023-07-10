import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png"

const Navbar = () => {

    const navbarItems = [{name: "Categories", link: "/"},{name: "Categories", link: "/"},{name: "Categories", link: "/"}]
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.logo} src={logo} alt=""/>
    </div>
  );
};

export default Navbar;
