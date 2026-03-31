import React from "react";
import FooterLogo from "../assets/Footer-logo.png";
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className="bg-[#101727] py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex-2">
          <img src={FooterLogo} alt="" />
          <p className="text-white leading-7 mt-4">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="flex-1">
            <h4 className="text-[20px] text-white font-medium mb-4">Product</h4>
            <li className="mb-2"><a href="#" className="text-white ">Features</a></li>
            <li className="mb-2"><a href="#" className="text-white">Pricing</a></li>
            <li className="mb-2"><a href="#" className="text-white">Templates</a></li>
            <li className="mb-2"><a href="#" className="text-white">Integrations</a></li>
        </div>
        <div className="flex-1">
            <h4 className="text-[20px] text-white font-medium mb-4">Company</h4>
            <li className="mb-2"><a href="#" className="text-white ">About</a></li>
            <li className="mb-2"><a href="#" className="text-white">Blog</a></li>
            <li className="mb-2"><a href="#" className="text-white">Careers</a></li>
            <li className="mb-2"><a href="#" className="text-white">Press</a></li>
        </div>
        <div className="flex-1">
            <h4 className="text-[20px] text-white font-medium mb-4">Resources</h4>
            <li className="mb-2"><a href="#" className="text-white ">Documentation</a></li>
            <li className="mb-2"><a href="#" className="text-white">Help Center</a></li>
            <li className="mb-2"><a href="#" className="text-white">Community</a></li>
            <li className="mb-2"><a href="#" className="text-white">Contact</a></li>
        </div>
        <div className="flex-1.5">
            <h4 className="text-[20px] text-white font-medium mb-4">Social Links</h4>
            <div className="flex gap-2">
                <img src={Instagram} alt="" className="w-8 h-8"/>
                <img src={Facebook} alt="" className="w-8 h-8"/>
                <img src={Twitter} alt="" className="w-8 h-8"/>
            </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <hr className="border-t border-gray-700 mt-6"/>
      </div> 
      <div className="max-w-7xl mx-auto flex  justify-between mt-6">
        <p className="text-[#FAFAFA] mb-6">© 2026 Digitools. All rights reserved.</p>
        <div className="flex  gap-6">
            <a href="" className="text-[#FAFAFA]">Privacy Policy </a>
            <a href="" className="text-[#FAFAFA]">Terms of Service </a>
            <a href="" className="text-[#FAFAFA]">Cookies </a>
        </div>
      </div> 
    </div>
    
  );
};

export default Footer;
