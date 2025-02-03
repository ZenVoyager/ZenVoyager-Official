import React from "react";
import { Link, NavLink } from "react-router-dom";

import ab_productions_logo from "../assets/ab_productions_logo.svg";
import styles from "../styles/Navbar.module.css";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={ab_productions_logo} alt="AB Productions" />
          </Link>
        </div>

        <ul className={`${styles.nav_links} nav_links`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
