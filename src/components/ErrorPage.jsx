import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import errorPage from '../assets/error.json';
import { Hammer, HomeIcon, NavigationOff } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-indigo-800 to-secondary px-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl text-center p-10 max-w-lg w-full border border-white/20">
                <div className="w-72 mx-auto mb-6">
                    <Lottie animationData={errorPage} loop={true} />
                </div>
                <h1 className="text-4xl font-extrabold text-red-500 mb-2">404 – Page Not Found</h1>
                <p className="text-gray-300 mb-6">
                    Uh-oh! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white flex gap-2 px-6 py-2 rounded-lg font-semibold shadow transition duration-300">
                            <HomeIcon/> Go Home
                        </button>
                    </Link>
                    <a href="mailto:support@example.com">
                        <button className="bg-gray-800 hover:bg-gray-700 text-white flex gap-2 px-6 py-2 rounded-lg font-semibold shadow transition duration-300">
                            <Hammer/> Report Issue
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
