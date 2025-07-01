import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";

const sampleArtifacts = [
  {
    id: 1,
    name: "Rosetta Stone",
    type: "Inscription",
    description: "A stone slab inscribed in three scripts, key to understanding Egyptian hieroglyphs.",
    image: "d4.png",
  },
  {
    id: 2,
    name: "Terracotta Army",
    type: "Sculpture",
    description: "Thousands of life-sized sculptures depicting the army of Qin Shi Huang.",
    image: "d2.png",
  },
  {
    id: 3,
    name: "Venus of Willendorf",
    type: "Statue",
    description: "A small Paleolithic figurine symbolizing fertility and beauty.",
    image: "d6.png",
  },
  {
    id: 4,
    name: "Mayan Calendar Stone",
    type: "Monument",
    description: "A symbolic carving reflecting Mayan knowledge of astronomy and time.",
    image: "d3.png",
  },
  {
    id: 5,
    name: "Bust of Nefertiti",
    type: "Sculpture",
    description: "One of the most iconic representations of ancient Egyptian beauty.",
    image: "d5.png",
  },
  {
    id: 6,
    name: "Incan Sun Mask",
    type: "Mask",
    description: "A ceremonial gold mask symbolizing divine protection.",
    image: "d1.png",
  },
];

const Discover = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen md:mb-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-3">
          <FiSearch className="text-primary w-7 h-7 md:w-9 md:h-9" />
          Discover Rare Artifacts
        </h2>
        <div className="h-1 w-20 md:w-32 bg-primary/50 rounded-full mx-auto mt-2" />
        <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
          Explore handpicked historical treasures and legendary artifacts from across the globe.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sampleArtifacts.map((artifact, index) => (
          <motion.div
            key={artifact.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-base-200 border border-gray-200 dark:border-base-300 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">{artifact.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <MdOutlineCategory className="text-primary" />
                {artifact.type}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                {artifact.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
