// Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import img1 from '../../assets/img9.png';
import img2 from '../../assets/img10.png';
import img3 from '../../assets/img11.png';
import img4 from '../../assets/img12.png';
import img5 from '../../assets/img13.png';
import img6 from '../../assets/img14.png';
import img7 from '../../assets/img15.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src={img1} alt="slider" className="w-full h-[300px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="slider" className="w-full h-[300px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="slider" className="w-full h-[300px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="slider" className="w-full h-[300px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="slider" className="w-full h-[300px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="slider" className="w-full h-[300px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="slider" className="w-full h-[300px] object-cover rounded-lg" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
