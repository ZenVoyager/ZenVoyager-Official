import React from "react";
import styles from "../styles/Clients.module.css";
import clients_img from "../assets/clients.png";

function Clients() {
  return (
    <section className={styles.clients_section}>
      <div className={styles.top}>
        <div className={styles.l1}></div>
        <span className={styles.txt1}>
          <span className={styles.txt2}>Trusted by</span> many organizations
        </span>
        <div className={`${styles.l1} ${styles.l1_r}`}></div>
      </div>
      <div className={styles.slider_ctr}>
        <div className={styles.slider}>
          <img src={clients_img} alt="our clients" />
          <img src={clients_img} alt="our clients" />
          <img src={clients_img} alt="our clients" />
          <img src={clients_img} alt="our clients" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.l2}></div>
      </div>
    </section>
  );
}

export default Clients;
