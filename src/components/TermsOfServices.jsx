import React from 'react';

const TermsOfServices = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Terms of Service
            </h1>

            <p className="text-base mb-4">
                These Terms of Service ("Terms") govern your use of the ArtifactAtlas platform, including our website and services. By using ArtifactAtlas, you agree to these Terms.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">1. Use of Our Services</h2>
            <p className="text-base mb-4">
                You must be at least 13 years old to use our platform. You agree not to misuse our services or help anyone else do so. This includes violating any applicable laws or regulations.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">2. Account Responsibility</h2>
            <p className="text-base mb-4">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">3. Content Ownership</h2>
            <p className="text-base mb-4">
                You retain ownership of the content you post on ArtifactAtlas. However, by posting content, you grant us a non-exclusive license to use, display, and distribute your content within our platform.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">4. Prohibited Conduct</h2>
            <ul className="list-disc list-inside text-base mb-4">
                <li>Posting offensive, misleading, or illegal content</li>
                <li>Violating intellectual property rights</li>
                <li>Disrupting or harming our platform or other users</li>
            </ul>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">5. Termination</h2>
            <p className="text-base mb-4">
                We reserve the right to suspend or terminate your access to the platform if you violate these Terms or engage in harmful behavior.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">6. Changes to Terms</h2>
            <p className="text-base mb-4">
                We may update these Terms from time to time. Continued use of the platform after changes are made constitutes your acceptance of the new Terms.
            </p>

            <p className="text-sm text-gray-500 mt-6">
                Last updated: {new Date().toLocaleDateString()}
            </p>
        </div>
    );
};

export default TermsOfServices;
