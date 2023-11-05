import React from "react";
import Image from "next/image";
import TestimonialModal from "./TestimonialModal";
import { Eye } from "lucide-react";

type Testimonial = {
  name: string;
  avatar: string;
  text: string;
};
type TestimonialSectionProps = {
  openModal: (testimonial: Testimonial) => void;
};

const testimonialsData: Testimonial[] = [
  {
    name: "Donald Trump",
    avatar: "/donald.jpg",
    text: "My Dear American Citizens! Haseeb was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Jessica Alba",
    avatar: "/jessica.jpg",
    text: "Haseeb was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Bill Gates",
    avatar: "/gates.jpg",
    text: "Buy Windows: Haseeb was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Cameron Ford",
    avatar: "/cameron.jpg",
    text: "Haseeb was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  openModal
}) => {
  return (
    <section className="testimonials">
      {/* <h3 className="h3 testimonials-title">Testimonials</h3> */}

      <ul className="testimonials-list has-scrollbar">
        {testimonialsData.map((testimonial, index) => (
          <li className="testimonials-item" key={index}>
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  data-testimonials-avatar
                />
              </figure>
              <h4
                className="h4 testimonials-item-title"
                data-testimonials-title
              >
                {testimonial.name}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{testimonial.text}</p>
              </div>
              <button onClick={() => openModal(testimonial)}>
                <Eye />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TestimonialSection;
