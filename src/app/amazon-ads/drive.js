'use client'
import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
})
const monsterfont2 = Montserrat ({
    subsets : ["latin"],
    weight :"400",
  })
  const monsterfont3 = Montserrat ({
    subsets : ["latin"],
    weight :"700",
  })

const AmazonBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Drive Sales with
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                PRECISION
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                TARGETING
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              Amazon Ads provide a powerful platform for businesses to promote their products and reach a vast audience. With options like Sponsored Products, Sponsored Brands, and Sponsored Display, businesses can enhance visibility and drive sales. Amazon’s advanced targeting features allow for precise audience segmentation based on shopping behavior, demographics, and interests. Detailed analytics and performance metrics help optimize campaigns and improve ROI. By leveraging Amazon Ads, businesses can increase product discoverability, attract high-intent shoppers, and boost conversions, ultimately driving growth in a competitive online marketplace.
              </p>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  AmazonBoostAds;