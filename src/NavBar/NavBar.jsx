import React from 'react';

const NavBar = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between py-5'>
                <h1 className='font-black text-3xl mb-5 md:mb-0 text-[#130B2D]'>CS — Ticket System</h1>
                <div className='flex flex-col md:flex-row gap-y-5 md:gap-y-0 text-sm md:text-base gap-x-8 items-center cursor-pointer'>
                    <p>Home</p>
                    <p>FAQ</p>
                    <p>Changelog</p>
                    <p>Blog</p>
                    <p>Download</p>
                    <p>Contact</p>
                    <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white'>+ New Ticket</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;