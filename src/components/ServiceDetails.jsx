import React from 'react'
import styles from "../styles/ServiceDetails.module.css"

function ServiceDetails() {
    const props = {
        heading : "Coding & Development",
        txtContent : "At ZenVoyager, we deliver top-notch websites, mobile apps, and software solutions. Our expert team uses the latest technologies to create robust and scalable products, ensuring your digital vision comes to life with precision and innovation.",
        category : "development",
        subCategories : ["UI/UX Design","Web Development","Mobile Application Development", "Software Development","Projects and Academic Support"],
    }
    const heading = props.heading;
    const txtContent = props.txtContent;
    const category = props.category;
    const subCategories = props.subCategories;
  return (
    <div>ServiceDetails</div>
  )
}

export default ServiceDetails