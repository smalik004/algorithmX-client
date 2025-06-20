import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const robotoFont1 = Roboto({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});

const TiktokGrowHeroSection = () => {
  return (
    <div className="bg-black min-h-screen p-4 flex items-center">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="transform md:-rotate-12">
              <div className="w-[320px] h-[330px] md:w-[400px] md:h-[400px] overflow-hidden border-4 border-white">
                <Image
                  width={100}
                  height={100}
                  src="/images/Connect-with-your-audience-Tiktok.webp"
                  alt="Network diagram showing audience connection"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white text-center md:text-left flex flex-col items-center md:items-start">
            <h1
              className={`${robotoFont.className} leading-[52px] tracking-[0.06em] text-[36px] md:text-[46px] mt-[20px]`}
            >
              CONNECT WITH YOUR AUDIENCE
            </h1>
            <div className="w-[35px] h-[2px] bg-blue-500 mt-[20px] md:mt-[35px] mb-[20px] md:mb-[32px]"></div>
            <p
              className={`${robotoFont1.className} text-semi-white text-[16px] leading-[26px] `}
            >
              <span className="text-[#DC3545]">
                Build Real Connections with Your Followers
              </span>{" "}
              An average users spend 58 minutes and 24 seconds on TikTok each
              day. The engagement here is unmatched. It’s the perfect platform
              to build a deeper connection with your audience through fun,
              relatable, and creative video content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiktokGrowHeroSection;
