import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import TopNav from '../shared/TopNav/TopNav';

const Main = () => {
    return (
        <div className=''>
            <TopNav></TopNav>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;