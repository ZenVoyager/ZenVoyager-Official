import React from "react";
import { Link } from "react-router-dom";
import ab_productions_logo from "../assets/ab_productions_logo.svg"
import styles from "../styles/Navbar.module.css"

function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src={ab_productions_logo} alt="AB Productions" />
        </div>

        <ul className={`${styles.nav_links}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">Culture</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
