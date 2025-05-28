import React from 'react';
import { Montserrat } from 'next/font/google';
        
        const monsterfont = Montserrat({
          subsets: ['latin'],
          weight: '400',
          fallback: ['sans-serif'],
        });
    


const EcommerceCodeSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <h1 className={`text-[36px] leading-[1.1] font-helveticaneue mb-[10px] `}>
              Code, content and context
            </h1>

            <p className={`text-[16px] leading-[22px] font-helveticaneue text-semi-white`}>
              At AlgorithmX, we leave no stone unturned. Our comprehensive approach covers code, content, and
              context, making sure every part of your eCommerce site is optimized for maximum impact.
            </p>

            <div className="py-6">
              <div className="grid grid-cols-3 items-left">
                {/* 1/3 Section */}
                <div className="col-span-1 flex justify-left">
                  <span className={`text-[45px] md:text-[56px] leading-[1] font-[800] font-helveticaneue text-[#DD9933]`}>89%</span>
                </div>
                {/* 2/3 Section */}
                <div className="col-span-2">
                  <span className={`text-[16px] md:text-[21.6px] leading-[1.1] font-[400] font-helveticaneue text-[#DD9933]`}>
                    of consumers using organic search to make purchase decisions, you can’t afford to miss out on the SEO game.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="images/Code, content and context.webp"
              alt="Local SEO visualization showing map interface across devices"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCodeSection;
