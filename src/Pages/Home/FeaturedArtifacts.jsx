import React, { use } from 'react';
import ArtifactsCard from '../Shared/ArtifactsCard';

const FeaturedArtifacts = ({ featuredArtifactsPromise }) => {

    const Artifacts = use(featuredArtifactsPromise);

    return (
        <section className="max-w-6xl mx-auto my-10">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 tracking-tight">
                    Featured Artifacts
                </h1>
                <p className="text-base md:text-lg max-w-2xl mx-auto">
                    Discover some of the most unique and treasured artifacts from our collection. Handpicked for you!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Artifacts.map(artifact => (
                        <ArtifactsCard key={artifact._id} artifact={artifact} />
                    ))
                }
            </div>
        </section>
    );
};

export default FeaturedArtifacts;