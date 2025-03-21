import React from "react";
import styles from "../../styles/project/Landing.module.css";

import { arrow_down } from "../../assets/icons";
import Reveal from "../Reveal";
import showreel from "../../assets/Showreel.mp4";

function Landing() {
  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        <div></div>
        <div className={styles.txt_content}>
          <Reveal>
            <h3 className={styles.txt}>
              <span className={`playfair italic`}>Innovative Projects</span>
              <br></br>
              Transforming Concepts into Successful Realities
            </h3>
          </Reveal>
        </div>
        <div className={styles.heading}>
          <h2>Projects</h2>
          {arrow_down}
        </div>
      </div>

      <div className={styles.c2}>
        <div className={styles.media_ctr}>
          <video
            className={styles.showreel}
            src={showreel}
            muted
            playsInline
            loop={false} // We handle looping manually
            autoPlay
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
