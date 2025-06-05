import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';
import img1 from '../../assets/img5.png';
import img2 from '../../assets/img6.png';

const Extrasection1 = () => {
  return (
    <motion.section
      className="w-full py-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
            <Landmark className="w-8 h-8 " />
            Preserving the Past
          </h2>
          <p className="text-lg mb-6 leading-relaxed text-accent">
            Explore rare artifacts that shaped human civilization — from ancient scrolls to timeless relics. Our collection showcases heritage preserved across centuries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            animate={
                {
                    color: ['#ff5733', '#fffc33', '#6eff33', '#33ffdd', '#3358ff', '#ff33ff', '#ff333f', '#ff8c33', '#33ff8c', '#8c33ff'],
                    transition: { duration: 6, repeat: Infinity }
                }
            }
            className="btn px-6 py-2 rounded-lg shadow-lg"
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.img
            src={img1}
            animate= {{y: [0, -50, 0]}}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            alt="Artifact 1"
            className="rounded-xl shadow-xl object-cover h-[300px] w-full"
            whileHover={{ scale: 1.03 }}
          />
          <motion.img
            src={img2}
            animate= {{x: [50, 0, 50]}}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            alt="Artifact 2"
            className="rounded-xl shadow-xl object-cover h-[300px] w-full"
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Extrasection1;
