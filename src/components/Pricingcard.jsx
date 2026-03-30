import React from "react";
import { Check } from "lucide-react";

const Pricingcard = () => {
  return (
    <div className="py-30 max-w-7xl mx-auto">
      <h3 className="text-[48px] text-[#101727] font-extrabold text-center mt-4">
        Simple, Transparent Pricing
      </h3>
      <p className="text-[#627382] leading-5 text-center mb-6">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
        <div className=" bg-[#F2F2F2] shadow-md p-6 rounded-lg">
          <h4 className="text-2xl text-[#101727] font-bold mb-3">Starter</h4>
          <p className="text-[#627382] leading-5 mb-6">
            Perfect for getting started
          </p>
          <h2 className="text-[40px] font-bold text-[#101727] mb-6">
            $0<span className="text-[20px] text-[#627382]">/Month</span>
          </h2>
          <div className="mb-21">
            <div className="flex gap-1.5 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                Access to 10 free tools
              </p>
            </div>
            <div className="flex gap-1 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                Basic templates
              </p>
            </div>
            <div className="flex gap-1 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                Community support
              </p>
            </div>
            <div className="flex gap-1 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                1 project per month
              </p>
            </div>
          </div>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white px-5 py-3 rounded-4xl w-full mt-">
            Get Started Free
          </button>
        </div>
        <div className="relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] t shadow-md p-6 rounded-lg">
          <h4 className="text-2xl text-white font-bold mb-3">Pro</h4>
          <p className="text-white leading-5 mb-6">
            Best for professionals
          </p>
          <h2 className="text-[40px] font-bold text-white mb-6">
            $29<span className="text-[20px] text-white">/Month</span>
          </h2>
          <div className="mb-6">
            <div className="flex gap-1.5 mb-1">
              <Check className="text-white" />
              <p className="text-white leading-5 font-medium">
                Access to all premium tools
              </p>
            </div>
            <div className="flex gap-1.5 mb-1">
              <Check className="text-white" />
              <p className="text-white leading-5 font-medium">
                Unlimited templates
              </p>
            </div>
            <div className="flex gap-1.5 mb-1">
              <Check className="text-white" />
              <p className="text-white leading-5 font-medium">
                Priority support
              </p>
            </div>
            <div className="flex gap-1.5 mb-1">
              <Check className="text-white" />
              <p className="text-white leading-5 font-medium">
                Unlimited projects
              </p>
            </div>
            <div className="flex gap-1.5 mb-1">
              <Check className="text-white" />
              <p className="text-white leading-5 font-medium">
                Cloud sync
              </p>
            </div>
            <div className="flex gap-1.5 mb-1">
              <Check className="text-white" />
              <p className="text-white leading-5 font-medium">
               Advanced analytics
              </p>
            </div>
            
          </div>
          <button className="bg-white text-[16px] font-semibold text-white px-5 py-3 rounded-4xl w-full mt-">
           <span className="text-[16px] font-semibold whitespace-nowrap bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Start Pro Trial</span>
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 -top-5  badge bg-[#FEF3C6] px-3 py-4 rounded-4xl text-[#BB4D00]">Most Popular</div>
          </div>
        <div className=" bg-[#F2F2F2] shadow-md p-6 rounded-lg">
          <h4 className="text-2xl text-[#101727] font-bold mb-3">Starter</h4>
          <p className="text-[#627382] leading-5 mb-6">
            Perfect for getting started
          </p>
          <h2 className="text-[40px] font-bold text-[#101727] mb-6">
            $0<span className="text-[20px] text-[#627382]">/Month</span>
          </h2>
          <div className="mb-21">
            <div className="flex gap-1.5 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                Access to 10 free tools
              </p>
            </div>
            <div className="flex gap-1 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                Basic templates
              </p>
            </div>
            <div className="flex gap-1 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                Community support
              </p>
            </div>
            <div className="flex gap-1 mb-1">
              <Check className="text-[#30B868]" />
              <p className="text-[#627382] leading-5 font-medium">
                1 project per month
              </p>
            </div>
          </div>
          <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] font-semibold text-white px-5 py-3 rounded-4xl w-full mt-">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricingcard;
