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

const slides = [
    { img: img1, text: "Ancient pottery revealing daily life in early civilizations" },
    { img: img2, text: "Intricately carved stone tablet with historic inscriptions" },
    { img: img3, text: "Golden crown from the royal dynasty era" },
    { img: img4, text: "Medieval map illustrating early trade routes" },
    { img: img5, text: "Bronze coin used in the first known marketplaces" },
    { img: img6, text: "Traditional jewelry passed through generations" },
    { img: img7, text: "Rare manuscript with ancient calligraphy" },
    { img: img8, text: "Sculpture representing cultural beliefs" },
    { img: img9, text: "Preserved armor from historical battles" },
    { img: img10, text: "Architectural fragment from an old temple" },
    { img: img11, text: "Ceremonial mask used in ancient rituals" },
    { img: img12, text: "Historic scroll depicting mythological stories" },
];

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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-[450px] rounded-lg relative flex items-center justify-center text-center text-white overflow-hidden"
                        >
                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${slide.img})`,
                                    filter: 'brightness(0.55)', 
                                }}
                            ></div>

                            {/* Floating Text */}
                            <h2 className="relative z-10 text-2xl md:text-3xl font-bold max-w-[80%] leading-snug">
                                {slide.text}
                            </h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
