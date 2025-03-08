import React from "react";
import Landing from "../components/about/Landing";
import Values from "../components/about/Values";
import Workflow from "../components/about/Workflow";
import Studio from "../components/about/Studio";
import Gradline from "../components/Gradline";
import Footer from "../components/Footer";
import Extra from "../components/Extra";
import ScrollToTop from "../components/ScrollToTop";
import Reveal from "../components/Reveal"; // Import Reveal Component

function About() {
  return (
    <>
      <ScrollToTop />
      <Reveal>
        <Landing />
      </Reveal>
      <Reveal>
        <Values />
      </Reveal>
      <Reveal>
        <Workflow />
      </Reveal>
      {/* <Reveal>
        <Studio />
      </Reveal> */}
      <Reveal>
        <Extra />
      </Reveal>
      <Reveal>
        <Gradline />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}

export default About;
