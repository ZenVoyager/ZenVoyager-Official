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

  // Fetch project details by ID
  const fetchProjectDetails = async (id) => {
    const { data, error } = await supabase
      .from("projects")
      .select("thumbnail, project_images")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching project:", error);
      return null;
    }
    return data;
  };

  // Extract file path from the public URL
  const getFilePath = (url) => {
    if (!url) return null;
    const parts = url.split("/projects/")[1]; // Extract path after "projects/"
    return parts ? decodeURIComponent(parts) : null;
  };

  // Delete files from Supabase Storage
  const deleteFile = async (filePath) => {
    if (!filePath) return;

    const { error } = await supabase.storage
      .from("projects")
      .remove([filePath]);

    if (error) {
      console.error(`Error deleting file (${filePath}):`, error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (!confirmDelete) return;

    try {
      // Fetch project details
      const project = await fetchProjectDetails(id);
      if (!project) return;

      const { thumbnail, project_images } = project;

      // Delete thumbnail
      const thumbnailPath = getFilePath(thumbnail);
      await deleteFile(thumbnailPath);

      // Delete multiple project images
      if (Array.isArray(project_images)) {
        const imagePaths = project_images
          .map(getFilePath)
          .filter((path) => path !== null);

        // Delete all project images
        await Promise.all(imagePaths.map((path) => deleteFile(path)));
      }

      // Delete project entry from Supabase database
      const { error: deleteError } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);

      if (deleteError) {
        console.error("Error deleting project entry:", deleteError);
        return;
      }

      // Update state to reflect deletion
      setProjects((prevProjects) => prevProjects.filter((p) => p.id !== id));

      console.log("Project deleted successfully.");
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Projects</h2>
        <Link to="new-project" className={styles.addButton}>
          Add New Project
        </Link>
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
                <td
                  style={{
                    maxWidth: "5ch",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.id}
                </td>
                <td>{project.heading}</td>
                <td>{project.category}</td>
                <td>
                  <Link to={`edit/${project.id}`} className={styles.editButton}>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
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
