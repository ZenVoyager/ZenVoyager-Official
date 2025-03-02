import React, { useState } from "react";
import { db } from "../../Firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import styles from "../../styles/contact/Contactform.module.css";
import contact_vid from "../../assets/contact/mov_one.mp4"

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (interest) => {
    setFormData({ ...formData, interest });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
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

      setFormData({ name: "", phone: "", email: "", message: "", interest: "Design" });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setLoading(false);
  };

  return (
    <section className={styles.contact_form_section}>
      <div className={styles.c1}>
        <div className={styles.img_ctr}>
          {/* <img src={contact_img} alt="" /> */}
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
              placeholder="+91 ----- -----"
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
              placeholder="I’m here to say hello..."
            />
          </div>
          <button type="submit" className={`${styles.btn_p}`} disabled={loading}>
            {loading ? "Sending..." : "Let's Discuss"}
          </button>
          {success && <p className={styles.floatingMessage}>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}

export default Contactform;
