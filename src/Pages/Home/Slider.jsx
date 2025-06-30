// Slider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import img1 from '../../assets/slide1.jpeg';
import img2 from '../../assets/slide2.jpeg';
import img3 from '../../assets/slide3.jpeg';
import img4 from '../../assets/slide4.jpeg';
import img5 from '../../assets/slide5.png';
import img6 from '../../assets/slide6.png';
import img7 from '../../assets/slide7.png';
import img8 from '../../assets/slide8.png';
import img9 from '../../assets/slide9.png';
import img10 from '../../assets/slide10.png';
import img11 from '../../assets/slide11.png';
import img12 from '../../assets/slide12.png';

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
                <SwiperSlide><img src={img1} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img10} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img11} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
                <SwiperSlide><img src={img12} alt="slider" className="w-full h-[450px] object-cover rounded-lg" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
