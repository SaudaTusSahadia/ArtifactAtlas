import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import { Link } from 'react-router';

const ArtifactsCard = ({ artifact }) => {
  const { artifactImage, artifactName, shortDescription, likedBy } = artifact;

  return (
    <motion.div
      className="card bg-base-200 shadow-xl rounded-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
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
          <p className="flex items-center gap-1 text-red-500 hover:text-red-600 transition">
            <span className="font-medium">{likedBy.length}</span>
            <span className="text-sm">{likedBy.length === 1 ? 'Like' : 'Likes'}</span>
          </p>
          <Link to={`/artifactDetails/${artifact._id}`}>
            <button className="btn btn-sm font-semibold bg-gradient-to-r from-primary to-accent hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out rounded-lg flex items-center gap-2 transform hover:scale-105 shadow-md">
  <Eye className="w-4 h-4" />
  View Details
</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtifactsCard;
