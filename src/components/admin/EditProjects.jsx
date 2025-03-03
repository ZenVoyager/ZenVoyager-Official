import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/admin/NewProject.module.css";
import supabase from "../../utils/supabase";
import { categories } from "../../data/categories";

function EditProject() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get project ID from URL
  const [project, setProject] = useState({
    heading: "",
    description: "",
    category: "",
    tags: [],
    otherCategory: "",
    liveLink: "",
    thumbnail: null,
    projectImage: null,
  });
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [projectImageUrl, setProjectImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  // Fetch project data on component mount
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        
        if (data) {
          setProject({
            heading: data.heading,
            description: data.description,
            category: data.category,
            tags: data.tags || [],
            otherCategory: data.otherCategory || "",
            liveLink: data.live_link || "",
            thumbnail: null, // We don't set the file objects here
            projectImage: null, // We don't set the file objects here
          });
          setThumbnailUrl(data.thumbnail);
          setProjectImageUrl(data.project_image);
        }
      } catch (error) {
        setMessage(`Error loading project: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setProject({
      ...project,
      category: e.target.value,
      tags: [],
      otherCategory: "",
    });
  };

  const handleTagChange = (tag) => {
    setProject((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleFileChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const {
        heading,
        description,
        category,
        tags,
        otherCategory,
        liveLink,
        thumbnail,
        projectImage,
      } = project;

      // Ensure required fields are filled
      if (!heading || !description || !category || tags.length === 0) {
        setMessage("Please fill all required fields.");
        setSubmitting(false);
        return;
      }

      // Function to upload file to Supabase storage
      const uploadFile = async (file, path, oldUrl) => {
        // If no new file is selected, keep the old URL
        if (!file) return oldUrl;

        // Delete old file if exists
        if (oldUrl) {
          const oldPath = oldUrl.split('/').slice(-2).join('/');
          await supabase.storage.from("projects").remove([oldPath]);
        }

        // Upload new file
        const { data, error } = await supabase.storage
          .from("projects")
          .upload(`${path}/${file.name}`, file, {
            cacheControl: "3600",
            upsert: true,
          });

        if (error) throw error;
        return supabase.storage
          .from("projects")
          .getPublicUrl(`${path}/${file.name}`).data.publicUrl;
      };

      // Upload new images if provided
      let updatedThumbnailUrl = thumbnailUrl;
      let updatedProjectImageUrl = projectImageUrl;

      if (thumbnail) {
        updatedThumbnailUrl = await uploadFile(thumbnail, "thumbnails", thumbnailUrl);
      }

      if (projectImage) {
        updatedProjectImageUrl = await uploadFile(projectImage, "projectImages", projectImageUrl);
      }

      // Update project data in Supabase database
      const { error } = await supabase
        .from("projects")
        .update({
          heading,
          description,
          category,
          tags,
          otherCategory,
          live_link: liveLink,
          thumbnail: updatedThumbnailUrl,
          project_image: updatedProjectImageUrl,
        })
        .eq("id", id);

      if (error) throw error;

      setMessage("Project updated successfully!");
      setTimeout(() => navigate("/admin/dashboard/projects"), 2000); // Redirect after 2s
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className={styles.container}>Loading project data...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Project</h2>
      {message && <p className={styles.message}>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.form_group}>
        <input
          type="text"
          name="heading"
          placeholder="Project Heading"
          value={project.heading}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={project.description}
          onChange={handleChange}
          required
          className={styles.textarea}
        ></textarea>
        <select
          name="category"
          value={project.category}
          onChange={handleCategoryChange}
          className={styles.select}
        >
          <option value="">Select Category</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>

        {project.category === "Other" && (
          <input
            type="text"
            name="otherCategory"
            placeholder="Specify Other Category"
            value={project.otherCategory}
            onChange={handleChange}
            className={styles.input}
          />
        )}

        {categories[project.category] && (
          <div className={styles.tags_container}>
            {categories[project.category].map((tag) => (
              <span
                key={tag}
                className={`${styles.tag} ${
                  project.tags.includes(tag) ? styles.active : ""
                }`}
                onClick={() => handleTagChange(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <input
          type="text"
          name="liveLink"
          placeholder="Project Link"
          value={project.liveLink}
          onChange={handleChange}
          className={styles.input}
        />
        
        <div className={styles.image_preview}>
          <label htmlFor="thumbnail">Current Thumbnail:</label>
          {thumbnailUrl && (
            <img 
              src={thumbnailUrl} 
              alt="Current thumbnail" 
              style={{ width: "100px", height: "auto", marginTop: "5px" }}
            />
          )}
        </div>
        <label htmlFor="thumbnail">Change Thumbnail (leave empty to keep current)</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleFileChange}
          className={styles.file_input}
        />
        
        <div className={styles.image_preview}>
          <label htmlFor="projectImage">Current Project Image:</label>
          {projectImageUrl && (
            <img 
              src={projectImageUrl} 
              alt="Current project image" 
              style={{ width: "200px", height: "auto", marginTop: "5px" }}
            />
          )}
        </div>
        <label htmlFor="projectImage">Change Project Image (leave empty to keep current)</label>
        <input
          type="file"
          name="projectImage"
          onChange={handleFileChange}
          className={styles.file_input}
        />
        
        <button type="submit" disabled={submitting} className={styles.submit_btn}>
          {submitting ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
}

export default EditProject;