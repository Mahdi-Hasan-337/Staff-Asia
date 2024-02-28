import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';
import CategoryCard from './CategoryCard';


const Slides = () => {
    return (
        <div className='h-[300px] py-10 relative flex justify-center'>
            <div className='h-[300px] w-full md:w-10/12 lg:w-8/12 mx-auto absolute -top-10'>
                <Swiper
                    spaceBetween={32}
                    // centeredSlides={true}
                    slidesPerView={5}
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[Autoplay]}
                    className="mx-auto"
                >
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                    <SwiperSlide><CategoryCard></CategoryCard></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slides;