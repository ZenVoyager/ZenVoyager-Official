import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Extra.module.css";

function Extra() {
  return (
    <section className={styles.extra_section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>
          Ready to <span className="playfair italic">Elevate</span> your
          business?
        </h3>

        <p className={styles.bodytxt}>
          Get in touch with us today to discuss your project needs.
        </p>
        <div className={styles.btn_ctr}>
          <Link className={styles.btn_p}>Let's Discuss</Link>
        </div>
      </div>
    </section>
  );
}

export default Extra;
