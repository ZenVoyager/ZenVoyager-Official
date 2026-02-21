import React from "react";
import styles from "../styles/Team.module.css";

import { instagram, facebook, linkedIn, twitter } from "../assets/icons";
import team_bg from "../assets/team/team_bg.png";
import { AtSign, Twitter } from "lucide-react";

import arin_pp from "../assets/arin_profile_photo.webp"
import anuj_pp from "../assets/anuj_profile_photo.webp"
import murtuza_pp from "../assets/murtuza_profile_photo.webp"
import yash_pp from "../assets/yash_profile_photo.webp"

import LiquidChrome from './LiquidChrome';

function Team() {
  return (
    <section className={styles.team_section}>
      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LiquidChrome
    baseColor={[0.1, 0.1, 0.1]}
    speed={0.5}
    amplitude={0.2}
    interactive={true}
  />
</div> */}
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
                <img src={arin_pp} alt="" />
              </div>
            </div>
            <h4 className={styles.name}>
              <span className={`playfair italic`}>Arin</span> Bagul
            </h4>
            <div className={styles.details}>
              <span>Co-Founder</span>
              <span>Developer, Designer</span>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.social_links}>
              <li>
                <a href="https://www.instagram.com/arinbagul/" target="_blank">{instagram}</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/arin-bagul/" target="_blank">{linkedIn}</a>
              </li>
              <li>
                <a href="https://x.com/arin_bagul" target="_blank"><Twitter width={20} height={20}/></a>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.banner}>
              <img src={team_bg} alt="" className={styles.banner_img} />
              <div className={styles.profile_pic}>
                <img src={anuj_pp} alt="" />
              </div>
            </div>
            <h4 className={styles.name}>
              <span className={`playfair italic`}>Anuj</span> Rawat
            </h4>
            <div className={styles.details}>
              <span>Co-Founder</span>
              <span>Designer</span>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.social_links}>
              <li>
                <a href="https://www.instagram.com/who_anujrawat/" target="_blank">{instagram}</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anuj-rawat-204b91204/" target="_blank">{linkedIn}</a>
              </li>
              <li>
                <a href="mailto:anujrawat@zenvoyager.in"><AtSign width={20} height={20}/></a>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.banner}>
              <img src={team_bg} alt="" className={styles.banner_img} />
              <div className={styles.profile_pic}>
                <img src={murtuza_pp} alt="" />
              </div>
            </div>
            <h4 className={styles.name}>
              <span className={`playfair italic`}>Md.</span> Murtuza
            </h4>
            <div className={styles.details}>
              <span>Co-Founder</span>
              <span>Information Security</span>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.social_links}>
              <li>
                <a href="https://www.instagram.com/md_murtuza19/" target="_blank">{instagram}</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/murtuza19/" target="_blank">{linkedIn}</a>
              </li>
              <li>
                <a href="mailto:murtuza@zenvoyager.in"><AtSign width={20} height={20}/></a>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.banner}>
              <img src={team_bg} alt="" className={styles.banner_img} />
              <div className={styles.profile_pic}>
                <img src={yash_pp} alt="" />
              </div>
            </div>
            <h4 className={styles.name}>
              <span className={`playfair italic`}>Yash</span> Yadav
            </h4>
            <div className={styles.details}>
              <span>Tech Lead</span>
              <span>Developer</span>
            </div>
            <div className={styles.line}></div>
            <ul className={styles.social_links}>
              <li>
                <a href="https://www.instagram.com/mr_yash_.yadav/" target="_blank">{instagram}</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yash-yaduwanshi-210864279/" target="_blank">{linkedIn}</a>
              </li>
              <li>
                <a href="mailto:yaduwanshiyash11@gmail.com"><AtSign width={20} height={20}/></a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;
