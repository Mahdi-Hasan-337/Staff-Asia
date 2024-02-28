import React from 'react';
import { GiArcheryTarget } from "react-icons/gi";
const CategoryCard = () => {
    return (
        <div className='bg-white border shadow-sm rounded-xl h-[280px] flex flex-col items-center gap-8 p-6 relative group'>
            <div className='rounded-full bg-slate-200 group-hover:bg-blue-600/60 border p-4'>
                <GiArcheryTarget className='w-20 h-20 group-hover:text-white text-indigo-600' />
            </div>
            <div className='rounded-full bg-white p-2 w-10 h-10 absolute bottom-32 right-12 text-center group-hover:text-white group-hover:bg-black'>2</div>
            <div className='space-y-2 text-center'>
                <p className='text-black font-medium text-lg'>Marketing</p>
                <p className='text-slate-500 text-sm'>46 hours course time</p>
            </div>
        </div>
    );
};

export default CategoryCard;