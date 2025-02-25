import React, { useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";
import project_img from "../assets/projects/fenton_website_ui.webp";
import project_img_demo from "../assets/projects/demo_website.png";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import supabase from "../utils/supabase";
import ProjectCard from "./project/ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  const handleRightClick = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    async function getProjectsData() {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .order("created_at", { ascending: false }) // Get latest projects first
        .limit(4); // Limit to 4 projects

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    }
    getProjectsData();
  }, []);

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
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className={styles.no_projects}>No projects available</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
