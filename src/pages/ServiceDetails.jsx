import React from "react";
import { useParams } from "react-router-dom";
import Landing from "../components/services/Landing";
import Subcategory from "../components/services/Subcategory";
import Gradline from "../components/Gradline";
import services from "../data/services.json";
import ScrollToTop from "../components/ScrollToTop";
import Reveal from "../components/Reveal"; // Import Reveal Component

function ServiceDetails() {
  const { id } = useParams();
  const service = services.services.find((service) => service.id === id);

  return (
    <>
      <ScrollToTop />
      <Reveal>
        <Landing service={service} />
      </Reveal>
      <Reveal>
        <Gradline />
      </Reveal>
      <Reveal>
        <Subcategory subcategories={service.subcategories} />
      </Reveal>
    </>
  );
}

export default ServiceDetails;
