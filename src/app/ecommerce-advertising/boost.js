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

const EcommerceBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Boost Your Online Sales with Targeted
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                ECOMMERCE
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                ADVERTISING
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              At AlgorithmX, we specialize in leveraging formats like product listing ads, dynamic retargeting, and shoppable social media ads. We target potential buyers based on their browsing behavior, past purchases, and interests, creating personalized experiences that drive real engagement and boost your sales. As your eCommerce ads agency, we ensure your brand stays visible wherever your audience is—be it search engines, social media, or partner sites. As one of the top ecommerce advertising companies in the USA, we offer customized solutions for every business size. From Google Ads for ecommerce to Facebook ads agency for ecommerce solutions, our expertise ensures you’re connecting with your audience on the right platforms.
              </p>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  EcommerceBoostAds;