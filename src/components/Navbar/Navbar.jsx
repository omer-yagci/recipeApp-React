import React from "react";
import classes from "../Navbar/navbar.module.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <h2>Recipe App</h2>
      </Link>
      <div className={classes["section-container"]}>
        <ul>
          <li>About</li>
          <li>Github</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
