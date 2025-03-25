import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/project/ProjectDetails.module.css";
import { tilted_arrow } from "../assets/icons";
import supabase from "../utils/supabase";
import ScrollToTop from "../components/ScrollToTop";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;

        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading project details...</div>;
  }

  if (!project) {
    return <div className={styles.error}>Project not found.</div>;
  }

  return (
    <>
      <ScrollToTop />
      <div className={styles.container}>
        {/* Left Section - Details */}
        <div className={styles.leftSection}>
          <div className={`${styles.project_details_section} ${styles.snap_section}`}>
            <h2 className={styles.heading}>{project.heading}</h2>

            <ul className={styles.jelly_tags}>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

            {/* Main Description */}
            <p className={styles.txt}>{project.description}</p>

            {/* Live Link */}
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn_s}
              >
                View Live {tilted_arrow}
              </a>
            )}
          </div>

          {/* Additional Sections */}
          {project.sections && project.sections.length > 0 && (
            <div className={styles.additional_sections}>
              {project.sections.map((section, index) => (
                <div
                  key={index}
                  className={`${styles.project_details_section} ${styles.additional_section} ${styles.snap_section}`}
                >
                  <h3 className={styles.heading}>{section.heading}</h3>
                  <div className={styles.markdown_content}>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={materialDark}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                        table: ({ node, ...props }) => (
                          <div className={styles.table_container}>
                            <table {...props} />
                          </div>
                        ),
                        img: ({ node, ...props }) => (
                          <img
                            {...props}
                            style={{
                              maxWidth: "100%",
                              height: "auto",
                              display: "inline-block",
                            }}
                          />
                        ),
                      }}
                    >
                      {section.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section - Image Showcase */}
        <div className={styles.rightSection}>
          <h2 className={styles.fixedTxt}>
            <span className="playfair italic">The</span> Showcase
          </h2>

          {/* Scrollable Image Gallery */}
          {project.project_images && project.project_images.length > 0 && (
            <div className={styles.image_gallery}>
              {project.project_images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`${project.heading} - Image ${index + 1}`}
                  className={styles.projectImage}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
