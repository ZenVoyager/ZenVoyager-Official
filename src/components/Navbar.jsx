import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import ab_productions_logo from "../assets/ab_productions_logo.svg";
import styles from "../styles/Navbar.module.css";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            <NavLink to="/about">Culture</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className={styles.menu_toggle}>
          <label className={styles.hamburger}>
            <input onClick={toggleMenu} type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className={`${styles.line} ${styles.line_top_bottom}`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className={styles.line} d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
      <ul
        className={`${styles.nav_links_mob} ${
          isMenuOpen ? "active" : ""
        } nav_links_mob`}
        id="nav_menu_links_mob"
      >
        <li onClick={closeMenu}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/about">Culture</NavLink>
        </li>
        <li onClick={closeMenu}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
