import React, { use } from 'react';
import ArtifactsCard from '../Shared/ArtifactsCard';
import { motion } from 'framer-motion'
import { Link } from 'react-router';
import Typewriter from 'typewriter-effect';

const FeaturedArtifacts = ({ featuredArtifactsPromise }) => {

    const Artifacts = use(featuredArtifactsPromise);

    return (
        <section className="max-w-7xl mx-auto my-10">
            <div className="text-center mb-10">
                <div className="text-4xl font-bold mb-5 text-primary">
                    <Typewriter
                        options={{
                            strings: [
                                "Uncover the stories.",
                                "Explore the legacy.",
                                "Track history.",
                                "Discover relics.",
                                "Preserving the past.",
                                "A digital journey."
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <p className="text-base md:text-lg max-w-2xl mx-auto">
                    Discover some of the most unique and treasured artifacts from our collection. Handpicked for you!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-2">
                {
                    Artifacts.slice(0, 6).map(artifact => (
                        <ArtifactsCard key={artifact._id} artifact={artifact} />
                    ))
                }
            </div>
            <div className='flex justify-center items-center my-5 md:my-10'>
                <Link to='/allArtifacts'>
                    <motion.button
                        whileHover={{ scale: 1.5 }}
                        className='font-bold text-secondary bg-base-100 border-2 shadow-2xl p-3 rounded-2xl'
                    >See All Artifacts
                    </motion.button>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedArtifacts;