import React from "react";
import FooterLogo from "../assets/Footer-logo.png";
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className="bg-[#101727] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-6">
      
        <div className="flex-1 md:flex-2 mb-6 md:mb-0">
          <img src={FooterLogo} alt="Digitools Logo" className="w-40 sm:w-48 md:w-52"/>
          <p className="text-white leading-7 mt-4 text-sm sm:text-base">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

     
        <div className="flex-1 md:flex-3 flex flex-row flex-nowrap overflow-x-auto gap-4 md:gap-6 mb-6 md:mb-0">
      
          <div className="flex-1 min-w-26">
            <h4 className="text-[18px] sm:text-[20px] text-white font-medium mb-4">Product</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Features</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Pricing</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Templates</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Integrations</a></li>
            </ul>
          </div>

       
          <div className="flex-1 min-w-26">
            <h4 className="text-[18px] sm:text-[20px] text-white font-medium mb-4">Company</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">About</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Press</a></li>
            </ul>
          </div>

         
          <div className="flex-1 min-w-24.5">
            <h4 className="text-[18px] sm:text-[20px] text-white font-medium mb-4">Resources</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Documentation</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Community</a></li>
              <li className="mb-2"><a href="#" className="text-white text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
        </div>

        
        <div className="flex-1 md:flex-[1.5] mt-4 md:mt-0">
          <h4 className="text-[18px] sm:text-[20px] text-white font-medium mb-4">Social Links</h4>
          <div className="flex gap-4">
            <img src={Instagram} alt="Instagram" className="w-8 h-8"/>
            <img src={Facebook} alt="Facebook" className="w-8 h-8"/>
            <img src={Twitter} alt="Twitter" className="w-8 h-8"/>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto mt-8">
        <hr className="border-t border-gray-700"/>
      </div> 

      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-6 gap-4 sm:gap-0">
        <p className="text-[#FAFAFA] text-sm">© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6">
            <a href="#" className="text-[#FAFAFA] text-sm">Privacy Policy</a>
            <a href="#" className="text-[#FAFAFA] text-sm">Terms of Service</a>
            <a href="#" className="text-[#FAFAFA] text-sm">Cookies</a>
        </div>
      </div> 
    </div>
  );
};

export default Footer;
