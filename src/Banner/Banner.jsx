import React, { use, useState } from 'react';
import left from '../assets/vector1.png'
import right from '../assets/vector2.png'
import { toast } from 'react-toastify';

const Banner = ({ customersPromise }) => {
    const initialCustomers = use(customersPromise)
    const [customers, setCustomers] = useState(initialCustomers);
    const [inProgress, setInProgress] = useState(0);
    const [resolved, setResolved] = useState(0);
    const [selectedTicket, setSelectedTicket] = useState([])
    const [resolvedTicket, setResolvedTicket] = useState([])
    const handleStatus = (ticket) => {
        setInProgress(inProgress + 1);
        setSelectedTicket(prev => [...prev, ticket])
        toast.success("Added to task!")
    }
    const handleComplete = (ticket) => {
        setResolved(resolved + 1);
        setInProgress(inProgress - 1);
        setCustomers(prev => prev.filter(c => c.id !== ticket.id));
        setSelectedTicket(prev => prev.filter(t => t.id !== ticket.id));
        setResolvedTicket(prev => [...prev, ticket])
        toast.success("Task resolved!");
    }
    return (
        <div className='bg-gray-200'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-y-0 py-10'>
                <div class="relative flex items-center justify-center w-[400px] md:w-[620px] h-60 rounded-xl overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-b from-[#632EE3] to-[#9F62F2]"></div>
                    <img src={left} class="absolute top-0 left-0" />
                    <img src={right} class="absolute top-0 right-0" />
                    <div class="relative text-center text-white">
                        <p class="text-xl">In-Progress</p>
                        <p class="text-7xl font-bold">{inProgress}</p>
                    </div>
                </div>
                <div class="relative flex items-center justify-center w-[400px] md:w-[620px] h-60 rounded-xl overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-[#54CF68] to-[#00827A]"></div>
                    <img src={left} class="absolute top-0 left-0" />
                    <img src={right} class="absolute top-0 right-0" />
                    <div class="relative text-center text-white">
                        <p class="text-xl">Resoloved</p>
                        <p class="text-7xl font-bold">{resolved}</p>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-x-10'>
                <div className='w-full md:w-3/4'>
                    <h1 className='font-semibold text-2xl text-[#34485A] mb-8 text-center md:text-left'>Customer Tickets</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-30'>
                        {
                            customers.map(customer => <div key={customer.id} onClick={() => handleStatus(customer)} className='bg-white shadow-xl cursor-pointer mx-5 md:mx-0 p-5 rounded-xl'>
                                <div className='flex justify-between'>
                                    <h1 className='text-[#001931] font-medium text-lg'>{customer.title}</h1>
                                    <button className={`rounded-full font-medium px-3 py-1 ${customer.status === "In-Progress" ? "bg-[#F8F3B9] text-[#9C7700]" : ""} ${customer.status === "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : ""}`}> {customer.status === "Open" && "🟢 "} {customer.status === "In-Progress" && "🟡 "} {customer.status}</button>

                                </div>
                                <p className='text-justify py-2 text-[#627382] text-base'>{customer.description}</p>
                                <div className='flex justify-between text-sm'>
                                    <p className='text-[#627382]'>#{customer.id}</p>
                                    <p className={`font-semibold ${customer.priority === "High" ? "text-red-600" : ""} ${customer.priority === "Low" ? "text-[#0B5E06]" : ""} ${customer.priority === "Medium" ? "text-[#9C7700]" : ""}`}>{customer.priority}</p>
                                    <p className='text-[#627382]'>{customer.customer}</p>
                                    <p className='text-[#627382]'><i class="fa-solid fa-calendar"></i> {customer.createdAt}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

                <div className='w-full md:w-1/4 mb-10'>
                    <div>
                        <h1 className='font-semibold text-2xl text-[#34485A] mb-8 text-center md:text-left'>Task Status</h1>

                        {
                            selectedTicket.length === 0 ? (
                                <div className='bg-white mb-4 shadow-lg p-5 mx-5 md:mx-0 rounded-lg'>
                                    <h1 className='text-[#001931] mb-1 font-medium text-lg text-center'>No Task in Progress!</h1>
                                    <p className='text-sm text-center text-gray-400'>Click on a ticket to start working</p>
                                </div>) : (
                                selectedTicket.map(ticket => (
                                    <div key={ticket.id} className='bg-white mx-5 md:mx-0 mb-4 shadow-lg p-5 rounded-lg'>
                                        <h1 className='text-[#001931] mb-3 font-medium text-lg'>{ticket.title}</h1>
                                        <button onClick={() => handleComplete(ticket)} className='btn bg-[#02A53B] rounded-lg border-none text-white w-full'>Complete</button>
                                    </div>)))
                        }
                    </div>

                    <div>
                        <h1 className='font-semibold text-2xl text-[#34485A] mb-8 text-center md:text-left'>Resolved Tasks</h1>
                        {
                            resolvedTicket.map(ticket => (
                                <div className='bg-[#E0E7FF] mx-5 md:mx-0 shadow-xl flex justify-between p-3 mb-3 rounded-lg'>
                                    <h1 key={ticket.id} className='text-[#001931] mb-1 font-medium text-lg'>{ticket.title}</h1>
                                    <p className='rounded-full font-medium px-3 py-2 bg-[#B9F8CF] text-xs text-[#0B5E06]'><i class="fa-solid fa-check" style={{ color: "#0b5e06" }}></i> Completed</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;