import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/project/ProjectDetails.module.css";
import { tilted_arrow } from "../assets/icons";
import supabase from "../utils/supabase";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching project:", error);
      } else {
        setProject(data);
      }
      setLoading(false);
    }

    fetchProject();
  }, [id]);

  if (loading) {
    return <p>Loading project details...</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className={styles.container}>
      {/* Left Section - Media */}
      <div className={styles.leftSection}>
        <h2 className={styles.heading}>{project.heading}</h2>
        <ul className={styles.jelly_tags}>
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <p className={styles.txt}>{project.description}</p>
        {project.live_link && (
          <a href={project.live_link} target="_blank" rel="noopener noreferrer" className={styles.btn_s}>
            View Live {tilted_arrow}
          </a>
        )}
      </div>

      {/* Right Section - Details */}
      <div className={styles.rightSection}>
        <h2 className={styles.fixedTxt}><span className="playfair italic">The</span> Showcase</h2>
        <img
          src={project.project_image}
          alt={project.heading}
          className={styles.projectImage}
        />
      </div>
    </div>
  );
}

export default ProjectDetails;
