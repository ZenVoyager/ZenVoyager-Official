import React from "react";
import styles from "../../styles/services/Subcategory.module.css";

function Subcategory({ subcategories }) {
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
