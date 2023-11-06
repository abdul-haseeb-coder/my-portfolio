import React, { useState } from "react";

import ServiceSection from "./ServiceSection";
// import TestimonialSection from "./TestimonialSection";
// import TestimonialModal from "./TestimonialModal";
import Clients from "./Clients";
import Intro from "./Intro";
const About = () => {
  // const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openTestimonialModal = (testimonial) => {
  //   setSelectedTestimonial(testimonial);
  //   setIsModalOpen(true);
  // };

  // const closeTestimonialModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <Intro />
      <ServiceSection />
      {/* <TestimonialSection openModal={openTestimonialModal} /> */}
      {/* {isModalOpen && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          closeModal={closeTestimonialModal}
        />
      )} */}
      <Clients />
    </div>
  );
};

export default About;
