import React from "react";
import styles from "../../styles/about/Values.module.css";

function Values() {
  return (
    <section className={styles.values_section}>
      <div className={styles.heading_ctr}>
        <div className={styles.heading}>
          <div className={styles.heading_top}>
            <h3>Our</h3>
            <div></div>
          </div>
          <div className={styles.heading_bottom}>
            <div></div>
            <h3>Values</h3>
          </div>
        </div>

        <div className={styles.txt_content_ctr}>
          <p className={styles.txt_content}>
            To become the leading provider of comprehensive solutions, starting
            from our city, expanding to the state, conquering the country, and
            ultimately making a global impact.
          </p>
        </div>
      </div>

      <div className={styles.cards_strip_ctr}>
        <div className={styles.cards_strip}>
          <div className={styles.card}>
            <span className={styles.serial_no}>01</span>
            <h5 className={styles.card_heading}>Innovation</h5>
            <p className={styles.card_content}>
              We continuously strive to innovate and improve our services.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.serial_no}>02</span>
            <h5 className={styles.card_heading}>Quality</h5>
            <p className={styles.card_content}>
              We are committed to delivering high-quality solutions.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.serial_no}>03</span>
            <h5 className={styles.card_heading}>Focus</h5>
            <p className={styles.card_content}>
              Our clients are at the heart of everything we do.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.serial_no}>04</span>
            <h5 className={styles.card_heading}>Integrity</h5>
            <p className={styles.card_content}>
              We uphold the highest standards of integrity in all our actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
