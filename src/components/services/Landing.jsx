import React, { useState } from "react";
import { db } from "../../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import styles from "../../styles/services/Landing.module.css";
import {
  code,
  graphic,
  editing,
  conference,
} from "../../assets/services/icons";

import coding_service_video from "../../assets/services/coding_video.mp4"

function Landing({ service }) {
  const [formData, setFormData] = useState({
    name: "connected through landing page",
    phone: "-",
    email: "",
    message: "-",
    interest: `${service.heading}`,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!formData.email.trim()) {
      alert("Please enter your email address.");
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "inbox"), {
        ...formData,
        timestamp: Timestamp.fromDate(new Date()),
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        interest: `${service.heading}`,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while sending your message. Please try again.");
    }
    setLoading(false);
  };

  const getIcon = (id) => {
    switch(id) {
      case "code": return code;
      case "graphic": return graphic;
      case "editing": return editing;
      case "conference": return conference;
      default: return null;
    }
  };

  const getVideo = (id) => {
    switch(id) {
      case "code": return coding_service_video;
      // Add other cases for different services if needed
      default: return null; // Default video
    }
  }

  return (
    <section className={styles.landing_section}>
      <div className={styles.c1}>
        {getIcon(service.id)}
        <h2 className={styles.heading}>{service.heading}</h2>
        <p className={styles.txt}>{service.description}</p>
        <div className={styles.search_box}>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className={styles.btn_p} disabled={loading}>
            {loading ? "Sending..." : "Let's Discuss"}
          </button>
          {success && (
            <p className={styles.floatingMessage}>Message sent successfully!</p>
          )}
        </div>
      </div>
      <div className={styles.c2}>
        <div className={styles.media_ctr}>
          <video className={styles.service_video} src={getVideo(service.id)} preload="none" playsInline autoPlay muted loop></video>
        </div>
      </div>

          {/* <div className={styles.backdrop_overlay}></div> */}
      <div className={styles.backdrop_effect}>
        <video className={styles.service_video} src={getVideo(service.id)} preload="none" playsInline autoPlay muted loop></video>
      </div>
    </section>
  );
}

export default Landing;