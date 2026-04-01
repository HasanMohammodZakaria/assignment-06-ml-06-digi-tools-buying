import React from "react";
import { Check } from "lucide-react";

const Pricingcard = () => {
  return (
    <div className="py-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-4">
      <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-[48px] text-[#101727] font-extrabold text-center mb-4">
        Simple, Transparent Pricing
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-[#627382] leading-5 md:leading-6 text-center mb-10">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
       
        <div className="flex flex-col justify-between bg-[#F2F2F2] shadow-md p-5 md:p-6 rounded-lg">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#101727] mb-2">Starter</h4>
            <p className="text-[#627382] mb-4">Perfect for getting started</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#101727] mb-4">
              $0<span className="text-[14px] md:text-[20px] text-[#627382]">/Month</span>
            </h2>
            <div className="space-y-2">
              {["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <Check className="text-[#30B868] mt-1" />
                  <p className="text-[#627382] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 w-full py-3 rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
            Get Started Free
          </button>
        </div>

        
        <div className="flex flex-col justify-between relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-md p-5 md:p-6 rounded-lg">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Pro</h4>
            <p className="text-white mb-4">Best for professionals</p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              $29<span className="text-[14px] md:text-[20px] text-white">/Month</span>
            </h2>
            <div className="space-y-2">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <Check className="text-white mt-1" />
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 w-full py-3 rounded-4xl bg-white">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold text-[16px]">
              Start Pro Trial
            </span>
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 px-3 py-1.5 rounded-4xl bg-[#FEF3C6] text-[#BB4D00] text-sm md:text-base">
            Most Popular
          </div>
        </div>

       
        <div className="flex flex-col justify-between bg-[#F2F2F2] shadow-md p-5 md:p-6 rounded-lg">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[#101727] mb-2">Enterprise</h4>
            <p className="text-[#627382] mb-4">For teams and businesses</p>
            <h2 className="text-2xl md:text-4xl font-bold text-[#101727] mb-4">
              $99<span className="text-[14px] md:text-[20px] text-[#627382]">/Month</span>
            </h2>
            <div className="space-y-2">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <Check className="text-[#30B868] mt-1" />
                  <p className="text-[#627382] font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 w-full py-3 rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricingcard;
