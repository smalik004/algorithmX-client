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

const TiktokBoostAds = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
              Capture Attention with Creative
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                SHORT
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                VIDEOS
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              As the best TikTok ads agency, we help brands create successful TikTok marketing campaigns that engage, convert,
            and amplify your brand's presence. Our experienced TikTok Ads agency team knows what works—not just from theory,
            but from proven success creating campaigns that resonate and deliver ROI.
              </p>
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              We've mastered the art of advertising services for TikTok, refining strategies that generate real engagement. 
              Whether through In-Feed Ads, Branded Hashtag Challenges, or TopView Ads, our top TikTok ads services blend creativity
            with data-driven insights. This isn't about guesswork—we know what drives results. As your dedicated TikTok marketing agency
            , we leverage the platform's advanced targeting and real-time analytics to ensure your ads reach the right audience, track performance
            precisely, and optimize continuously for maximum impact.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default  TiktokBoostAds;