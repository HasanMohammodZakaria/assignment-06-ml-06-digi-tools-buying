import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20 py-15'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                <div className="text-center border-b sm:border-b-0 sm:border-r border-gray-300 pb-6 sm:pb-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white font-extrabold">50K+</h2>
                    <p className="text-sm sm:text-base lg:text-lg font-medium text-white mt-3">Active Users</p>
                </div>
                <div className="text-center border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white font-extrabold">200+</h2>
                    <p className="text-sm sm:text-base lg:text-lg font-medium text-white mt-3">Premium Tools</p>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white font-extrabold "> 4.9 </h2>
                    <p className="text-sm sm:text-base lg:text-lg font-medium text-white mt-3">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;