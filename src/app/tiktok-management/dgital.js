    import React from "react";
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

    const TiktokHeroSection = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="container max-w-[1200px] mx-auto p-4 md:p-0">
            <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-white order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start">
                <h1
                className={`${robotoFont.className} leading-[52px] tracking-[0.06em] text-[36px] md:text-[44px] mt-[20px]`}
                >
                DIGITAL VIDEO ENGAGEMENT
                </h1>
                <div className="w-[35px] h-[2px] bg-blue-500 mt-[20px] md:mt-[35px] mb-[20px] md:mb-[32px]"></div>
                <p className={`${robotoFont1.className} text-semi-white text-[16px] leading-[26px] `}>
                <span className="text-[#DC3545]">Ride the TikTok Wave with Creative Content</span> TikTok is a powerhouse of creative content like no other. From conception to distribution, the content needs to be strategized to captivate the audience. to craft a content calendar brimming with fresh ideas, trending challenges, and stories that resonate with your target audience. We will also help you connect with the perfect influencers who seamlessly align wi
                </p>
            </div>

            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="transform md:rotate-12">
                <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] overflow-hidden border-4 border-white">
                    <img
                    src="images/Digital-Video-Engagement.webp"
                    alt="Network diagram showing audience connection"
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default TiktokHeroSection;
