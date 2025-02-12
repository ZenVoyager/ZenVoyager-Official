import React from "react";
import styles from "../../styles/project/Landing.module.css";

import { arrow_down } from "../../assets/icons";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <div></div>
        <div className={styles.txt_content}>
          <h3 className={styles.txt}>
            <span className={`playfair italic`}>Innovative Projects</span><br></br>
            Transforming Concepts into Successful Realities
          </h3>
        </div>
        <div className={styles.heading}>
            <h2>Projects</h2>
            {arrow_down}
        </div>
      </div>
      
      <div className={styles.c2}>
        <div className={styles.media_ctr}></div>
      </div>
    </section>
  );
}

export default Landing;
