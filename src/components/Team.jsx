import React from "react";
import styles from "../styles/Team.module.css";

import { instagram, facebook, linkedIn } from "../assets/icons";
import team_bg from "../assets/team/team_bg.png";

function Team() {
  return (
    <section className={styles.team_section}>
      <div className={styles.heading_ctr}>
        <span className={styles.head_txt}>
          Our <span className={`playfair italic`}>Core</span> Team
        </span>
        <p className={styles.para_txt}>
          We are comprised of passionate and skilled professionals who are
          dedicated to delivering excellence. From designers to developers, each
          member brings unique expertise to the table.
        </p>
      </div>
      <div className={styles.team_ctr}>
        <div className={styles.team_ctr_scroller}>
          <div className={styles.card}>
            <div className={styles.banner}>
              <img src={team_bg} alt="" className={styles.banner_img} />
              <div className={styles.profile_pic}>
                <img src="" alt="" />
              </div>
            </div>
            <h4 className={styles.name}>
              <span className={`playfair italic`}>Arin</span> Bagul
            </h4>
            <div className={styles.details}>
              <span>Founder & CEO</span>
              <span>Developer, Designer</span>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.social_links}>
              <li>
                <a href="#">{instagram}</a>
              </li>
              <li>
                <a href="#">{linkedIn}</a>
              </li>
              <li>
                <a href="#">{facebook}</a>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.banner}>
              <img src={team_bg} alt="" className={styles.banner_img} />
              <div className={styles.profile_pic}>
                <img src="" alt="" />
              </div>
            </div>
            <h4 className={styles.name}>
              <span className={`playfair italic`}>Anuj</span> Rawat
            </h4>
            <div className={styles.details}>
              <span>Co-founder</span>
              <span>Developer, Designer</span>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.social_links}>
              <li>
                <a href="#">{instagram}</a>
              </li>
              <li>
                <a href="#">{linkedIn}</a>
              </li>
              <li>
                <a href="#">{facebook}</a>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.banner}>
              <img src={team_bg} alt="" className={styles.banner_img} />
              <div className={styles.profile_pic}>
                <img src="" alt="" />
              </div>
            </div>
            <h4 className={styles.name}>
              <span className={`playfair italic`}>Aryan</span> Patel
            </h4>
            <div className={styles.details}>
              <span>IIT Dharwad Alumni</span>
              <span>Developer</span>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.social_links}>
              <li>
                <a href="#">{instagram}</a>
              </li>
              <li>
                <a href="#">{linkedIn}</a>
              </li>
              <li>
                <a href="#">{facebook}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
