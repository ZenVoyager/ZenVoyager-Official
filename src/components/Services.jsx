import React from "react";
import styles from "../styles/Services.module.css";

import { Link } from "react-router-dom";

import coding_dev from "../assets/services/coding_dev.webp";
import video_editing from "../assets/services/video_editing.webp";
import graphic_design from "../assets/services/graphic_design.webp";
import services from "../data/services.json";

import { arrow_one } from "../assets/icons";

function Services() {
  return (
    <section className={styles.services_section}>
      <div className={styles.heading_ctr}>
        <span className={styles.head_txt}>
          Explore our <span className={`playfair italic`}>services</span>
        </span>
        <p className={styles.para_txt}>
          From development to editing, we offer a range of services to meet your
          creative and technological needs and expectation.
        </p>
      </div>

      <div className={styles.cards_ctr}>
        <div className={styles.scroller}>
          <Link to={`/service/${services.services[0].id}`}>
            <div className={styles.card}>
              <img src={coding_dev} alt="Coding & Development" />
            </div>
          </Link>

          <Link to={`/service/${services.services[2].id}`}>
            <div className={styles.card}>
              <img src={video_editing} alt="Videography & Editing" />
            </div>
          </Link>

          <Link to={`/service/${services.services[1].id}`}>
            <div className={styles.card}>
              <img src={graphic_design} alt="Graphic Designing" />
            </div>
          </Link>

          <Link to="/contact">
            <div className={`${styles.card} ${styles.cta_card}`}>
              <div className={styles.card_txt}>
                <span>Want</span>
                <span className={styles.bold_txt}>ANYTHING</span>
                <span>Else</span>
              </div>
              <div className={styles.cta}>
                <span>Let's Discuss</span>
                {arrow_one}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
