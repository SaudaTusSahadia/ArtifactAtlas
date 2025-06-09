import React from 'react';
import { useLoaderData } from 'react-router';
import { motion } from 'framer-motion';
import { Heart, MapPin, CalendarClock, UserSearch } from 'lucide-react';

const ArtifactDetails = () => {
    const {
        artifactName,
        artifactImage,
        artifactType,
        historicalContext,
        shortDescription,
        createdAt,
        discoveredAt,
        discoveredBy,
        presentLocation
    } = useLoaderData();

    return (
        <motion.div
            className="min-h-screen bg-base-200 p-6 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <title>Artifact Details | ArtifactAtlas</title>
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ delay: 0.5}}
                >
                    <img
                        src={artifactImage}
                        alt={artifactName}
                        className="max-w-md w-full rounded-2xl shadow-2xl border-2 border-base-300"
                    />
                </motion.div>
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-primary">
                        {artifactName}
                    </h1>
                    <h2 className="text-xl font-semibold text-secondary">
                        Type: {artifactType}
                    </h2>
                    <p className="text-gray-500">{historicalContext}</p>
                    <motion.p 
                    animate={
                            {
                                color: ['#ff5733', '#fffc33', '#6eff33', '#33ffdd', '#3358ff', '#ff33ff', '#ff333f', '#ff8c33', '#33ff8c', '#8c33ff'],
                                transition: { duration: 6, repeat: Infinity }
                            }
                        }
                    className="text-gray-600 italic">{shortDescription}</motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-2">
                            <CalendarClock className="w-5 h-5 text-blue-600" />
                            <span>Created At: {createdAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarClock className="w-5 h-5 text-green-600" />
                            <span>Discovered At: {discoveredAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <UserSearch className="w-5 h-5 text-orange-600" />
                            <span>Discovered By: {discoveredBy}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-purple-600" />
                            <span>Location: {presentLocation}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <motion.button 
                        className="btn btn-outline btn-primary flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        >
                            <Heart className="w-4 h-4" /> Like
                        </motion.button>
                        <button className="btn btn-secondary">Total Likes</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ArtifactDetails;
