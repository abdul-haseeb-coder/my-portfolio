import React from "react";
import Image from "next/image";
import { XCircle } from "lucide-react";

type Testimonial = {
  name: string;
  avatar: string;
  text: string;
};

type TestimonialModalProps = {
  testimonial: Testimonial;
  closeModal: () => void;
};

const TestimonialModal: React.FC<TestimonialModalProps> = ({
  testimonial,
  closeModal,
}) => {
  if (!testimonial) {
    // Handle the case when testimonial is null or undefined
    return null; // You can return null or any other UI element
  }
  return (
    <div className="modal-container" data-modal-container>
      <div className="overlay" data-overlay></div>
      <section className="testimonials-modal">
        <button
          className="modal-close-btn"
          data-modal-close-btn
          onClick={closeModal}
        >
          <XCircle />
        </button>
        <div className="modal-Image-wrapper">
          <figure className="modal-avatar-box">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={80}
              height={80}
              data-modal-Image
            />
          </figure>
          <Image
            src="/icon-quote.svg"
            width={100}
            height={100}
            alt="quote icon"
          />
        </div>
        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>
            {testimonial.name}
          </h4>
          <div data-modal-text>
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialModal;
