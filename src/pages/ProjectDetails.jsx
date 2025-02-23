import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/project/ProjectDetails.module.css";
import { tilted_arrow } from "../assets/icons";

const projects = [
  {
    id: 1,
    title: "Fenton Chemicals",
    category: "Technology",
    description: "Detailed description about Fenton Chemicals.",
  },
  {
    id: 2,
    title: "Demo Website",
    category: "Graphics",
    description: "Detailed description about Demo Website.",
  },
  {
    id: 3,
    title: "Sample Video Project",
    category: "Video Editing",
    description: "Detailed description about Sample Video Project.",
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    description: "Detailed description about Brand Identity.",
  },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className={styles.container}>
      {/* Left Section - Media */}
      <div className={styles.leftSection}>
        <h2 className={styles.heading}>Fenton Chemicals</h2>
        <ul className={styles.jelly_tags}>
          <li>UI Design</li>
          <li>Web Development</li>
          <li>E-Commerce</li>
          <li>Graphic Design</li>
        </ul>
        <p className={styles.txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae
          non et delectus? Incidunt maxime quidem adipisci mollitia doloremque
          reiciendis beatae est non ratione aperiam.
        </p>
        <a href="#" className={styles.btn_s} to="/projects">
          View Live {tilted_arrow}
        </a>
      </div>

      {/* Right Section - Details */}
      <div className={styles.rightSection}>
        <h2 className={styles.fixedTxt}><span className="playfair italic">The</span> Showcase</h2>
        <img
          src="https://placehold.co/1500x4320/blue/white"
          alt="Project Preview"
          className={styles.projectImage}
        />
      </div>
    </div>
  );
}

export default ProjectDetails;
