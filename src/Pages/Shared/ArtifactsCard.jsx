import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';

const ArtifactsCard = ({ artifact }) => {
  const { artifactImage, artifactName, shortDescription } = artifact;

  return (
    <motion.div
      className="card bg-base-200 shadow-xl rounded-2xl overflow-hidden w-96"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1}}
    >
      <figure>
        <img
          src={artifactImage}
          alt={artifactName}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body  text-gray-800">
        <h2 className="card-title text-xl font-bold text-primary">{artifactName}</h2>
        <p className="text-sm text-gray-500">{shortDescription}</p>
        <div className="card-actions flex justify-between items-center mt-4">
          <button className="flex items-center gap-1 text-red-500 hover:text-red-600 transition">
            <Heart className="w-5 h-5" /> Like
          </button>
          <button className="btn btn-sm bg-primary font-semibold hover:bg-blue-700 transition rounded-lg flex items-center gap-2">
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtifactsCard;
