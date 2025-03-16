import React from "react";
import styles from "../styles/Testimonials.module.css";
import client_eh from "../assets/testimonials/eh.jpg"
import client_fc from "../assets/testimonials/fc.jpg"
import { Link } from "react-router-dom";

function Testimonials() {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
    >
      <path
        d="M2.25 9.5H15.375"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 14.75L15.75 9.5L10.5 4.25"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <section className={styles.testimonials_section}>
      <div className={styles.c1}>
        <div className={styles.heading_ctr}>
          <span className={styles.head_txt}>
            What our <span className={`playfair italic`}>Clients say</span>
          </span>
          <p className={styles.para_txt}>
            We value our clients’ feedback and are proud to share their
            experiences with AB Productions. Join Our Happy Clients Experience
            the difference AB Productions can make for your business.
          </p>
          <div className={styles.btn_ctr}>
            <Link to="/contact" className={styles.btn_s}>Get a Quote {arrow}</Link>
          </div>
        </div>
      </div>

      <div className={styles.testimonial_ctr}>
        <div className={styles.animation_strip}>
          <div className={styles.card}>
            <img
              src={client_eh}
              alt="profile pic"
              className={styles.profile_pic}
            />
            <div className={styles.details}>
              <h4 className={styles.name}>Jalaj Tiwari</h4>
              <span className={styles.designation}>
                Founder, eHawkers Marketing LLP
              </span>
            </div>
            <p className={styles.comments}>
              ZenVoyager has transformed our brand image with their
              exceptional design services. They are very Professional, reliable,
              and creative. Highly recommend AB Productions.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src={client_fc}
              alt="profile pic"
              className={styles.profile_pic}
            />
            <div className={styles.details}>
              <h4 className={styles.name}>Fenton Chemicals</h4>
              <span className={styles.designation}>
                UI/UX Design
              </span>
            </div>
            <p className={styles.comments}>
            ZenVoyager completely transformed our website's user experience! The design is sleek, modern, and incredibly intuitive. Highly recommended!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
