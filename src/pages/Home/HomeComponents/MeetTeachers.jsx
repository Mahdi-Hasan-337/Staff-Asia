import React from 'react';
import TeacherCard from './TeacherCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';


const MeetTeachers = () => {
    return (
        <div className='w-full md:w-10/12 lg:w-8/12 mx-auto my-20'>
            <div className='space-y-2 text-center'>
                <p className='text-indigo-600 text-lg'>Skilled & Qualified</p>
                <h1 className='text-5xl font-bold'>Meet the Teachers</h1>
            </div>
            <div className='h-[900px] w-full py-10'>
                <Swiper
                    spaceBetween={32}
                    // centeredSlides={true}
                    slidesPerView={3}
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[Autoplay]}
                    className="mx-auto"
                >
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                    <SwiperSlide><TeacherCard/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default MeetTeachers;