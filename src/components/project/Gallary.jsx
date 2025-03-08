import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "../../styles/project/Gallary.module.css";
import supabase from "../../utils/supabase";
import ProjectCard from "./ProjectCard";

const categories = [
  "All Projects",
  "Coding and Development",
  "Graphic Design",
  "Video Editing",
];

const PROJECTS_PER_BATCH = 6; // Load 6 projects at a time

function Gallary() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]); // Projects currently displayed
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .order("project_date", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
        setVisibleProjects(data.slice(0, PROJECTS_PER_BATCH)); // Show first batch
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Load more projects when the user scrolls to the bottom
  const loadMoreProjects = useCallback(() => {
    if (loadingMore) return; // Prevent multiple calls

    setLoadingMore(true);
    setTimeout(() => {
      const currentCount = visibleProjects.length;
      const newProjects = filteredProjects.slice(
        currentCount,
        currentCount + PROJECTS_PER_BATCH
      );

      if (newProjects.length > 0) {
        setVisibleProjects((prev) => [...prev, ...newProjects]);
      }

      setLoadingMore(false);
    }, 1000); // Simulate network delay
  }, [filteredProjects, visibleProjects, loadingMore]);

  // Intersection Observer to detect when the user reaches the bottom
  const lastProjectRef = useCallback(
    (node) => {
      if (loading || loadingMore || visibleProjects.length === filteredProjects.length) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProjects();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, loadingMore, visibleProjects, filteredProjects, loadMoreProjects]
  );

  return (
    <section>
      <div className={styles.navbar_ctr}>
        <ul className={styles.navbar}>
          {categories.map((category) => (
            <li key={category}>
              <a
                className={activeCategory === category ? styles.active : ""}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleProjects(
                    filteredProjects.slice(0, PROJECTS_PER_BATCH)
                  ); // Reset visible projects when category changes
                }}
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
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => {
              if (index === visibleProjects.length - 1) {
                return (
                  <div key={project.id} ref={lastProjectRef}>
                    <ProjectCard project={project} />
                  </div>
                );
              }
              return <ProjectCard key={project.id} project={project} />;
            })
          ) : (
            <p className={styles.no_projects}>No projects found.</p>
          )}
        </div>
      )}

      {loadingMore && <p className={styles.loading}>Loading more projects...</p>}
    </section>
  );
}

export default Gallary;
