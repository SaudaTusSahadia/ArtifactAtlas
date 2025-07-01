import React, { Suspense } from 'react';
import Slider from './Slider';
import Extrasection1 from './Extrasection1';
import Extrasection2 from './Extrasection2';
import { ToastContainer } from 'react-toastify';
import FeaturedArtifacts from './FeaturedArtifacts';
import Loading from '../Shared/Loading';
import HistorySection from './HistorySection';
import GallerySection from './GallerySection';

const Home = () => {

    const featuredArtifactsPromise = fetch('https://assignment11-server-one-gules.vercel.app/homeArtifacts').then(res => res.json());

    return (
        <div>
            <Slider></Slider>
            <div className='max-w-8xl mx-auto'>
                <HistorySection></HistorySection>
                <Suspense fallback={<Loading></Loading>}>
                    <FeaturedArtifacts featuredArtifactsPromise={featuredArtifactsPromise}></FeaturedArtifacts>
                </Suspense>
                <Extrasection1></Extrasection1>
                <Extrasection2></Extrasection2>
                <GallerySection></GallerySection>
            </div>
        </div>
    );
};

export default Home;