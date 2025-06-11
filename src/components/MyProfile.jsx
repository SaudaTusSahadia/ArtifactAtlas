import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, UserRound } from 'lucide-react';
import  animation  from '../assets/unknownUser.json'
import Lottie from 'lottie-react';

const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto p-6 mt-10 bg-base-100 shadow-xl rounded-2xl flex flex-col md:flex-row items-center gap-6"
    >
      <div className="avatar">
        <div className="w-32 rounded-3xl ring ring-primary ring-offset-base-100 ring-offset-2">
          <img
            src={user?.photoURL || 'https://i.ibb.co/2FsfXqM/default-avatar.png'}
            alt="User profile"
          />
        </div>
      </div>

      <div className="text-center md:text-left space-y-2">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-primary">
          <UserRound className="text-secondary" /> {user?.displayName || "Anonymous User"}
        </h2>
        <p className="text-gray-500 flex items-center gap-2">
          <Mail className="text-secondary" /> {user?.email || "No email provided"}
        </p>
      </div>
    </motion.div>
  );
};

export default MyProfile;
