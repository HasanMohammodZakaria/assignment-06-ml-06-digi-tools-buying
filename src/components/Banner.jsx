import React from "react";
import Circle from "../assets/Group 5.png";
import Play from '../assets/play.png';
import Bnimg from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-15 max-w-7xl mx-auto mt-8 md:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="badge bg-[#E1E7FF] px-4 py-4 rounded-4xl  text-[16px] font-medium flex items-center gap-2 justify-center mx-auto md:mx-0">
          <img src={Circle} alt=""/>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-[60px] font-extrabold text-[#101727] leading-snug mt-4">
          Supercharge Your Digital Workflow
        </h2>
        <p className="text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-6 md:leading-7 text-[#627382] mt-4 max-w-150 mx-auto md:mx-0">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore
          Products
        </p>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">

          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white px-5 py-3 rounded-full">
            Explore Products
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-purple-500">
           <img src={Play} alt="" className="w-5 h-5 "/>
           <span className="text-[16px] font-semibold whitespace-nowrap bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Watch Demo</span>
          </button>
        
        </div>

        
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img src={Bnimg} alt="" className="w-full object-cover rounded-xl"/>
      </div>
    </div>
  );
};

export default Banner;
