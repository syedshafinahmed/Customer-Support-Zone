import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-7xl mx-auto '>
                <div className='flex flex-col md:flex-row pl-10 md:pl-0 gap-y-8 md:gap-y-0 justify-between py-12'>
                    <div className='w-70'>
                        <h1 className='text-sm font-bold mb-2.5'>CS — Ticket System</h1>
                        <p className='text-xs text-[#A1A1AA] text-justify'>CS ticket system website is a task management platform that helps track and organize support tasks. It allows users to create tasks, update their status (e.g., pending, in progress, resolved), and keep a count of completed and ongoing tasks. This makes it easy to monitor progress, ensure accountability, and maintain an overview of support activities in a structured way.</p>
                    </div>
                    <div>
                        <h1 className='text-sm font-bold mb-2.5'>Company</h1>
                        <div className='text-xs text-[#A1A1AA]'>
                            <p>About Us</p>
                            <p className='py-1.5'>Our Mission</p>
                            <p>Contact Saled</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-sm font-bold mb-2.5'>Services</h1>
                        <div className='text-xs text-[#A1A1AA]'>
                            <p>Products & Services</p>
                            <p className='py-1.5'>Customer Stories</p>
                            <p>Download Apps</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-sm font-bold mb-2.5'>Information</h1>
                        <div className='text-xs text-[#A1A1AA]'>
                            <p>Privacy Policy</p>
                            <p className='py-1.5'>Terms & Conditions</p>
                            <p>Join Us</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-sm font-bold mb-2.5'>Social Links</h1>
                        <div className='text-xs'>
                            <p><i class="fa-brands fa-square-x-twitter"></i><span className='text-[#A1A1AA]'>  @CS — Ticket System</span></p>
                            <p className='py-1.5'><i class="fa-brands fa-linkedin"></i><span className='text-[#A1A1AA]'>  @CS — Ticket System</span></p>
                            <p><i class="fa-brands fa-square-facebook"></i><span className='text-[#A1A1AA]'>  @CS — Ticket System</span></p>
                            <p className='py-1.5'><i class="fa-solid fa-envelope"></i><span className='text-[#A1A1AA]'>  @CS — Ticket System</span></p>
                        </div>
                    </div>
                </div>
                <hr className='text-gray-500' />
                <p className='py-8 text-xs text-center'>&copy; 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>

    );
};

export default Footer;