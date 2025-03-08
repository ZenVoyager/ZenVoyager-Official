import React from "react";
import Landing from "../components/Landing";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Extra from "../components/Extra";
import Footer from "../components/Footer";
import Gradline from "../components/Gradline";
import Reveal from "../components/Reveal"; // Import Reveal Component

function Home() {
  return (
    <>
      <Reveal>
        <Landing />
      </Reveal>
      <Reveal>
        <Clients />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      {/* <Reveal> */}
      <Projects />
      {/* </Reveal> */}
      <Reveal>
        <Testimonials />
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

export default Home;
