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
    project_date: "", // New date field
    thumbnail: null,
    projectImages: [], // Changed to array for multiple images
    sections: [], // New field for additional sections
  });

  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [projectImageUrls, setProjectImageUrls] = useState([]);
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
            project_date: data.project_date || "", // New date field
            thumbnail: null,
            projectImages: [], // We don't set file objects here
            sections: data.sections || [], // Load existing sections
          });
          setThumbnailUrl(data.thumbnail);
          setProjectImageUrls(data.project_images || []);
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

  const removeExistingProjectImage = (indexToRemove) => {
    const updatedUrls = projectImageUrls.filter((_, index) => index !== indexToRemove);
    setProjectImageUrls(updatedUrls);
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
        project_date,
        thumbnail,
        projectImages,
        sections
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

      // Upload thumbnail
      let updatedThumbnailUrl = thumbnailUrl;
      if (thumbnail) {
        updatedThumbnailUrl = await uploadFile(thumbnail, "thumbnails", thumbnailUrl);
      }

      // Upload new project images and keep existing ones
      let updatedProjectImageUrls = [...projectImageUrls];
      if (projectImages.length > 0) {
        const newImageUrls = await Promise.all(
          projectImages.map(img => uploadFile(img, "projectImages", null))
        );
        updatedProjectImageUrls = [...updatedProjectImageUrls, ...newImageUrls];
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
          project_date,
          thumbnail: updatedThumbnailUrl,
          project_images: updatedProjectImageUrls,
          sections: sections
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

        {/* Existing Project Images */}
        <div className={styles.image_preview_container}>
          <label>Current Project Images:</label>
          {projectImageUrls.map((url, index) => (
            <div key={index} className={styles.image_preview}>
              <img 
                src={url} 
                alt={`Project image ${index + 1}`} 
                style={{ width: "100px", height: "auto", marginTop: "5px" }}
              />
              <button 
                type="button" 
                onClick={() => removeExistingProjectImage(index)}
                className={styles.remove_btn}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Add New Project Images */}
        <label htmlFor="projectImages">Add More Project Images</label>
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
        
        <button type="submit" disabled={submitting} className={styles.submit_btn}>
          {submitting ? "Updating..." : "Update Project"}
        </button>
      </form>
    </div>
  );
}

export default EditProject;