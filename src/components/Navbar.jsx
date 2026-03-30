import React from 'react';
import logo from '../assets/DigiTools.png';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="border-b border-gray-200 w-full">
            <div className="navbar bg-base-100 max-w-7xl mx-auto py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-semibold text-[#101727]">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>

                    <img className="ml-3" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px] font-semibold text-[#101727]">
                        <li><a className='hover:bg-transparent focus:bg-transparent active:bg-transparent'>Products</a></li>
                        <li><a className='hover:bg-transparent focus:bg-transparent active:bg-transparent'>Features</a></li>
                        <li><a className='hover:bg-transparent focus:bg-transparent active:bg-transparent'>Pricing</a></li>
                        <li><a className='hover:bg-transparent focus:bg-transparent active:bg-transparent'>Testimonials</a></li>
                        <li><a className='hover:bg-transparent focus:bg-transparent active:bg-transparent'>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <ShoppingCart className='text-[#101727]' />
                    <button className="text-[16px] font-semibold text-[#101727]">Login</button>
                    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white px-5 py-3 rounded-4xl'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;