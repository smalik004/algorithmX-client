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

const BoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Boost Your Business with
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                TARGETED
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                ADS
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              Facebook Ads offer businesses a powerful platform to reach and engage with a highly targeted audience. Through advanced targeting options, businesses can specify demographics, interests, and behaviors to ensure ads reach the right people. Facebook Ads provide various formats, including image, video, carousel, and slideshow, allowing for creative flexibility. The platform's robust analytics and reporting tools enable businesses to track ad performance, optimize campaigns, and achieve better ROI. With the ability to set specific budgets and bid strategies, Facebook Ads are an essential tool for businesses looking to enhance their digital marketing efforts and drive measurable results.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostAds;