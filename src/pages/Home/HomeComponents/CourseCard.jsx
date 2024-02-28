import React from 'react';
import { BsImageAlt } from "react-icons/bs";
import userImg from '../../../assets/images/Adsiz-tasarim.jpg';
import { FaRegFlag, FaRegHeart, FaStar, FaUser } from 'react-icons/fa';

const CourseCard = () => {
    return (
        <div className='rounded-2xl shadow-lg relative group'>
            <div className='p-4 bg-slate-100 rounded-t-2xl'>
                <BsImageAlt className='w-48 h-32 text-slate-200' />
            </div>
            <div className='absolute top-32 left-2'>
                <img src={userImg} alt="" className='rounded-full w-10 h-10' />
            </div>
            <div className='bg-gray-400 rounded-md p-1 absolute top-4 right-4'>
                <FaRegHeart className='text-white w-5 h-5' />
            </div>
            <div className='text-indigo-600 flex justify-between p-4'>
                <h3 className='text-sm'>Instructor</h3>
                <p className='flex items-center gap-1'><FaUser /> 0</p>
            </div>
            <div className='space-y-2 px-4'>
                <h2 className='text-lg font-medium hover:text-indigo-600'>speaking class</h2>
                <div className='flex items-center gap-1'>
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                </div>
                <h2 className='text-lg font-medium'>Free</h2>
            </div>
            <div className='border-t border-gray-400/30 text-gray-400 flex items-center gap-2 mx-4 py-4'>
                <FaRegFlag className='text-indigo-600' />
                <small>Intermediate</small>
            </div>
            <button className='hidden absolute bottom-0 group-hover:block uppercase bg-indigo-600 rounded-b-2xl w-full h-12 text-white font-semibold tracking-widest'>get enrolled</button>
        </div>
    );
};

export default CourseCard;