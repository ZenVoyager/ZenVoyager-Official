import React from "react";
import styles from "../../styles/about/Landing.module.css";
import { arrow_down } from "../../assets/icons";

function Landing() {
  return (
    <section className={styles.landing_section}>
        <div></div>
      <div className={styles.txt_content}>
        <h3 className={styles.txt}>
          Be the part of a <span className="playfair italic">great team</span>
          <br></br>
          but work from <span className="playfair italic">anywhere</span>.
        </h3>
      </div>

      <div className={styles.heading}>
        <h2>Culture</h2>
        {arrow_down}
      </div>
    </section>
  );
}

export default Landing;
