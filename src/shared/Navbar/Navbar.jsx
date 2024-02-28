import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaFacebookSquare, FaInstagram, FaPhoneAlt, FaPinterest, FaTwitter, FaUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import logoWhite from '../../assets/images/logo-white.png';
import logoDark from '../../assets/images/logo.png';
import { LiaSearchSolid } from "react-icons/lia";
import { BsCart3 } from 'react-icons/bs';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCircleXmark } from "react-icons/fa6";

const Navbar = () => {
    const [searchBtn, setSearchBtn] = useState(false);
    const [dropdownBtn, setDropdownBtn] = useState(false);
    const [cartBtn, setCartBtn] = useState(false);

    return (
        <div className='sticky top-0 z-10 px-1 text-slate-400 bg-[#1C1E27] '>
            <div className="navbar p-0 w-full md:w-10/12 lg:w-8/12 mx-auto">
                <div className="navbar-start">
                    <img src={logoWhite} alt="" className='h-10 w-40' />


                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-16 h-24">
                        <li className='h-full flex items-center group'>
                            <div className=''>
                                <p className='text-white/60 text-base font-medium flex items-center gap-1 h-full'><NavLink to='/' className={({ isActive }) => isActive ? "text-white" : "hover:text-white"}>Home</NavLink> <FaAngleDown className='group-hover:rotate-180' /></p>
                                <ul className="hidden absolute top-full px-4 py-6 w-64 rounded-md group-hover:flex flex-col divide-y-[1px] space-y-2 divide-slate-600/30 bg-white">
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Home 1</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Home 2</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><NavLink to='/' className={({ isActive }) => isActive ? "text-indigo-600" : "text-slate-500"}>Home 3</NavLink></li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Home 4</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Home 5</li>
                                </ul>
                            </div>
                        </li>
                        <li className='h-full flex items-center group'>
                            <div className=''>
                                <p className='text-white/60 text-base font-medium flex items-center gap-1 h-full group-hover:text-white'>Courses <FaAngleDown className='group-hover:rotate-180' /></p>
                                <ul className="hidden absolute top-full px-4 py-6 w-64 rounded-md group-hover:flex flex-col divide-y-[1px] space-y-2 divide-slate-600/30 bg-white">
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Courses Page</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Filter Top</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Filter Left</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Filter Right</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2 relative'>
                                        <p className='flex items-center justify-between'>Single Course<FaAngleDown className='group-hover:-rotate-90' /></p>
                                        <ul className="hidden absolute left-full top-0 shadow-lg px-4 py-6 w-64 rounded-md group-hover:flex flex-col divide-y-[1px] space-y-2 divide-slate-600/30 bg-white">
                                            <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Layout |</li>
                                            <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Layout ||</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='h-full flex items-center group'>
                            <div className=''>
                                <p className='text-white/60 text-base font-medium flex items-center gap-1 h-full group-hover:text-white'>Teachers <FaAngleDown className='group-hover:rotate-180' /></p>
                                <ul className="hidden absolute top-full px-4 py-6 w-64 rounded-md group-hover:flex flex-col divide-y-[1px] space-y-2 divide-slate-600/30 bg-white">
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Teacher</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Become A Teacher</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Teacher Details</li>
                                </ul>
                            </div>
                        </li>
                        <li className='h-full flex items-center group'>
                            <div className=''>
                                <p className='text-white/60 text-base font-medium flex items-center gap-1 h-full group-hover:text-white'>News<FaAngleDown className='group-hover:rotate-180' /></p>
                                <ul className="hidden absolute top-full px-4 py-6 w-64 rounded-md group-hover:flex flex-col divide-y-[1px] space-y-2 divide-slate-600/30 bg-white">
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>News |</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>News ||</li>
                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>Single</li>
                                </ul>
                            </div>
                        </li>
                        <li className='h-full flex items-center group'>
                            <div className=''>
                                <p className='text-white/60 text-base font-medium flex items-center gap-1 h-full group-hover:text-white'>Pages<FaAngleDown className='group-hover:rotate-180' /></p>
                                <ul className='hidden absolute top-full px-4 py-6 w-fit rounded-md group-hover:flex flex-col divide-y-[1px] space-y-2 divide-slate-600/30 bg-white'>
                                    <li>
                                        <ul className='grid grid-cols-3 text-slate-600'>
                                            <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>
                                                Pages |
                                                <ul>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><Link to='/about'>About</Link></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Our Team</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Our Partner</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Our Awards</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Careers</a></li>
                                                </ul>
                                            </li>
                                            <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>
                                                Pages ||
                                                <ul>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Shop Name</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Events Grid</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Events Month</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Gallery</a></li>
                                                </ul>
                                            </li>
                                            <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'>
                                                Pages |||
                                                <ul>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Portfolio Page |</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Portfolio Page ||</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>Terms & Conditions</a></li>
                                                    <li className='text-slate-500 cursor-pointer text-base font-medium hover:text-indigo-600 py-2'><a>404 Page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='h-full flex items-center'><NavLink to='/contact' className={({ isActive }) => isActive ? "text-indigo-600 text-base font-medium" : "text-white/60 text-base font-medium hover:text-white"}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <button className='lg:hidden' onClick={() => setDropdownBtn(!dropdownBtn)}><RxHamburgerMenu className='w-6 h-6 text-slate-600' /></button>
                    {dropdownBtn && <div className="dropdown lg:hidden absolute top-0 left-0">
                        <div className="overflow-y-auto h-screen menu menu-vertical p-0 marker:text-transparent w-72 flex flex-nowrap bg-white text-slate-600 ">
                            <div className='flex items-center justify-between bg-slate-200 pl-2'>
                                <img src={logoDark} alt="" className='h-6 w-fit' />
                                <button onClick={() => setDropdownBtn(!dropdownBtn)} className='bg-indigo-500 p-2 w-fit text-end'><FaRegCircleXmark className='w-6 h-6 text-white' /></button>
                            </div>
                            <ul>
                                <li><details>
                                    <summary>Home</summary>
                                    <ul>
                                        <li><a>Home 1</a></li>
                                        <li><a>Home 2</a></li>
                                        <li><a>Home 3</a></li>
                                        <li><a>Home 4</a></li>
                                        <li><a>Home 5</a></li>
                                    </ul>
                                </details></li>
                                <li><details>
                                    <summary>Courses</summary>
                                    <ul>
                                        <li><a>Courses Page</a></li>
                                        <li><a>Filter Top</a></li>
                                        <li><a>Filter Left</a></li>
                                        <li><a>Filter Right</a></li>
                                        <li>
                                            <details>
                                                <summary>Single Course</summary>
                                                <ul>
                                                    <li><a>Layout |</a></li>
                                                    <li><a>Layout ||</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details></li>
                                <li><details>
                                    <summary>Teachers</summary>
                                    <ul>
                                        <li><a>Teachers</a></li>
                                        <li><a>Become A Teacher</a></li>
                                        <li><a>Teacher Detail</a></li>
                                    </ul>
                                </details></li>
                                <li><details>
                                    <summary>Pages</summary>
                                    <ul>
                                        <li>
                                            <details>
                                                <summary>Pages |</summary>
                                                <ul>
                                                    <li><a>About</a></li>
                                                    <li><a>Our Team</a></li>
                                                    <li><a>Our Partner</a></li>
                                                    <li><a>Our Awards</a></li>
                                                    <li><a>Careers</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Pages ||</summary>
                                                <ul>
                                                    <li><a>Shop Name</a></li>
                                                    <li><a>Events Grid</a></li>
                                                    <li><a>Events Month</a></li>
                                                    <li><a>Gallery</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Pages |||</summary>
                                                <ul>
                                                    <li><a>Portfolio Page |</a></li>
                                                    <li><a>Portfolio Page ||</a></li>
                                                    <li><a>Terms & Conditions</a></li>
                                                    <li><a>404 Page</a></li>
                                                </ul>
                                            </details>
                                        </li>

                                    </ul>
                                </details></li>
                            </ul>
                        </div>
                    </div>}
                    <div className='hidden lg:flex gap-6 relative'>
                        <button onClick={() => setSearchBtn(!searchBtn)} className="hover:text-white">
                            <LiaSearchSolid className='w-6 h-6' />
                        </button>
                        {searchBtn && <div className='bg-white p-3 absolute top-12 right-8'>
                            <div className='relative'>
                                <input type="text" placeholder='Search..' className='px-3 py-2 outline-none focus:border focus:border-sky-400 placeholder:text-lg' />
                                <LiaSearchSolid className='w-6 h-6 absolute top-2 right-2' />
                            </div>
                        </div>}
                        <button onClick={() => setCartBtn(!cartBtn)} className="hover:text-white">
                            <BsCart3 className='w-6 h-6' />
                        </button>
                    </div>
                    {cartBtn && <div className='bg-white absolute top-0 right-0 h-screen w-72'>
                        <div className='flex items-center justify-between bg-slate-200'>
                            <h2 className='py-2 text-xl font-bold text-slate-800 pl-2'>YOUR CART</h2><button onClick={() => setCartBtn(!cartBtn)} className='p-2'><FaRegCircleXmark className='w-6 h-6 text-slate-700' /></button>
                        </div>
                        <p className='py-2 px-2 text-slate-500'>No Product in the cart</p>
                    </div>}
                </div>
            </div>

        </div >
    );
};

export default Navbar;