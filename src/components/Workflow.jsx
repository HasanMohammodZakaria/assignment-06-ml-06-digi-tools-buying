import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 md:py-20 lg:py-28">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl lg:text-[40px] text-white font-extrabold text-center mt-4">
          Ready to Transform Your Workflow?
        </h3>
        <p className="text-white leading-6 sm:leading-7 lg:leading-8 text-center mt-4 mb-6 sm:mb-8">
          Join thousands of professionals who are already using Digitools to work smarter.<br />
          Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
          <button className="bg-white px-6 py-3 rounded-full">
            <span className="text-[16px] font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white mt-2 sm:mt-0">
            <span className="text-[16px] text-white font-semibold">
              View Pricing
            </span>
          </button>
        </div>
        <p className="text-white leading-5 sm:leading-6 text-center mb-6 sm:mb-8">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;
