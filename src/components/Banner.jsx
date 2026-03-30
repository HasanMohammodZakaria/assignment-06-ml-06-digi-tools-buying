import React from "react";
import Circle from "../assets/Group 5.png";
import Play from '../assets/play.png';
import Bnimg from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8   md:gap-15 max-w-7xl mx-auto mt-20">
      <div>
        <div className="badge bg-[#E1E7FF] px-4 py-4 rounded-4xl  text-[16px] font-medium">
          <img src={Circle} alt="" />
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-[72px] font-extrabold text-[#101727] leading-snug mt-4">
          Supercharge Your
          <br /> Digital Workflow
        </h2>
        <p className="md:text-[16px] lg:text-[18px] leading-7 text-[#627382] mt-4">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>

        <div className="mt-8 flex gap-3">

          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white px-5 py-3 rounded-full">
            Explore Products
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-purple-500">
           <img src={Play} alt="" className="w-5 h-5"/>
           <span className="text-[16px] font-semibold whitespace-nowrap bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Watch Demo</span>
          </button>
        
        </div>

        
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img src={Bnimg} alt="" className="w-full h-100 md:h-125 lg:h-150 object-cover"/>
      </div>
    </div>
  );
};

export default Banner;
