import React from "react";
import "./Gallery.css";
import { motion } from "framer-motion";
import { default as first } from "../../assets/images/1.jpg";
import { default as two } from "../../assets/images/2.jpg";
import { default as three } from "../../assets/images/3.jpg";
import { default as four } from "../../assets/images/portfolio-4.jpg";
import { default as five } from "../../assets/images/portfolio-5.jpg";
import { default as six } from "../../assets/images/portfolio-6.jpg";
const Gallery = () => {
  return (
    <div className="containerGallery">
      <h1 className="galleryTitle">Some of our project</h1>
      <div className="block"></div>
      <div className="gallery">
        <motion.div
          className="card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          <div className="imgBox">
            <img src={first} alt="project One" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Shree Kutir </h3>
            <p>The project will consist of 5 floor residential tower</p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Shree Kutir</h3>
              <p>
              With its prime location bridging the gap between tradition and modernity, 
              Shree Kutir serves as a vibrant hub where people from all walks of life come together to celebrate the beauty of diversity. 
              It's more than just a structure,
              it's a symbol of unity, resilience, and the enduring spirit of Panvel.
              </p>
            </div>
          </div>
        </motion.div>
        {/*  */}
        <motion.div
          className="card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <div className="imgBox">
            <img src={two} alt="second project" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Elevation plan</h3>
            <p>
              An underground parking facility will be constructed to accommodate
              residents' vehicles
            </p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Elevation plan</h3>
              <p>
              The image shows front elevation plan for upcoming project.
              </p>
            </div>
          </div>
        </motion.div>
        {/*  */}
        <motion.div
          className="card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}>
          <div className="imgBox">
            <img src={three} alt="project" />
          </div>
          <div className="bottomConten">
            <h3 className="bottomTitle">Sai Narayan </h3>
            <p>
              The construction will follow eco-friendly practices, with
              energy-efficient systems
            </p>
          </div>
          <div className="contentBox">
            <div className="contentSelf">
              <h3>Sai Narayan</h3>
              <p>
              In the heart of Panvel stands Sai Narayan, a testament to timeless tradition and forward-thinking innovation. 
              With its rich history and cutting-edge design, it serves as a beacon of hope and inspiration for generations to come.
              </p>
            </div>
          </div>
        </motion.div>
        {/*  */}
        
      </div>
    </div>
  );
};

export default Gallery;
