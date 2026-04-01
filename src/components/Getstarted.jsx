import React from 'react';
import user from '../assets/user.png';
import pack from '../assets/package.png';
import rocket from '../assets/rocket.png';

const Getstarted = () => {
    return (
        <div className='bg-[#F9FAFC] mt-10 py-20 md:py-28 lg:py-32 border-b border-gray-100'>
            <h3 className='text-3xl md:text-4xl lg:text-[48px] text-[#101727] font-extrabold text-center'>Get Started in 3 Steps</h3>
            <p className='text-[#627382] leading-6 text-center mt-2 md:mt-4'>Start using premium digital tools in minutes, not hours.</p>

            <div className='max-w-7xl mx-auto grid gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-10 md:grid-cols-2 lg:grid-cols-3'>
                <div className='relative flex flex-col items-center justify-center rounded-xl bg-white shadow-lg px-6 py-16 md:py-20 space-y-4 '>
                    <img src={user} alt="" />
                    <h4 className='text-xl md:text-2xl text-[#101727] font-bold text-center'>Create Account</h4>
                    <p className='text-center text-[#627382] leading-5 text-sm md:text-base'>Sign up for free in seconds. No credit card required to get started.</p>
                    <div className='absolute top-4 right-4 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-sm text-white font-bold '>01</div>
                </div> 
                <div className='relative flex flex-col items-center justify-center rounded-xl bg-white shadow-lg px-6 py-16 md:py-20 space-y-4'>
                    <img src={pack} alt="" />
                    <h4 className='text-xl md:text-2xl text-[#101727] font-bold text-center'>Choose Products</h4>
                    <p className='text-center text-[#627382] leading-5 text-sm md:text-base'>Browse our catalog and select the toolsthat fit your needs.</p>
                    <div className='absolute top-4 right-4 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-sm text-white font-bold'>02 </div>
                </div> 
                <div className='relative flex flex-col items-center justify-center rounded-xl bg-white shadow-lg px-6 py-16 md:py-20 space-y-4 '>
                    <img src={rocket} alt="" />
                    <h4 className='text-xl md:text-2xl text-[#101727] font-bold text-center'>Start Creating</h4>
                    <p className='text-center text-[#627382] leading-5 text-sm md:text-base'>Download and start using your premium tools immediately.</p>
                    <div className='absolute top-4 right-4 w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full flex items-center justify-center text-sm text-white font-bold'>03</div>
                </div> 
                
            </div>
            
        </div>
    );
};

export default Getstarted;