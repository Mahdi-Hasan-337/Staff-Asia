import React from 'react';
import { LuCheckCircle } from "react-icons/lu";
import whyUsImg from '../../../assets/images/whyus.jpg';

const WhyUs = () => {
    return (
        <div className='w-full md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='space-y-12'>
                <div className='space-y-2'>
                    <p className='text-indigo-600 text-lg'>Why Choose Us?</p>
                    <h1 className='text-5xl font-bold'>Benefits of Learning from Zilom</h1>
                </div>
                <div className='space-y-8'>
                    <div className='flex items-start gap-4'>
                        <div className='p-4 bg-indigo-700 rounded-full'>
                            <LuCheckCircle className='w-6 h-6 text-white' />
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-lg font-medium'>Interior Sketch</h2>
                            <p className='text-slate-500 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='p-4 bg-indigo-700 rounded-full'>
                            <LuCheckCircle className='w-6 h-6 text-white' />
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-lg font-medium'>3D Modeling</h2>
                            <p className='text-slate-500 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <div className='p-4 bg-indigo-700 rounded-full'>
                            <LuCheckCircle className='w-6 h-6 text-white' />
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-lg font-medium'>Room Measurement</h2>
                            <p className='text-slate-500 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative p-10'>
                <img src={whyUsImg} alt="" className='rounded-full z-10 w-full object-cover'/>
                <div className='rounded-full w-28 h-28 bg-amber-400 absolute top-48 -left-2 z-20'></div>
                <div className='rounded-full w-40 h-40 bg-indigo-500 absolute bottom-10 right-0 -z-10'></div>
            </div>
        </div>
    );
};

export default WhyUs;