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
            alt="ZenVoyager"
          />
        </div>
        <div className={styles.footer_nav_links_ctr}>
          <ul className={styles.footer_nav_links}>
            <li>
              <a href="https://www.linkedin.com/company/zenvoyager/" target="_blank">LinkedIn {tilted_arrow}</a>
            </li>
            <li>
              <a href="https://www.behance.net/zenvoyagers" target="_blank">Behance {tilted_arrow}</a>
            </li>
            <li>
              <a href="https://www.instagram.com/zenvoyagers/" target="_blank">Instagram {tilted_arrow}</a>
            </li>
          </ul>
          <ul className={styles.footer_nav_links}>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
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
        <a href="mailto:connect@zenvoyager.in" className={styles.email}>
          connect@zenvoyager.in
        </a>
        <div className={styles.btn_ctr}>
          <a href="tel:+918349770721" className={styles.btn_s}>Discuss the Project</a>
        </div>
        <span className={styles.copyright}>© ZenVoyager 2026</span>
      </div>
    </footer>
  );
}

export default Footer;
