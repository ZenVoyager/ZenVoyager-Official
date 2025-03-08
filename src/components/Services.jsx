import React, { useEffect, useRef } from "react";
import styles from "../styles/Services.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import coding_dev from "../assets/services/coding_dev.webp";
import video_editing from "../assets/services/video_editing.webp";
import graphic_design from "../assets/services/graphic_design.webp";
import services from "../data/services.json";
import { arrow_one } from "../assets/icons";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);

  // Initialize refs array
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Set initial state for fade-in cards (opacity 0)
    gsap.set(cardsRef.current, { 
      opacity: 0, 
      y: 30, 
      scale: 0.95 
    });

    // Fade in the heading with a slight delay
    const headingEl = sectionRef.current.querySelector(`.${styles.heading_ctr}`);
    gsap.fromTo(headingEl, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Store the animation instance so we can clean it up later
    let st;
    
    const initScrollTrigger = () => {
      // Make sure elements are mounted
      if (!scrollerRef.current || !sectionRef.current) return;
      
      // Kill any existing ScrollTrigger instances to prevent duplicates
      if (st) st.kill();
      
      const scroller = scrollerRef.current;
      const container = sectionRef.current;
      
      // Calculate the total width to scroll (scrollWidth minus visible width)
      const totalWidth = scroller.scrollWidth - scroller.offsetWidth;
      
      // Only set up ScrollTrigger if there's content to scroll
      if (totalWidth <= 0) return;
      
      // Create the ScrollTrigger animation
      st = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth + 100}`, // Add some extra scroll room
        pin: true,
        anticipatePin: 1,
        scrub: 0.5, // Smooth scrubbing effect (lower = smoother)
        invalidateOnRefresh: true, // Recalculate on window resize
        onUpdate: (self) => {
          // Apply the transform directly
          gsap.set(scroller, { x: -totalWidth * self.progress });
        },
        onEnter: () => {
          // Fade in each card sequentially when section comes into view
          gsap.to(cardsRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out"
          });
        }
      });
    };
    
    // Initialize ScrollTrigger
    initScrollTrigger();
    
    // Recalculate on window resize
    const handleResize = () => {
      // Small delay to ensure accurate measurements after resize
      setTimeout(initScrollTrigger, 100);
    };
    
    window.addEventListener("resize", handleResize);
    
    // Clean up function
    return () => {
      if (st) st.kill();
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.services_section}>
      <div className={styles.heading_ctr}>
        <span className={styles.head_txt}>
          Explore our <span className={`playfair italic`}>services</span>
        </span>
        <p className={styles.para_txt}>
          From development to editing, we offer a range of services to meet your
          creative and technological needs and expectation.
        </p>
      </div>

      <div className={styles.cards_ctr}>
        <div className={styles.scroller} ref={scrollerRef}>
          <Link to={`/service/${services.services[0].id}`}>
            <div className={styles.card} ref={addToCardsRef}>
              <img src={coding_dev} alt="Coding & Development" />
            </div>
          </Link>

          <Link to={`/service/${services.services[2].id}`}>
            <div className={styles.card} ref={addToCardsRef}>
              <img src={video_editing} alt="Videography & Editing" />
            </div>
          </Link>

          <Link to={`/service/${services.services[1].id}`}>
            <div className={styles.card} ref={addToCardsRef}>
              <img src={graphic_design} alt="Graphic Designing" />
            </div>
          </Link>

          <Link to="/contact">
            <div className={`${styles.card} ${styles.cta_card}`} ref={addToCardsRef}>
              <div className={styles.card_txt}>
                <span>Want</span>
                <span className={styles.bold_txt}>ANYTHING</span>
                <span>Else</span>
              </div>
              <div className={styles.cta}>
                <span>Let's Discuss</span>
                {arrow_one}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;