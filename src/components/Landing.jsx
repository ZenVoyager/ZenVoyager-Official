import React from 'react'
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { instagram,linkedIn,facebook } from '../assets/icons';

function Landing() {

  return (
    <section className={`${styles.home_section} `}>{/*padding-top-xl*/}
      <div className={styles.heading_ctr}>
        <ul className={styles.jelly_tags}>
          <li>Concept</li>
          <li>Create</li>
          <li>Conquer</li>
        </ul>
        <h1 className={styles.heading}>
          The last stop for all your <span className={`playfair italic`}>design</span>{" "}<br/>
          and <span className={`playfair italic`}>development</span> needs
        </h1>
      </div>
      <div className={styles.btn_ctr}>
        <Link className={styles.btn_p}>Let's Discuss</Link>
      </div>
      <div className={styles.social_ctr}>
        <span className={`txt-s`}>Connect with us</span>
        <ul className={styles.social_links}>
          <li>
            <a href="#">{instagram}</a>
          </li>
          <li>
            <a href="#">{linkedIn}</a>
          </li>
          <li>
            <a href="#">{facebook}</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Landing