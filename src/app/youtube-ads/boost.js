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

const YoutubeBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Boost Your Brand with Engaging
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
           VIDEO
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                CONTENT
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
            As a leading YouTube Ads agency, we help you tap into the power of video to reach a massive audience. 
            Whether you're looking for YouTube Advertising Services that leverage skippable in-stream ads, video
            discovery ads, or bumper ads, we've got your back. Our advanced targeting ensures your campaigns hit the 
            right audience based on their demographics, interests, and viewing behavior. With detailed analytics,
            we track engagement, views, and conversions, helping you drive brand awareness and connect with customers.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  YoutubeBoostAds;