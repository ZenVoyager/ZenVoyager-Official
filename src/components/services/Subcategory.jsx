import React from "react";
import styles from "../../styles/services/Subcategory.module.css";

const subcategories = [
  {
    id: 1,
    number: "01.",
    title: "UI/UX Design",
    description: "Creating Visually Stunning & User-Friendly Interfaces",
    tags: [
      "Websites", "Portfolio", "E-Commerce",
      "E-Commerce", "Web Apps", "CRM System",
      "Admin Panel", "Mobile Apps", "Software"
    ],
  },
  {
    id: 2,
    number: "02.",
    title: "Web Development",
    description: "Building Robust and Scalable Web Solutions",
    tags: [
      "Full Stack Websites", "Portfolio",
      "E-Commerce", "Web Apps", "CRM System",
      "Admin Panel"
    ],
  },
  {
    id: 3,
    number: "03.",
    title: "Mobile Application Development",
    description: "Creating High-Performance Mobile Apps for Android and iOS",
    tags: ["Android Apps", "iOS Apps"],
  },
  {
    id: 4,
    number: "04.",
    title: "Software Development",
    description: "Delivering Custom Software Solutions for Your Business Needs",
    tags: ["Windows Software"],
  },
  {
    id: 5,
    number: "05.",
    title: "Projects and Academic Support",
    description: "Supporting Students and Scholars with Expert Coding Projects",
    tags: ["Projects", "Python", "C++", "AI & ML", "OpenCV", "Java", "Android"],
  },
];

function Subcategory() {
  return (
    <section className={styles.subcategory_section}>
      <div className={styles.heading_ctr}>
        <h3 className={styles.heading}>
          What we <span className="playfair italic">Provide</span>
        </h3>
      </div>

      <div className={styles.cards_ctr}>
        {subcategories.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.card_head_ctr}>
              <span>{item.number}</span>
              <span className="playfair">{item.title}</span>
            </div>
            <p className={styles.card_content}>{item.description}</p>
            <ul className={styles.jelly_tags}>
              {item.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Subcategory;