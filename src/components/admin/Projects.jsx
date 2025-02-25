import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../utils/supabase";
import styles from "../../styles/admin/Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from("projects").select();
      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) {
        console.error("Error deleting project:", error);
      } else {
        setProjects(projects.filter((project) => project.id !== id));
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Projects</h2>
        <Link to="new-project" className={styles.addButton}>Add New Project</Link>
      </div>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td style={{ maxWidth: "5ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{project.id}</td>
                <td>{project.heading}</td>
                <td>{project.category}</td>
                <td>
                  <Link to={`/admin/projects/edit/${project.id}`} className={styles.editButton}>Edit</Link>
                  <button onClick={() => handleDelete(project.id)} className={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Projects;
