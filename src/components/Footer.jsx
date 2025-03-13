import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Footer.module.css";

import zen_logo from "../assets/zen_trademark_one.svg";
import { tilted_arrow } from "../assets/icons";

function Footer() {
  return (
    <footer className={styles.footer_section}>
      <div className={styles.c1}>
        <div className={styles.logo_ctr}>
          <img
            className={styles.logo}
            src={zen_logo}
            alt="AB Productions"
          />
        </div>
        <div className={styles.footer_nav_links_ctr}>
          <ul className={styles.footer_nav_links}>
            <li>
              <a href="">LinkedIn {tilted_arrow}</a>
            </li>
            <li>
              <a href="">Facebook {tilted_arrow}</a>
            </li>
            <li>
              <a href="">Instagram {tilted_arrow}</a>
            </li>
          </ul>
          <ul className={styles.footer_nav_links}>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <ul className={styles.jelly_tags}>
          <li>Agency</li>
          <li>SaaS & Tech</li>
          <li>Media & Entertainment</li>
        </ul>
      </div>
      <div className={styles.c2}>
        <a href="mailto:work.abproductions@gmail.com" className={styles.email}>
          connect@zenvoyager.in
        </a>
        <div className={styles.btn_ctr}>
          <Link className={styles.btn_s}>Join our newsletter</Link>
        </div>
        <span className={styles.copyright}>© AB PRODUCTIONS 2024</span>
      </div>
    </footer>
  );
}

export default Footer;
