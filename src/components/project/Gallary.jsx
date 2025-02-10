import React from "react";
import styles from "../../styles/project/Gallary.module.css";

import project_img from "../../assets/projects/fenton_website_ui.webp";
import project_img_demo from "../../assets/projects/demo_website.png";

function Gallary() {
  return (
    <section>
      <div className={styles.navbar_ctr}>
        <ul className={styles.navbar}>
          <li>
            <a href="#" className={styles.active}>
              All Projects
            </a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">Graphics</a>
          </li>
          <li>
            <a href="#">Video Editing</a>
          </li>
          <li>
            <a href="#">Branding</a>
          </li>
        </ul>
      </div>

      <div className={styles.project_cards_ctr}>
        <div className={styles.project_card}>
          <div className={styles.project_txt}>
            <h3 className={styles.project_heading}>Fenton Chemicals</h3>
            <p className={styles.about_project}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pharetra fermentum ante vitae convallis. Mauris finibus at lectus
              et commodo. Aenean lacinia neque a porttitor.
            </p>
          </div>

          <ul className={styles.jelly_tags}>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Graphic Design</li>
          </ul>

          <div className={styles.project_bg_img_ctr}>
            <img
              className={styles.project_bg_img}
              src={project_img}
              alt="project image"
            />
          </div>
        </div>
        <div className={styles.project_card}>
          <div className={styles.project_txt}>
            <h3 className={styles.project_heading}>Demo Website</h3>
            <p className={styles.about_project}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pharetra fermentum ante vitae convallis. Mauris finibus at lectus
              et commodo. Aenean lacinia neque a porttitor.
            </p>
          </div>

          <ul className={styles.jelly_tags}>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Graphic Design</li>
          </ul>

          <div className={styles.project_bg_img_ctr}>
            <img
              className={styles.project_bg_img}
              src={project_img_demo}
              alt="project image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallary;
