import React, { Suspense } from 'react';
import Slider from './Slider';
import Extrasection1 from './Extrasection1';
import Extrasection2 from './Extrasection2';
import { ToastContainer } from 'react-toastify';
import FeaturedArtifacts from './FeaturedArtifacts';
import Loading from '../Shared/Loading';

const Home = () => {

    const featuredArtifactsPromise = fetch('https://assignment11-server-one-gules.vercel.app/artifacts').then(res => res.json());

    return (
        <div>
            <title>Home | ArtifactAtlas</title>
            <Slider></Slider>
            <div className='max-w-8xl mx-auto'>
                <Extrasection1></Extrasection1>
                <Suspense fallback={<Loading></Loading>}>
                    <FeaturedArtifacts featuredArtifactsPromise={featuredArtifactsPromise}></FeaturedArtifacts>
                </Suspense>
                <Extrasection2></Extrasection2>
            </div>
        </div>
    );
};

export default Home;