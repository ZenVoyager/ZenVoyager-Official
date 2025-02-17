import React from 'react'
import styles from "../../styles/services/Landing.module.css"
import {coding} from "../../assets/services/icons"
import { mouse } from '../../assets/services/icons'

function Landing() {
  return (
    <section className={styles.landing_section}>
        <div className={styles.c1}>
            {coding}
            <h2 className={styles.heading}>Coding & Development</h2>
            <p className={styles.txt}>
            At AB Productions, we deliver top-notch websites, mobile apps, and software solutions. Our expert team uses the latest technologies to create robust and scalable products, ensuring your digital vision comes to life with precision and innovation.
            </p>
            <div className={styles.search_box}>
                <input type="text" placeholder='Enter your email' />
                <button className={styles.btn_p}>Let's Discuss</button>
            </div>
        </div>
        <div className={styles.c2}>
            <div className={styles.media_ctr}></div>
        </div>
    </section>
  )
}

export default Landing