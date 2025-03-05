import React from "react";
import styles from "../../styles/project/ProjectCard.module.css";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className={styles.project_link}>
      <div className={styles.project_card}>
        <div className={styles.project_txt}>
          <h3 className={styles.project_heading}>{project.heading}</h3>
          <p className={styles.description}>
            {project.description.length > 0
              ? project.description
              : "No Description..."}
          </p>
        </div>
        <ul className={styles.jelly_tags}>
          {project.tags && project.tags.map((tag, index) => (
            <li key={index} className={styles.tag}>{tag}</li>
          ))}
        </ul>
        <div className={styles.project_bg_img_ctr}>
          <img
            className={styles.project_bg_img}
            src={project.thumbnail}
            alt={project.heading}
          />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
