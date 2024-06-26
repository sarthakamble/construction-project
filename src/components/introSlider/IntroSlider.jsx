import React from "react";
import "./IntroCarousel.css";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SliderData from "../../api/SliderData";
import CountUpFunc from "../count up/CountUp";
const IntroSlider = () => {
  return (
    <div>
      <Carousel
        className="mainSlider"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={5000}
        showStatus={false}
        showIndicators={false}
        stopOnHover={true}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div onClick={clickHandler} className="arrowPrev">
            <i className="fa">&#xf0d9;</i>
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div onClick={clickHandler} className="arrowNext">
            <i className="fa">&#xf0da;</i>
          </div>
        )}
      >
        {SliderData.map((slide, index) => (
          <div key={index} className="slideContent">
            <img
              className="slide-image"
              src={slide.img1}
              srcSet={`${slide.img1} 300w, ${slide.img1} 768w, ${slide.img2} 1280w`}
              alt={slide.title}
            />
            <div className="sliderIntroText">
              <h3 className="slide-title">{slide.title}</h3>
              <motion.p
                className="slide-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.1 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                  },
                }}
              >
                {slide.description}
              </motion.p>
            </div>
            {/* <div className="countUpLegend">
              <CountUpFunc />
            </div> */}
          </div>
        ))}
       
      </Carousel>
    </div>
  );
};

export default IntroSlider;
