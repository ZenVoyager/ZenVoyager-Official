import React, { useState } from "react";
import { db } from "../../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import styles from "../../styles/contact/Contactform.module.css";
import contact_vid from "../../assets/contact/mov_one.mp4";

function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    interest: "Design", // Default interest
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validation functions
  const validatePhoneNumber = (phone) => {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (interest) => {
    setFormData({ ...formData, interest });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation checks
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      setLoading(false);
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number.");
      setLoading(false);
      return;
    }

    if (!validatePhoneNumber(formData.phone)) {
      alert("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

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

    if (!formData.message.trim()) {
      alert("Please enter a message.");
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "inbox"), {
        ...formData,
        timestamp: Timestamp.fromDate(new Date()),
      });
      setSuccess(true);
      // Hide the message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        interest: "Design",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while sending your message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className={styles.contact_form_section}>
      <div className={styles.c1}>
        <div className={styles.img_ctr}>
          <video autoPlay loop muted>
            <source src={contact_vid} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.c2}>
        <div className={styles.heading_txt_ctr}>
          <h2 className={styles.heading_txt}>
            <span className={`playfair italic`}>Say Hello,</span>
            <br />
            Let's Create Something Amazing Together
          </h2>
        </div>
        <form className={styles.form_ctr} onSubmit={handleSubmit}>
          <div className={`${styles.intrest_box}`}>
            <span>I'm interested in...</span>
            <ul className={styles.jelly_tags}>
              {["Design", "Development", "Editing", "Other"].map((option) => (
                <li
                  key={option}
                  className={formData.interest === option ? styles.active : ""}
                  onClick={() => handleInterestChange(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.form_input}`}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name (eg. Tony Stark)"
            />
          </div>
          <div className={`${styles.contact_info} ${styles.form_input}`}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No."
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@company.com"
            />
          </div>
          <div className={`${styles.form_input}`}>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="I'm here to say hello..."
            />
          </div>
          <button
            type="submit"
            className={`${styles.btn_p}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Let's Discuss"}
          </button>
          {success && (
            <p className={styles.floatingMessage}>Message sent successfully!</p>
          )}
        </form>
      </div>
      <div className={styles.backdrop_effect}>
        <video
          className={styles.service_video}
          src={contact_vid}
          preload="none"
          playsInline
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
}

export default Contactform;
