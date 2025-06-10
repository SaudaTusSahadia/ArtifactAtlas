import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Privacy Policy
            </h1>

            <p className="text-base text-accent mb-4 leading-relaxed">
                At <span className="text-primary font-semibold">ArtifactAtlas</span>, your privacy is extremely important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">1. Information We Collect</h2>
            <ul className="list-disc list-inside text-accent mb-4">
                <li><strong>Personal Data:</strong> Your name, email, profile photo, etc. when you sign up or contact us.</li>
                <li><strong>Usage Data:</strong> Pages visited, clicks, and other interaction data.</li>
                <li><strong>Cookies:</strong> We use cookies to store your preferences and login sessions.</li>
            </ul>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-accent mb-4">
                <li>To provide and maintain our services.</li>
                <li>To personalize your experience and show relevant content.</li>
                <li>To respond to user inquiries and support requests.</li>
                <li>To improve our platform based on user activity.</li>
            </ul>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">3. Data Security</h2>
            <p className="text-accent mb-4">
                We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">4. Third-Party Services</h2>
            <p className="text-accent mb-4">
                We may use third-party tools (like analytics or social login services) that collect data independently. Please refer to their privacy policies as well.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">5. Your Rights</h2>
            <p className="text-accent mb-4">
                You have the right to access, correct, or delete your personal data. You can also request to deactivate your account at any time.
            </p>

            <h2 className="text-xl font-semibold text-secondary mt-6 mb-2">6. Updates to This Policy</h2>
            <p className="text-accent mb-4">
                We may update our Privacy Policy from time to time. You will be notified of any significant changes.
            </p>

            <p className="text-sm text-gray-500 mt-6">
                Last updated: {new Date().toLocaleDateString()}
            </p>
        </div>
    );
};

export default PrivacyPolicy;
