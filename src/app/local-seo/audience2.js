import React from 'react';
import { Montserrat } from 'next/font/google';
    
    const monsterfont = Montserrat({
      subsets: ['latin'],
      weight: '400',
      fallback: ['sans-serif'],
    });

const LocalBusinessSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <h1 className={`text-[36px] leading-[1.1] font-helveticaneue `}>
              Empower Your Business with <br/> Local SEO Excellence
            </h1>
            <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
              Our dedicated SEO team works relentlessly to boost your business’s growth. We maximize your visibility through
              optimized local listings and enhanced map presence, ensuring your customers find you first. Unlock insights and
              drive superior performance with the support of our in-house experts.
            </p>

            <div className="py-6">
              <div className="grid grid-cols-3 items-center gap-4">
                {/* 1/3 Section */}
                <div className="col-span-1 flex justify-center">
                  <span className={`text-[56px] leading-[1] font-[800] font-helveticaneue text-[#DD9933]`}>97%</span>
                </div>
                {/* 2/3 Section */}
                <div className="col-span-2">
                  <span className={`text-[21.6px] leading-[1.1] font-[400] font-helveticaneue text-[#DD9933]`}>
                    of people learn more about a local company online than anywhere else.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="images/local-seo-experts-1.webp"
              alt="Local SEO visualization showing map interface across devices"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBusinessSection;
