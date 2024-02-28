import React from 'react';
import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaPinterest, FaTwitter, FaUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className="hidden lg:block  px-1 py-2 text-slate-400 bg-[#1C1E27]">
            <div className='flex items-center justify-between w-full md:w-10/12 lg:w-8/12 mx-auto'>
                <div className="flex items-center gap-6 text-white">
                    <div className='flex items-center gap-4'>
                        <FaPhoneAlt className='w-4 h-4' />
                        <p className=''>888 666 222</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <MdOutlineEmail className='w-4 h-4' />
                        <p className=''>contact@example.com</p>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-1'>
                        <FaUser className='text-white' />
                        <p><Link to={''} className='text-slate-500 text-sm hover:text-violet-700'>Sign in</Link> / <Link to={''} className='text-sm hover:text-amber-400'>Register</Link></p>
                    </div>
                    <div className='w-[1px] bg-slate-400/30'></div>
                    <div className="flex items-center gap-4">
                        <Link to={''} className='hover:text-amber-400'><FaTwitter className='w-4 h-4' /></Link>
                        <Link to={''} className='hover:text-amber-400'><FaFacebookSquare className='w-4 h-4' /></Link>
                        <Link to={''} className='hover:text-amber-400'><FaPinterest className='w-4 h-4' /></Link>
                        <Link to={''} className='hover:text-amber-400'><FaInstagram className='w-4 h-4' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;