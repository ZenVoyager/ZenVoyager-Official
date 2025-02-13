import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  { id: 1, title: "Fenton Chemicals", category: "Technology", description: "Detailed description about Fenton Chemicals." },
  { id: 2, title: "Demo Website", category: "Graphics", description: "Detailed description about Demo Website." },
  { id: 3, title: "Sample Video Project", category: "Video Editing", description: "Detailed description about Sample Video Project." },
  { id: 4, title: "Brand Identity", category: "Branding", description: "Detailed description about Brand Identity." },
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.category}</p>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetails;