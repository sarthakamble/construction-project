import React, { useState } from "react";
import "./Testimonial.css";

import TestiContent from "./testimonialSlider/TestiSlider";
import TestimonialData from "../../api/TestimonialData";
const len = TestimonialData.length - 1;
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function nextSlide() {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  }
  function previousSlide() {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  }
  return (
    <section className="mainTestimonial">
      <div className="testimonial">
        <div className="testi-left">
          <h3 className="testi-title">Why invest in real estate in</h3>
          <p className="happyCustomer">Panvel</p>
          <div className="yellowLine"></div>
          <p className="testi-text">
          Panvel, a city in the Raigad district of Maharashtra, is emerging as a popular destination for real estate investment in 2024.
          </p>
        </div>
        {/* new component */}
        <TestiContent
          indexActive={activeIndex}
          slideData={TestimonialData}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
        />
      
      </div>
    </section>
  );
};

export default Testimonial;
