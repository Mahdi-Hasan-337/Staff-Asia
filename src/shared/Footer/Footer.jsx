import React from 'react';
import { BsEnvelopePaper } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineWatchLater } from "react-icons/md";
import featurePost1 from '../../assets/images/post-1.jpg';
import featurePost2 from '../../assets/images/post-2.jpg';
import logoWhite from '../../assets/images/logo-white.png';
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="py-2 md:py-10 bg-[#1C1E27] text-white">
                <div className='w-full md:w-10/12 lg:w-8/12 mx-auto'>
                    <div className='py-8 md:pb-10 flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between border-b border-slate-400/30 space-y-4'>
                        <img src={logoWhite} alt="" className='h-10' />
                        <p className='text-lg md:text-xl text-slate-400'>Start learning from our experts and enhance your skills</p>
                        <button className='py-4 px-7 text-black text-xs md:text-base font-bold tracking-widest bg-white hover:bg-slate-200 rounded-xl'>READ MORE</button>
                    </div>
                    <div className='py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-8'>
                        <nav className='mr-8'>
                            <h6 className="text-white text-lg font-bold">Contact</h6>
                            <div className='divide-y-[1px] divide-slate-400/30 space-y-4'>
                                <div className='flex items-center gap-4 py-3'>
                                    <FiPhoneCall className='w-8 h-8 text-amber-300' />
                                    <div className='text-white'>
                                        <p className='text-slate-400'>Call Anytime</p>
                                        <p className='text-medium'>666 888 0000</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 py-3'>
                                    <BsEnvelopePaper className='w-8 h-8 text-amber-300' />
                                    <div className='text-white'>
                                        <p className='text-slate-400'>Send Email</p>
                                        <p className='text-medium'>contact@example.com</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 py-3'>
                                    <HiOutlineBuildingOffice2 className='w-8 h-8 text-amber-300' />
                                    <div className='text-white'>
                                        <p className='text-slate-400'>Visit Office</p>
                                        <p className='text-medium'>80 Broklyn Street</p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <nav className='space-y-3'>
                            <h6 className="text-white text-lg font-bold">Links</h6>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white"><Link to='/about'>About</Link></p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">Overview</p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">Features</p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">Join Us</p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">Our News</p>
                        </nav>
                        <nav className='space-y-3'>
                            <h6 className="text-white text-lg font-bold">Courses</h6>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">UI/UX Design</p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">WordPress Development</p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">Business Strategy</p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">Software Development</p>
                            <p className="cursor-pointer text-slate-400 text-base hover:text-white">Business English</p>
                        </nav>
                        <nav>
                            <h6 className="text-white text-lg font-bold">Featured Posts</h6>
                            <div className='flex items-start gap-4 py-3'>
                                <img src={featurePost1} alt="" className='w-20 h-20 object-cover rounded-lg' />
                                <div className='text-white space-y-2'>
                                    <p className='text-slate-400 flex items-center gap-2'><MdOutlineWatchLater className='w-4 h-4 text-amber-300' />8 Dec, 2020</p>
                                    <p className='text-lg font-bold hover:underline'>SQL Certifications for Your Data Career</p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4 py-3'>
                                <img src={featurePost2} alt="" className='w-20 h-20 object-cover rounded-lg' />
                                <div className='text-white space-y-2'>
                                    <p className='text-slate-400 flex items-center gap-2'><MdOutlineWatchLater className='w-4 h-4 text-amber-300' />8 Dec, 2020</p>
                                    <p className='text-lg font-bold hover:underline'>Entry Level Networking Certification</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </footer>
            <footer className="p-4 text-slate-400 bg-[#1C1E27] py-8">
                <div className='w-full md:w-10/12 lg:w-8/12 mx-auto flex items-center justify-between'>
                    <aside className="items-center grid-flow-col">
                        <p>Copyright © 2024 - All right reserved</p>
                    </aside>
                    <nav className="flex items-center gap-8">
                        <Link to={''} className='hover:text-amber-400'><FaTwitter className='w-6 h-6' /></Link>
                        <Link to={''} className='hover:text-amber-400'><FaFacebookSquare className='w-6 h-6' /></Link>
                        <Link to={''} className='hover:text-amber-400'><FaPinterest className='w-6 h-6' /></Link>
                        <Link to={''} className='hover:text-amber-400'><FaInstagram className='w-6 h-6' /></Link>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;