// ErrorPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      
      {/* Animated Number */}
      <motion.h1
        className="text-[120px] md:text-[160px] font-extrabold text-red-500 drop-shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      {/* Animated Text */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Floating Animation Illustration */}
      <motion.div
        className="w-48 h-48 mb-8"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486796.png"
          alt="Lost"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Button */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full text-lg font-semibold shadow-lg transition"
        >
          Go Home
        </motion.button>
      </Link>
    </div>
  );
};

export default ErrorPage;
