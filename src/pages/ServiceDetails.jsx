import React from "react";
import { useParams } from "react-router-dom";
import Landing from "../components/services/Landing";
import Subcategory from "../components/services/Subcategory";

const services = [
  {
    id: "code",
    heading: "Coding & Development",
    body: "lorem ipsum",
  },
  {
    id: "editing",
    heading: "Video Editing",
    body: "lorem ipsum",
  },
  {
    id: "graphic",
    heading: "Graphic Designing",
    body: "lorem ipsum",
  },
];

function ServiceDetails() {
  const { id } = useParams();
  console.log(id);
  const service = services.find((service) => service.id === parseInt(id));

  return (
    <>
      <Landing />
      <Subcategory />
    </>
  );
}

export default ServiceDetails;
