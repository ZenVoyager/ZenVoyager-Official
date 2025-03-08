import React from "react";
import Landing from "../components/project/Landing";
import Gallary from "../components/project/Gallary";
import Extra from "../components/Extra";
import Gradline from "../components/Gradline";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Reveal from "../components/Reveal"; // Import Reveal Component

function Projects() {
  return (
    <>
      <ScrollToTop />
      <Reveal>
        <Landing />
      </Reveal>
      <Reveal>
        <Gallary />
      </Reveal>
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

export default Projects;
