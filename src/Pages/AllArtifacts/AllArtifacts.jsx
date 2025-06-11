import React from 'react';
import { useLoaderData } from 'react-router';
import ArtifactsCard from '../Shared/ArtifactsCard';
import Lottie from 'lottie-react';

const AllArtifacts = () => {
    const artifacts = useLoaderData();

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <title>All Artifacts | ArtifactAtlas</title>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-tight">
                        All Artifacts
                    </h1>
                    <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto">
                        Explore the complete collection of artifacts curated for you.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <span className="inline-block w-24 h-1 rounded bg-secondary"></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artifacts.map(artifact => (
                        <ArtifactsCard key={artifact._id} artifact={artifact} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllArtifacts;