import React from 'react';
import { BsImageAlt } from "react-icons/bs";
import userImg from '../../../assets/images/Adsiz-tasarim.jpg';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaRegFlag, FaRegHeart, FaStar, FaTwitter, FaUser } from 'react-icons/fa';


const TeacherCard = () => {
    return (
        <div className='rounded-2xl shadow-lg relative group border p-10 space-y-4'>
            <div className='flex justify-center'>
                <img src={userImg} alt="" className='rounded-full w-48 h-48' />
            </div>
            <div className='text-center'>
                <h2 className='text-lg font-medium hover:text-indigo-600'>TEACHER</h2>
                <h3 className='text-sm text-gray-400'>Instructor</h3>
            </div>
            <div className='space-y-2 flex items-center justify-center gap-1'>
                <div className='flex items-center gap-1'>
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                    <FaStar className='text-amber-500' />
                </div>
                <h2 className=''>5</h2>
                <small className='bg-gray-300 px-2 py-1 rounded'>2</small>
            </div>
            <div className='text-gray-400 flex items-center gap-2 mx-4 py-4 text-center'>
                <p>There are many varia of passages the free ipsum lorem.</p>
            </div>
            <div className='p-3 rounded bg-gray-200 flex justify-between text-center'>
                <span>2 Courses</span>
                <div className='flex items-center gap-1'>
                    <FaFacebookF className="text-gray-400 w-4 h-4" />
                    <FaTwitter className="text-gray-400 w-4 h-4" />
                    <FaLinkedinIn className="text-gray-400 w-4 h-4" />
                    <FaGithub className="text-gray-400 w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;