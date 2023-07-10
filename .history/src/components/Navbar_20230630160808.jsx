import React from "react";
import navbarStyles from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.logo}/>
    </div>
  );
};

export default Navbar;
