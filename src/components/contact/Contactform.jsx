import React from "react";
import styles from "../../styles/contact/Contactform.module.css";

function Contactform() {
  return (
    <section className={styles.contact_form_section}>
      <div className={styles.c1}>
        <div className={styles.img_ctr}></div>
      </div>
      <div className={styles.c2}>
        <div className={styles.heading_txt_ctr}>
          <h2 className={styles.heading_txt}>
            <span className={`playfair italic`}>Say Hello,</span>
            <br></br>
            Let's Create Something Amazing Together
          </h2>
        </div>
        <div className={styles.form_ctr}>
          <div className={`${styles.intrest_box}`}>
            <span>I'm interested in...</span>
            <ul className={styles.jelly_tags}>
              <li className={styles.active}>Design</li>
              <li>Development</li>
              <li>Editing</li>
              <li>Other</li>
            </ul>
          </div>
          <div className={`${styles.form_input}`}>
            <input type="text" placeholder="Full name (eg. Tony Stark)" />
          </div>

          <div className={`${styles.contact_info} ${styles.form_input}`}>
            <input type="text" placeholder="+91 ----- -----" />
            <input type="text" placeholder="email@company.com" />
          </div>

          <div className={`${styles.form_input}`}>
            <input type="text" placeholder="I’m here to say hello..." />
          </div>

          <button className={`${styles.btn_p}`}>
            Let's Discuss
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contactform;
