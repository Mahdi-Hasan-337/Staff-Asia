import React from 'react';
import { BsFillSendFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
const Subscribe = () => {
    return (
        <section className="bg-[#4D5FE3] py-16 px-2 md:px-0 lg:py-28">

            <div className='w-full lg:w-8/12 mx-auto flex flex-col md:flex-row gap-6 lg:gap-8 items-start md:items-center'>
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl text-white font-bold leading-snug">
                        Subscribe to Our Newsletter to Get Daily Content!
                    </h2>
                </div>
                <div className="w-full lg:w-1/2 relative">
                    <form className="w-full pb-4">
                        <input type="text" className="w-full pb-4 text-white placeholder:text-white  border-b-2 border-b-white outline-none bg-transparent focus:border-b-yellow-400" placeholder="Enter your email" />
                        <button type="submit" className="absolute top-0 right-1">
                            <BsFillSendFill className='w-6 h-6 text-white hover:text-yellow-400' />
                        </button>
                    </form>
                    <div className='flex items-center gap-3'>
                        <FaRegEnvelope className='w-4 h-4 text-white' />
                        <span className="text-white">Sign up now for weekly
                            news and updates</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Subscribe;