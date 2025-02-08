import React from "react";
import styles from "../styles/Services.module.css";

import coding_dev from "../assets/services/coding_dev.webp";
import video_editing from "../assets/services/video_editing.webp";
import graphic_design from "../assets/services/graphic_design.webp";
import { Link } from "react-router-dom";
// import more_service from "../assets/services/coding_dev.webp";

function Services() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
    >
      <path
        d="M27.3551 23.7974L27.3276 13.1994L16.7296 13.1719C16.6192 13.157 16.5069 13.1659 16.4002 13.1982C16.2936 13.2304 16.1951 13.2852 16.1114 13.3588C16.0278 13.4324 15.961 13.5231 15.9154 13.6248C15.8699 13.7265 15.8467 13.8368 15.8475 13.9482C15.8483 14.0596 15.8731 14.1696 15.92 14.2706C15.967 14.3717 16.0352 14.4614 16.1198 14.5338C16.2045 14.6062 16.3038 14.6596 16.4109 14.6903C16.518 14.721 16.6305 14.7284 16.7406 14.7119L24.6822 14.7448L14.1613 25.2658C14.0154 25.4117 13.9335 25.6095 13.9335 25.8158C13.9335 26.0221 14.0154 26.2199 14.1613 26.3658C14.3071 26.5116 14.505 26.5936 14.7112 26.5936C14.9175 26.5936 15.1154 26.5116 15.2612 26.3658L25.7822 15.8448L25.8152 23.7864C25.8159 23.9928 25.8986 24.1904 26.0451 24.3359C26.1915 24.4813 26.3897 24.5626 26.5961 24.5618C26.8025 24.5611 27.0002 24.4784 27.1456 24.332C27.291 24.1855 27.3723 23.9873 27.3716 23.7809L27.3551 23.7974Z"
        fill="#F6F6F6"
      />
    </svg>
  );

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
          <Link>
            <div className={styles.card}>
              <img src={coding_dev} alt="Coding & Development" />
            </div>
          </Link>

          <Link>
            <div className={styles.card}>
              <img src={video_editing} alt="Videography & Editing" />
            </div>
          </Link>

          <Link>
            <div className={styles.card}>
              <img src={graphic_design} alt="Graphic Designing" />
            </div>
          </Link>

          <Link>
            <div className={`${styles.card} ${styles.cta_card}`}>
              <div className={styles.card_txt}>
                <span>Want</span>
                <span className={styles.bold_txt}>ANYTHING</span>
                <span>Else</span>
              </div>
              {/* <img src={more_service} alt="Explore more options" /> */}
              <div className={styles.cta}>
                <span>Let's Discuss</span>
                {arrow}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
