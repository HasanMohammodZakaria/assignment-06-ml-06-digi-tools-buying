import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20 py-15'>
            <div className="max-w-300 mx-auto grid grid-cols-3">
                <div className="text-center border-r border-gray-200">
                    <h2 className="text-6xl text-white font-extrabold">50K+</h2>
                    <p className="text-6 font-medium text-white mt-5">Active Users</p>
                </div>
                <div className="text-center border-r border-gray-200">
                    <h2 className="text-6xl text-white font-extrabold">200+</h2>
                    <p className="text-6 font-medium text-white mt-5">Premium Tools</p>
                </div>
                <div className="text-center">
                    <h2 className="text-6xl text-white font-extrabold">4.9</h2>
                    <p className="text-6 font-medium text-white mt-5">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;