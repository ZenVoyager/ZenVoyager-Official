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
    project_date: "", // New date field
    thumbnail: null,
    projectImages: [], // Changed to array for multiple images
    sections: [], // New field for additional sections
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
    if (e.target.name === 'projectImages') {
      // For multiple project images
      setProject(prev => ({
        ...prev,
        projectImages: [...prev.projectImages, ...e.target.files]
      }));
    } else {
      // For single file inputs
      setProject({ ...project, [e.target.name]: e.target.files[0] });
    }
  };

  const removeProjectImage = (indexToRemove) => {
    setProject(prev => ({
      ...prev,
      projectImages: prev.projectImages.filter((_, index) => index !== indexToRemove)
    }));
  };

  const addSection = () => {
    setProject(prev => ({
      ...prev,
      sections: [...prev.sections, { heading: "", content: "" }]
    }));
  };

  const updateSection = (index, field, value) => {
    const updatedSections = [...project.sections];
    updatedSections[index][field] = value;
    setProject(prev => ({
      ...prev,
      sections: updatedSections
    }));
  };

  const removeSection = (indexToRemove) => {
    setProject(prev => ({
      ...prev,
      sections: prev.sections.filter((_, index) => index !== indexToRemove)
    }));
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
        project_date,
        thumbnail,
        projectImages,
        sections
      } = project;

      // Ensure required fields are filled
      if (
        !heading ||
        !description ||
        !category ||
        !tags.length ||
        !thumbnail ||
        !projectImages.length
      ) {
        setMessage("Please fill all required fields and upload images.");
        setLoading(false);
        return;
      }

      // Function to upload file to Supabase storage
      const uploadFile = async (file, path) => {
        const { data, error } = await supabase.storage
          .from("projects")
          .upload(`${path}/${file.name}`, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) throw error;
        return supabase.storage
          .from("projects")
          .getPublicUrl(`${path}/${file.name}`).data.publicUrl;
      };

      // Upload thumbnail and project images
      const thumbnailUrl = await uploadFile(thumbnail, "thumbnails");
      const projectImageUrls = await Promise.all(
        projectImages.map(img => uploadFile(img, "projectImages"))
      );

      // Store project data in Supabase database
      const { error } = await supabase.from("projects").insert([
        {
          heading,
          description,
          category,
          tags,
          otherCategory,
          live_link: liveLink,
          project_date,
          thumbnail: thumbnailUrl,
          project_images: projectImageUrls,
          sections: sections
        },
      ]);

      if (error) throw error;

      setMessage("Project added successfully!");
      setTimeout(() => navigate("/admin/dashboard/projects"), 2000); // Redirect after 2s
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
        
        {/* New Date Input */}
        <label htmlFor="project_date">Project Date</label>
        <input
          type="date"
          name="project_date"
          value={project.project_date}
          onChange={handleChange}
          className={styles.input}
        />

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
        
        {/* Thumbnail Upload */}
        <label htmlFor="thumbnail">Upload Thumbnail</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleFileChange}
          className={styles.file_input}
        />

        {/* Multiple Project Images Upload */}
        <label htmlFor="projectImages">Upload Project Images</label>
        <input
          type="file"
          name="projectImages"
          multiple
          onChange={handleFileChange}
          className={styles.file_input}
        />
        {project.projectImages.length > 0 && (
          <div className={styles.image_preview_container}>
            {project.projectImages.map((img, index) => (
              <div key={index} className={styles.image_preview}>
                <span>{img.name}</span>
                <button 
                  type="button" 
                  onClick={() => removeProjectImage(index)}
                  className={styles.remove_btn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Sections Management */}
        <div className={styles.sections_container}>
          <h3>Project Sections</h3>
          {project.sections.map((section, index) => (
            <div key={index} className={styles.section_item}>
              <input
                type="text"
                placeholder="Section Heading"
                value={section.heading}
                onChange={(e) => updateSection(index, 'heading', e.target.value)}
                className={styles.input}
              />
              <textarea
                placeholder="Section Content"
                value={section.content}
                onChange={(e) => updateSection(index, 'content', e.target.value)}
                className={styles.textarea}
              ></textarea>
              <button 
                type="button" 
                onClick={() => removeSection(index)}
                className={styles.remove_btn}
              >
                Remove Section
              </button>
            </div>
          ))}
          <button 
            type="button" 
            onClick={addSection}
            className={styles.add_section_btn}
          >
            Add More Section
          </button>
        </div>

        <button type="submit" disabled={loading} className={styles.submit_btn}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default NewProject;