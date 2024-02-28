import React from 'react';
import { IoIosTrendingDown } from "react-icons/io";
import Slides from './Slides';

const Bannar = () => {
    return (
        <div className='relative'>
            <iframe className='w-screen h-[80dvh]' src="https://www.youtube.com/embed/xxNxqveseyI?controls=0&amp;rel=0&amp;playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fgaviaspreview.com&amp;widgetid=1%22%20id=%22widget2%22%20style=%22width:%201567.02px;%20height:%20881.448px;" frameborder="0" autoplay loop></iframe>

            <div className='absolute inset-0 bg-black/30'></div>

            <div className='absolute inset-0 translate-y-1/4 text-center mx-auto space-y-8'>
                <div className='space-y-4'>
                    <p className='text-lg font-medium text-amber-400'>Let’s Explore</p>
                    <h1 className='text-8xl font-bold text-white'>Learn new things daily</h1>
                    <p className='text-xl font-medium text-slate-300'>Find great courses from 680 professional teachers.</p>
                </div>
                <div className='flex gap-6 justify-center'>
                    <div className='divide-x-2 rounded-lg'>
                        <input type="" className='text-xl p-4 outline-none rounded-l-lg' />
                        <select name="" id="" className='text-xl p-4 outline-none'>
                            <option value="" selected disabled>All Categories</option>
                            <option value="">Art & Design</option>
                            <option value="">Business</option>
                            <option value="">Lifestyle</option>
                            <option value="">Marketing</option>
                            <option value="">Photography</option>
                        </select>
                        <select name="" id="" className='text-xl p-4 outline-none rounded-r-lg'>
                            <option value="" selected disabled>All Level</option>
                            <option value="">Beginner</option>
                            <option value="">Intermediate</option>
                            <option value="">Expert</option>
                        </select>
                    </div>
                    <button className='text-xl text-white bg-indigo-500 px-8 rounded-lg hover:bg-indigo-200 hover:text-slate-600'>Search</button>
                </div>
                <div className='flex flex-col items-center text-white text-3xl gap-4 mt-10'><IoIosTrendingDown className='w-16 h-16 rotate-45' />Or browse the selected categories</div>
            </div>
        </div>
    );
};

export default Bannar;