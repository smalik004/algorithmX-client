'use client'
import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback: ["sans-serif"],
})
const monsterfont2 = Montserrat ({
    subsets : ["latin"],
    weight :"400",
    fallback: ["sans-serif"],
  })
  const monsterfont3 = Montserrat ({
    subsets : ["latin"],
    weight :"700",
    fallback: ["sans-serif"],
  })

const Targeted = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
                Targeted Ads for Maximum Impact
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                  PRECISION
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
                AlgorithmX is a leading Google ads services agency dedicated to 
                driving conversions, increasing visibility, and boosting your bottom line. 
                As a top Google Ads management company, we focus on precision-targeted 
                strategies to maximize your ad spend and deliver measurable results.
              </p>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
                "Get better results from your ad budget by targeting the right people, 
                optimizing campaigns, and boosting conversions. With our expert 
                Google ads management services, your campaigns are built to deliver 
                a higher ROI."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targeted;