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

const LinkedinBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Elevate Your Brand with
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
               TARGETED
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                LINKEDIN ADS
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              We specialize in crafting high-impact campaigns that connect you with decision-makers and industry leaders. 
              Whether you are looking to boost brand awareness, generate leads, or drive conversions, our team tailors LinkedIn ads
            to meet your business goals. LinkedIn is the go-to platform for professionals that offers a unique space to target a highly
            specific audience based on job titles, industries, company size, and more. As your **LinkedIn ad agency**, we help you reach
            this influential audience with precision, maximizing the value of every ad dollar spent. As one of the top LinkedIn ads agencies
            in the industry, we offer a complete suite of services that cover everything from strategy to execution. Whether you're in the USA
            or India, our LinkedIn ads management agency is equipped to handle your needs, offering end-to-end support for your campaigns. With
            expertise in B2B LinkedIn marketing ads, we help you build meaningful connections that lead to long-term growth.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  LinkedinBoostAds;