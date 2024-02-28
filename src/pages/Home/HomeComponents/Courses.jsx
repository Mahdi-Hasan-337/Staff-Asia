import React from 'react';

import CourseCard from './CourseCard';

const Courses = () => {
    return (
        <div className='w-full md:w-10/12 lg:w-8/12 mx-auto my-20'>
            {/* Heading */}
            <div className='space-y-2 text-center'>
                <p className='text-indigo-600 text-lg'>Explore Courses</p>
                <h1 className='text-5xl font-bold'>Checkout New List</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20'>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
            </div>
        </div>
    );
};

export default Courses;