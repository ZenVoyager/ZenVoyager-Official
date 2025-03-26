import React from "react";
import Landing from "../components/about/Landing";
import Values from "../components/about/Values";
import Workflow from "../components/about/Workflow";
import Studio from "../components/about/Studio";
import Gradline from "../components/Gradline";
import Footer from "../components/Footer";
import Extra from "../components/Extra";
import ScrollToTop from "../components/ScrollToTop";
import Team from "../components/Team";

function About() {
  return (
    <>
      <ScrollToTop />
      <Landing />
      <Values />
      <Workflow />
      <Team />
      <Extra />
      <Gradline />
      <Footer />
    </>
  );
}

export default About;
