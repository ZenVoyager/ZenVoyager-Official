import React from "react";
import styles from "../../styles/project/ProjectCard.module.css";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`}>
      <div key={project.id} className={styles.project_card}>
        <div className={styles.project_txt}>
          <h3 className={styles.project_heading}>{project.title}</h3>
          <p className={styles.about_project}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra fermentum ante vitae convallis.
          </p>
        </div>
        <ul className={styles.jelly_tags}>
          <li>{project.category}</li>
        </ul>
        <div className={styles.project_bg_img_ctr}>
          <img
            className={styles.project_bg_img}
            src={project.img}
            alt="project image"
          />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
