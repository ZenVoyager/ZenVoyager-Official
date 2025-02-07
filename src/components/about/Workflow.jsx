import React from "react";
import styles from "../../styles/about/Workflow.module.css";

import step_one from "../../assets/workflow/one.png";
import step_two from "../../assets/workflow/two.png";
import step_three from "../../assets/workflow/three.png";
import step_four from "../../assets/workflow/four.png";
import step_five from "../../assets/workflow/five.png";
import step_six from "../../assets/workflow/six.png";

function Workflow() {
  return (
    <section className={styles.workflow_section}>
      <div className={styles.txt_content}>
        <h3 className={styles.txt}>
          <span className="playfair italic">Our Workflow</span>
          <br />
          Turning Ideas into Masterpieces
        </h3>
      </div>

      <div className={styles.workflow_ctr}>
        <div className={styles.step}>
          <img
            src={step_one}
            alt="Compass shows the exploration and discovery"
          />
          <span className={styles.jelly_tag}>Discovery</span>
          <p>
            We begin by understanding your goals, audience, and requirements.
            Through in-depth discussions and research, we gather all the
            necessary information to form a solid foundation for your project.
          </p>
        </div>
        <div className={styles.step}>
          <img src={step_two} alt="Notebook shows the planning" />
          <span className={styles.jelly_tag}>Planning</span>
          <p>
            With the gathered insights, we create a detailed project plan. This
            includes timelines, milestones, and resource allocation to ensure a
            smooth and efficient workflow.
          </p>
        </div>
        <div className={styles.step}>
          <img src={step_three} alt="Pen and stars shows designing" />
          <span className={styles.jelly_tag}>Designing</span>
          <p>
            Our team of creative experts brainstorms and develops initial design
            concepts that align with your vision. We present these ideas to you,
            ensuring we capture your brand’s essence before moving forward.
          </p>
        </div>
        <div className={styles.step}>
          <img src={step_four} alt="Terminal shows coding and development" />
          <span className={styles.jelly_tag}>Development</span>
          <p>
            Once the design is approved, our developers bring it to life. They
            focus on building a robust, scalable, and user-friendly solution
            that meets your functional requirements.
          </p>
        </div>
        <div className={styles.step}>
          <img src={step_five} alt="Speedometer shows testing process" />
          <span className={styles.jelly_tag}>Testing</span>
          <p>
            Quality is paramount. We conduct thorough testing to identify and
            fix any issues, ensuring that the final product is flawless and
            performs seamlessly across all devices and platforms.
          </p>
        </div>
        <div className={styles.step}>
          <img src={step_six} alt="Space shuttle shows launch aka deployment" />
          <span className={styles.jelly_tag}>Deploy</span>
          <p>
            After final approvals, we launch your project, making it live for
            the world to see. But our job doesn’t end there – we provide ongoing
            support and maintenance to ensure your project remains up-to-date
            and performs optimally.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
