import React from "react";
import Landing from "../components/about/Landing";
import Values from "../components/about/Values";
import Workflow from "../components/about/Workflow";
import Studio from "../components/about/Studio";
import Gradline from "../components/Gradline"
import Footer from "../components/Footer"

function About() {
  return (
    <>
      <Landing />
      <Values />
      <Workflow />
      {/* <Studio /> */}
      <Gradline />
      <Footer />
      
    </>
  );
}

export default About;
