import React from "react";
import { useParams } from "react-router-dom";
import Landing from "../components/services/Landing";
import Subcategory from "../components/services/Subcategory";
import Gradline from "../components/Gradline";
import services from "../data/services.json";

function ServiceDetails() {
  const { id } = useParams();
  // console.log(id);
  // const service = services.services.find((service) => service.id === parseInt(id));
  const service = services.services.find((service) => service.id === id);

  return (
    <>
      <Landing service={service} />
      <Gradline />
      <Subcategory subcategories={service.subcategories} />
    </>
  );
}

export default ServiceDetails;
