import React from 'react';
import user from '../assets/user.png';
import pack from '../assets/package.png';
import rocket from '../assets/rocket.png';

const Getstarted = () => {
    return (
        <div className='bg-[#F9FAFC] mt-20 py-30'>
            <h3 className='text-[48px] text-[#101727] font-extrabold text-center mt-4'>Get Started in 3 Steps</h3>
            <p className='text-[#627382] leading-5 text-center'>Start using premium digital tools in minutes, not hours.</p>

            <div className='max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                <div className='relative flex flex-col items-center justify-center rounded-xl bg-white space-y-4 shadow-sm px-6 py-22 '>
                    <img src={user} alt="" />
                    <h4 className='text-2xl text-[#101727] font-bold'>Create Account</h4>
                    <p className='text-center text-[#627382] leading-5'>Sign up for free in seconds. No credit card required to get started.</p>
                    <div className='absolute top-5 right-5 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-[14px] text-white font-bold '>01</div>
                </div> 
                <div className='relative flex flex-col items-center justify-center rounded-xl bg-white space-y-4 shadow-sm px-6 py-22 '>
                    <img src={pack} alt="" />
                    <h4 className='text-2xl text-[#101727] font-bold'>Choose Products</h4>
                    <p className='text-center text-[#627382] leading-5'>Browse our catalog and select the toolsthat fit your needs.</p>
                    <div className='absolute top-5 right-5 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-[14px] text-white font-bold '>02 </div>
                </div> 
                <div className='relative flex flex-col items-center justify-center rounded-xl bg-white space-y-4 shadow-sm px-6 py-22 '>
                    <img src={rocket} alt="" />
                    <h4 className='text-2xl text-[#101727] font-bold'>Start Creating</h4>
                    <p className='text-center text-[#627382] leading-5'>Download and start using your premium tools immediately.</p>
                    <div className='absolute top-5 right-5 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-[14px] text-white font-bold '>03</div>
                </div> 
                
            </div>
            
        </div>
    );
};

export default Getstarted;