import React, { useState, useEffect } from "react";
import styles from "../../styles/project/Gallary.module.css";
import supabase from "../../utils/supabase";
import ProjectCard from "./ProjectCard";

const categories = [
  "All Projects",
  "Coding and Development",
  "Graphic Design",
  "Video Editing",
];

function Gallary() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
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

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section>
      <div className={styles.navbar_ctr}>
        <ul className={styles.navbar}>
          {categories.map((category) => (
            <li key={category}>
              <a
                className={activeCategory === category ? styles.active : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {loading ? (
        <p className={styles.loading}>Loading projects...</p>
      ) : (
        <div className={styles.project_cards_ctr}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className={styles.no_projects}>No projects found.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Gallary;
