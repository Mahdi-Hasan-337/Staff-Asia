import React from 'react';
import Subscribe from '../HomeComponents/Subscribe';
import Footer from '../../../shared/Footer/Footer';
import Navbar from '../../../shared/Navbar/Navbar';
import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaPinterest, FaTwitter, FaUser } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Bannar from '../HomeComponents/Bannar';
import Slides from '../HomeComponents/Slides';
import WhyUs from '../HomeComponents/WhyUs';
import Discover from '../HomeComponents/Discover';
import Courses from '../HomeComponents/Courses';
import MeetTeachers from '../HomeComponents/MeetTeachers';

const Home = () => {
    return (
        <div >
            <Bannar></Bannar>
            <Slides></Slides>
            <WhyUs></WhyUs>
            <Discover></Discover>
            <Courses></Courses>
            <MeetTeachers></MeetTeachers>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;