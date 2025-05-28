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

const Targeted = () => {
  return (
    <div className="bg-black  flex items-center pt-[100px]">
      <div className=" max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full md:w-[60%] space-y-8">
            <div className="space-y-2">
              <h2 className={`text-white text-[64px] leading-[68px] ${monsterfont2.className} `}>
                Transform your Marketing
              </h2>
            </div>
            
            <div className="flex items-start space-x-4 ">
              <div className="w-2 h-20 bg-blue-500 rounded-full"></div>
              <div className="mt-[16px] pl-[10px]">
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont1.className} `}>
                HARDNESS BING ADS
                </p>
                <p className={`text-white text-[21px] leading-[26px] ${monsterfont3.className}`}>
                FOR BUSSINESS SUCCESS
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[40%]">
            <div className="bg-black/20 backdrop-blur-sm p-2 rounded-lg">
              <p className="text-semi-white text-[15px] leading-[24px] font-helveticaneue font-[400] mb-[25px]">
              Bing Ads, now known as Microsoft Advertising, is an online advertising platform by Microsoft. It enables businesses to place ads on the Bing search engine, as well as Yahoo and AOL networks. Advertisers can bid on keywords to display ads in search results, targeting users based on keywords, location, device, and demographics. The platform uses a pay-per-click (PPC) model, where advertisers pay only when users click on their ads. Bing Ads offers robust analytics and integration with other Microsoft tools, providing a valuable alternative to Google Ads for reaching a diverse audience and maximizing advertising ROI.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Targeted;