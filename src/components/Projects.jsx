import React from "react";
import styles from "../styles/Projects.module.css";
import project_img from "../assets/projects/fenton_website_ui.webp";
import project_img_demo from "../assets/projects/demo_website.png";
import { Link } from "react-router-dom";

function Projects() {
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

  const handleRightClick = (event) => {
    event.preventDefault();
  };

  return (
    <section
      className={styles.projects_section}
      onContextMenu={handleRightClick}
    >
      <div className={styles.heading_ctr}>
        <span className={styles.head_txt}>
          <span className={`playfair italic`}>Project</span> Showcase
        </span>
        <p className={styles.para_txt}>
          Take a look at some of our recent projects that showcase our expertise
          in development and creativity.
        </p>
        <div className={styles.btn_ctr}>
          <Link className={styles.btn_s} to="/projects">
            View All {arrow}
          </Link>
        </div>
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

export default Projects;
