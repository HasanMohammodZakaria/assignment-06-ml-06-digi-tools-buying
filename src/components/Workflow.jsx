import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
      <div className="max-w-300 mx-auto">
        <h3 className="text-[40px] text-white font-extrabold text-center mt-4">
          Ready to Transform Your Workflow?
        </h3>
        <p className="text-white leading-7 text-center mb-6">
          Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 mb-6">
          <button className="bg-white text-[16px] font-semibold text-white px-5 py-3 rounded-full">
             <span className="text-[16px] font-semibold whitespace-nowrap bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
             Explore Products
            </span>
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-white">
            <span className="text-[16px] text-white font-semibold ">
              View Pricing
            </span>
          </button>
        </div>
        <p className="text-white leading-5 text-center mb-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;
