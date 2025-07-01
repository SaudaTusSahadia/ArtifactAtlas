import React, { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import {motion} from 'framer-motion'

const categories = ["All", "Modern Art", "Ancient Art", "Ancient Statue", "Others"];

const categorizedImages = {
  "All": [
    "demo1.jpeg", "demo2.jpeg", "demo3.jpeg", "demo4.jpeg",
    "demo5.png", "demo6.png", "demo7.png", "demo8.png",
    "demo9.png", "demo10.png", "demo11.png", "demo12.png",
    "demo13.jpeg", "demo14.jpeg", "demo15.jpeg", "demo16.jpeg"
  ],
  "Modern Art": ["demo1.jpeg", "demo2.jpeg", "demo3.jpeg", "demo4.jpeg"],
  "Ancient Art": ["demo5.png", "demo6.png", "demo7.png", "demo8.png"],
  "Ancient Statue": ["demo9.png", "demo10.png", "demo11.png", "demo12.png"],
  "Others": ["demo13.jpeg", "demo14.jpeg", "demo15.jpeg", "demo16.jpeg"],
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-16 md:mb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <div className="relative text-center mb-8">
          <h1 className="text-7xl font-extrabold opacity-15">
            GALLERY
          </h1>
          <h2 className="absolute inset-0 top-6 text-3xl font-bold">
            Our Great <span className="text-primary">FLOWS</span>
          </h2>

          {/* Icon Divider */}
          <div className="flex justify-center items-center gap-2 text-primary mt-5">
            <div className="w-10 h-1 bg-primary rounded-full"></div>
            <FaShieldAlt className="text-2xl" />
            <div className="w-10 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Category Tabs */}
        <motion.div 
        initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1}}
        className="relative flex flex-wrap justify-center items-center gap-3 md:gap-5 font-medium text-gray-500 text-sm md:text-base mb-8">
          <div className="absolute top-7 w-full h-px bg-gray-300 z-0"></div>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`relative px-2 md:px-3 uppercase hover:text-primary transition-all duration-200 ${
                activeCategory === category ? "text-primary font-bold" : ""
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="block w-2 h-2 rounded-full bg-primary absolute -bottom-2 left-1/2 transform -translate-x-1/2"></span>
              )}
              {index !== categories.length - 1 && (
                <span className="mx-2 text-gray-300">/</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
        initial={{x:100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categorizedImages[activeCategory].map((url, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={url}
                alt={`Artifact ${i + 1}`}
                className="w-full h-64 object-cover hover:scale-130 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
