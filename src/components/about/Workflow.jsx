import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/about/Workflow.module.css";

import step_one from "../../assets/workflow/one.png";
import step_two from "../../assets/workflow/two.png";
import step_three from "../../assets/workflow/three.png";
import step_four from "../../assets/workflow/four.png";
import step_five from "../../assets/workflow/five.png";
import step_six from "../../assets/workflow/six.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { img: step_one, title: "Discovery", text: "We begin by understanding your goals, audience, and requirements. Through in-depth discussions and research, we gather all the necessary information to form a solid foundation for your project." },
  { img: step_two, title: "Planning", text: "With the gathered insights, we create a detailed project plan. This includes timelines, milestones, and resource allocation to ensure a smooth and efficient workflow." },
  { img: step_three, title: "Designing", text: "Our team of creative experts brainstorms and develops initial design concepts that align with your vision. We present these ideas to you, ensuring we capture your brand’s essence before moving forward." },
  { img: step_four, title: "Development", text: "Once the design is approved, our developers bring it to life. They focus on building a robust, scalable, and user-friendly solution that meets your functional requirements." },
  { img: step_five, title: "Testing", text: "Quality is paramount. We conduct thorough testing to identify and fix any issues, ensuring that the final product is flawless and performs seamlessly across all devices and platforms." },
  { img: step_six, title: "Deploy", text: "After final approvals, we launch your project, making it live for the world to see. But our job doesn’t end there – we provide ongoing support and maintenance to ensure your project remains up-to-date and performs optimally." }
];

function Workflow() {
  const workflowRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    stepRefs.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 30%",
            scrub: 1, // Smooth fade-in and fade-out
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

  return (
    <section className={styles.workflow_section} ref={workflowRef}>
      {/* Sticky Left Column */}
      <div className={styles.txt_content}>
        <h3 className={styles.txt}>
          <span className="playfair italic">Our Workflow</span>
          <br />
          Turning Ideas into Masterpieces
        </h3>
      </div>

      {/* Right Column with GSAP Animation */}
      <div className={styles.workflow_ctr}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={styles.step}
            ref={(el) => (stepRefs.current[index] = el)}
          >
            <img src={step.img} alt={step.title} />
            <span className={styles.jelly_tag}>{step.title}</span>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workflow;
