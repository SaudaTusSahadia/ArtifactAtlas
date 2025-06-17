import React from 'react';
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <span className="loading loading-spinner text-success"></span>
            {/* <Lottie animationData={loader} size={30}></Lottie> */}
        </div>
    );
};

export default Loading;
