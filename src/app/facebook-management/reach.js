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

const HeroSection = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white order-2 md:order-1">
            <h1
              className={`${robotoFont.className} leading-[52px] tracking-[0.06em] text-[46px] mt-[20px]`}
            >
              REACH AND ENGAGE YOUR IDEAL AUDIENCE
            </h1>
            <div className="w-[35px] h-[2px] bg-blue-500 mt-[35px] mb-[32px]"></div>
            <p
              className={`${robotoFont1.className}  text-semi-white text-[16px] leading-[26px] font-[300] `}
            >
              At AlgorithmX, we craft powerful, targeted strategies to capture
              and engage your audience. We ensure your Facebook presence remains
              dynamic, relevant, and aligned with your business objectives.
              Whether you're looking to attract new customers or manage Meta
              ads, our tailored approach keeps users hooked, helping you build a
              loyal community while continuously expanding your reach.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="transform md:rotate-12">
              <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] overflow-hidden border-4 border-white">
                <Image
                  width={100}
                  height={100}
                  src="/images/Reach-and-Engage-Your-Ideal-Audience.webp"
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

export default HeroSection;
