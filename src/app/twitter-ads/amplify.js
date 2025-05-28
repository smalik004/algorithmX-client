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

const TwitterBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
            Amplify Your Reach with
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
            REAL-TIME
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                ENGAGEMENT
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
                Twitter Ads provide a dynamic platform for reaching a broad audience with timely and relevant messaging.
                Through various ad formats, including promoted tweets, trends, and accounts, businesses can engage users
                based on interests, demographics, and behaviors. Twitter’s targeting capabilities allow for precise audience
                segmentation, ensuring your ads reach the right people at the right time. With real-time analytics, you can track
                campaign performance, measure engagement, and optimize strategies for better results. Leveraging Twitter Ads helps
                boost brand visibility, drive traffic, and foster meaningful interactions with your target audience in the fast-paced
                social media landscape.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  TwitterBoostAds;