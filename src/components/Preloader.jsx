import React from "react";
import preloaderAnimation from "../assets/preloader_animation.webp";
import styles from "../styles/Preloader.module.css";
import logo from "../assets/zen_wordmark.svg";

function Preloader() {
  return (
    <div className={styles.preloader_section}>
      <div className={styles.preloader_ctr}>
        <img
          className={styles.preloader_animation}
          src={preloaderAnimation}
          alt="loading..."
        />
        {/* <img className={styles.logo} src={logo} alt="Zen Voyager" /> */}
        <span className={styles.tags}>Loading your experience</span>
      </div>
    </div>
  );
}

export default Preloader;
