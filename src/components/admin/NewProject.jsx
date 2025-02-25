import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/admin/NewProject.module.css";
import supabase from "../../utils/supabase";
import { categories } from "../../data/categories";

function NewProject() {
  const navigate = useNavigate();
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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

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
    setLoading(true);
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
      if (
        !heading ||
        !description ||
        !category ||
        !tags ||
        !thumbnail ||
        !projectImage
      ) {
        setMessage("Please fill all required fields and upload images.");
        setLoading(false);
        return;
      }

      // Function to upload file to Supabase storage
      const uploadFile = async (file, path) => {
        const { data, error } = await supabase.storage
          .from("projects") // Bucket name
          .upload(`${path}/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) throw error;
        return supabase.storage
          .from("projects")
          .getPublicUrl(`${path}/${file.name}`).data.publicUrl;
      };

      // Upload thumbnail and project image
      const thumbnailUrl = await uploadFile(thumbnail, "thumbnails");
      const projectImageUrl = await uploadFile(projectImage, "projectImages");
      // const thumbnailUrl = "anything";
      // const projectImageUrl = "anything";

      // Store project data in Supabase database
      // console.log(project);
      const { error } = await supabase.from("projects").insert([
        {
          heading,
          description,
          category,
          tags,
          otherCategory,
          live_link: liveLink,
          thumbnail: thumbnailUrl,
          project_image: projectImageUrl,
        },
      ]);

      if (error) throw error;

      setMessage("Project added successfully!");
      // setTimeout(() => navigate("/projects"), 2000); // Redirect after 2s
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add New Project</h2>
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
        <label htmlFor="thumbnail">Upload Thumbnail</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleFileChange}
          className={styles.file_input}
        />
        <label htmlFor="projectImage">Upload Project Image</label>
        <input
          type="file"
          name="projectImage"
          onChange={handleFileChange}
          className={styles.file_input}
        />
        <button type="submit" disabled={loading} className={styles.submit_btn}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default NewProject;
