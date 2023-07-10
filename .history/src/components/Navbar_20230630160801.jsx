import React from "react";
import navbarStyles from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.logo}></div>
    </div>
  );
};

export default Navbar;
