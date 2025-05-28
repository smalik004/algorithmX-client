import React from 'react';
import { Roboto } from 'next/font/google';

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
  const robotoFont2 = Roboto({
    subsets: ["latin"],
    weight: "400",
    fallback: ["sans-serif"],
  });


const TwitterHeroSection = () => {
  return (
    <div className="bg-black min-h-screen ">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white order-2 md:order-1  ">
            <h1 className={`${robotoFont.className} leading-[52px] tracking-[0.06em] text-[36px] md:text-[46px] mt-[20px] `}>
            ENGAGEMENT IS  KEY
            </h1>
            <div className="w-[35px] h-[2px] bg-blue-500  mt-[35px] mb-[32px]"></div>
            <p className={`text-[#d93]  text-[1.35rem] leading-[1] font-[400] ${robotoFont2.className}`}>
            Stay Relevant in a Fast-Moving Platform
            </p>

            <p className={`text-semi-white text-[16px] leading-[26px]  ${robotoFont.className}`}>
            Success on Twitter requires more than just posting content. Stay up-to-date, engaging with followers, prompt reactions, and most importantly, high-quality content is the recipe to Twitter's success. Real-time monitoring and engagement, allowing you to focus on your business while we handle interactions
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="transform md:rotate-12">
              <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] overflow-hidden border-4 border-white ">
                <img
                  src="images/Engagement-is-Key.webp"
                  alt="Network diagram showing audience connection"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterHeroSection;
