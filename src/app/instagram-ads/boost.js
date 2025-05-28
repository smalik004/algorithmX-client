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

const InstaBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Boost Your Brand with
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                VISUAL
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                MARKETING
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              Maximize your brand’s potential with high-performance **Instagram Ads** designed to drive real results. 
              As a top **Instagram Ads Agency**, AlgorithmX creates targeted, data-driven campaigns that boost engagement, grow your audience, 
            and turn views into conversions. At AlgorithmX, we combine creativity with advanced targeting to help your brand shine. Our expertise in 
            Instagram marketing services in the USA ensures your campaigns are tailored to reach your ideal customers with precision. Instagram’s 
            billion-plus active users offer a prime opportunity to engage. Our Instagram Ads use precise targeting to reach key demographics, while
            captivating visuals and interactive features boost engagement and drive quick, seamless conversions from interest to purchase. Ready
            to scale your brand with **creative and great Instagram ads**? As a leading **Instagram Ads Agency**, we deliver tailored, high-performing campaigns that drive growth. Our expert Instagram ads specialists handle everything—from targeting to optimization—so you can focus on running your business.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  InstaBoostAds;