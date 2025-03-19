import React from "react";
import styles from "../styles/Testimonials.module.css";
import { Link } from "react-router-dom";

// Import all client images
import client_hls from "../assets/testimonials/hls.jpg";
import client_batul from "../assets/testimonials/batul.jpg";
import client_kk from "../assets/testimonials/kk.jpg";
import client_sd from "../assets/testimonials/sd.jpg";
import client_mf from "../assets/testimonials/mf.jpg";
import client_eh from "../assets/testimonials/eh.jpg";
import client_fc from "../assets/testimonials/fc.jpg";

// Arrow SVG component for better reusability
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
  >
    <path
      d="M2.25 9.5H15.375"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 14.75L15.75 9.5L10.5 4.25"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Testimonial card component for cleaner code and reusability
const TestimonialCard = ({ image, name, designation, comment }) => (
  <div className={styles.card}>
    <img src={image} alt={`${name} profile`} className={styles.profile_pic} />
    <div className={styles.details}>
      <h4 className={styles.name}>{name}</h4>
      <span className={styles.designation}>{designation}</span>
    </div>
    <p className={styles.comments}>{comment}</p>
  </div>
);

// Testimonials data array for better maintainability
const testimonialData = [
  {
    id: 1,
    image: client_hls,
    name: "Rohit Rawat",
    designation: "Founder, HariLifesciences",
    comment: "ZenVoyager completely transformed our website's user experience! The design is sleek, modern, and incredibly intuitive. They understood our vision and executed it flawlessly. Highly recommended!"
  },
  {
    id: 2,
    image: client_batul,
    name: "Batul Rassiwala",
    designation: "Branding Logo",
    comment: "Working with ZenVoyager to design our logo was an amazing experience! They took the time to understand our brand's essence and delivered a logo that truly represents who we are. Their creativity and professionalism shine through in their work. Highly satisfied!"
  },
  {
    id: 3,
    image: client_kk,
    name: "Vaibhav Jain",
    designation: "Founder, Kathakala",
    comment: "ZenVoyager did an outstanding job redesigning our website. Their team provided a fresh, user-friendly experience that captures the spirit of Kathakala perfectly. The new site is modern, functional, and incredibly engaging. Highly recommend their services!"
  },
  {
    id: 4,
    image: client_sd,
    name: "Subhas Yadav",
    designation: "Founder, SundownLive",
    comment: "ZenVoyager did an incredible job designing our YouTube thumbnails and event posters! Their designs are not only visually striking but also perfectly capture the essence of our brand and events. They brought fresh, engaging ideas to the table and made our content stand out. Highly recommend their creative team!"
  },
  {
    id: 5,
    image: client_mf,
    name: "Motofiesta",
    designation: "Motorcycle Event Graphics",
    comment: "ZenVoyager played a pivotal role in designing the visuals for Motofiesta, our motorcycle event. Their graphic designs were bold, vibrant, and totally on-brand. They were true partners in making our event a visual success, and the feedback has been overwhelmingly positive!"
  },
  {
    id: 6,
    image: client_eh,
    name: "Jalaj Tiwari",
    designation: "Founder, eHawkers Marketing LLP",
    comment: "ZenVoyager has transformed our brand image with their exceptional design services. They are very Professional, reliable, and creative. Highly recommend Zen Voyager."
  },
  {
    id: 7,
    image: client_fc,
    name: "Fenton Chemicals",
    designation: "UI/UX Design",
    comment: "ZenVoyager completely transformed our website's user experience! The design is sleek, modern, and incredibly intuitive. Highly recommended!"
  }
];

function Testimonials() {
  return (
    <section className={styles.testimonials_section}>
      <div className={styles.c1}>
        <div className={styles.heading_ctr}>
          <span className={styles.head_txt}>
            What our <span className="playfair italic">Clients say</span>
          </span>
          <p className={styles.para_txt}>
            We value our clients' feedback and are proud to share their
            experiences with Zen Voyager. Join Our Happy Clients Experience the
            difference Zen Voyager can make for your business.
          </p>
          <div className={styles.btn_ctr}>
            <Link to="/contact" className={styles.btn_s}>
              Get a Quote <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.testimonial_ctr}>
        <div className={styles.animation_strip}>
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              designation={testimonial.designation}
              comment={testimonial.comment}
            />
          ))}
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              designation={testimonial.designation}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;