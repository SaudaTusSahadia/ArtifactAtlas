import React from 'react';
import Slider from './Slider';
import Extrasection1 from './Extrasection1';
import Extrasection2 from './Extrasection2';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='max-w-8xl mx-auto'>
                <Extrasection1></Extrasection1>
                <Extrasection2></Extrasection2>
            </div>
        </div>
    );
};

export default Home;