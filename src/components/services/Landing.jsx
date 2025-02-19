import React from "react";
import styles from "../../styles/services/Landing.module.css";
import {
  code,
  graphic,
  editing,
  conference,
} from "../../assets/services/icons";
import { mouse } from "../../assets/services/icons";

function Landing({ service }) {
  // console.log(service.name)

  const getIcon = (id) => {
    if (id == "code") {
      return code;
    } else if (id == "graphic") {
      return graphic;
    } else if (id == "editing") {
      return editing;
    } else if (id == "conference") {
      return conference;
    }
  };

  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        {getIcon(service.id)}
        <h2 className={styles.heading}>{service.heading}</h2>
        <p className={styles.txt}>{service.description}</p>
        <div className={styles.search_box}>
          <input type="text" placeholder="Enter your email" />
          <button className={styles.btn_p}>Let's Discuss</button>
        </div>
      </div>
      <div className={styles.c2}>
        <div className={styles.media_ctr}></div>
      </div>
    </section>
  );
}

export default Landing;
