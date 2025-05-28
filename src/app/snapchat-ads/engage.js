'use client'
import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback : ["sans-serif"],
})
const monsterfont2 = Montserrat ({
    subsets : ["latin"],
    weight :"400",
    fallback : ["sans-serif"],
  })
  const monsterfont3 = Montserrat ({
    subsets : ["latin"],
    weight :"700",
    fallback : ["sans-serif"],
  })

const SnapchatBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Engage Audiences with
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                DYNAMIC
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                VISUALS
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              Running Snapchat ads isn’t just about throwing a flashy video in front of a young audience and hoping for the best. It takes strategy, knowing what resonates, and the experience to understand what doesn’t work. As a Snapchat ads agency, we know exactly what drives engagement and what gets scrolled past without a second thought. Snapchat is a playground for brands aiming to connect with younger, highly engaged users. But there’s a challenge: short attention spans and high expectations. If we don’t hit them with something fresh, fun, and interactive, the chance is gone. With our experience as a dedicated Snapchat ads manager, we ensure your ads aren’t just seen but remembered—and, more importantly, acted on.
              </p>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  SnapchatBoostAds;