import React from "react";
import Contactform from "../components/contact/Contactform";
import Footer from "../components/Footer";
import Gradline from "../components/Gradline";
import ScrollToTop from "../components/ScrollToTop";

function Contact() {
  return (
    <>
      <ScrollToTop />
      <Contactform />
      <Gradline />
      <Footer />
    </>
  );
}

export default Contact;
