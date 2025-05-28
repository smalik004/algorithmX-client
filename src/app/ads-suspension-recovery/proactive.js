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


const HeroSection = () => {
  return (
    <div className="bg-black min-h-screen ">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white order-2 md:order-1  ">
            <h1 className={`${robotoFont.className} leading-[52px] tracking-[0.06em] text-[46px] mt-[20px] `}>
            PROACTIVE ACCOUNT PROTECTION
            </h1>
            <div className="w-[35px] h-[2px] bg-blue-500  mt-[35px] mb-[32px]"></div>
            <p className={`text-semi-white text-[16px] leading-[26px] ${robotoFont1.className}`}>
            Once we find out why your account was suspended, we’ll handle the entire appeal process for you—addressing Google’s concerns and making the changes needed to get your ads back online fast. After recovering your account, we work to ensure you avoid future suspensions. Through our ads suspension recovery services, we analyze your campaigns, adjust keywords, and update your settings to comply with Google’s latest policies—keeping your ads live and running smoothly. Our in-depth review of your account includes a detailed report on what caused the suspension. We provide actionable insights and recommendations to prevent future violations and optimize your campaigns for continued success.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="transform md:rotate-12">
              <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] overflow-hidden border-4 border-white ">
                <img
                  src="images/Proactive-Account-Protection.webp"
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

export default HeroSection;
