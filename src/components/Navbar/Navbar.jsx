// import React, { useState } from "react";
import classes from "../Navbar/navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const [isLoggin, setIsloggin] = useState(false);

  // if (isLoggin) {
  //   return;
  // }
  return (
    <nav className={classes.nav}>
      <NavLink to="/home">
        <h2>Recipe App</h2>
      </NavLink>
      <div className={classes["section-container"]}>
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/omer-yagci"
            >
              Github
            </a>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
