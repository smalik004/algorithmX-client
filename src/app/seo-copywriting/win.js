import React from 'react';
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback : ["sans-serif"],
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback : ["sans-serif"],
});


const CopywritingMarketingSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-16 flex items-center">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16 text-center md:text-left">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h2 className={`text-[24px] leading-[1.2] tracking-[0.025em] mb-[8px]  ${monsterfont.className} `}>
            Win customers for life as the go-to brand in your category.
          </h2>
          
          <p className={`text-[15px] leading-[24px] mb-[16px] font-[400] font-helveticaneue text-semi-white`}>
            Many brands make consumers feel like a walking wallet surrounded by incessant ads.
          </p>
          
          <p className={`text-[15px] leading-[24px] mb-[16px] font-[400] font-helveticaneue text-semi-white`}>
            Show them you care about their problems by solving them with quality content that informs, connects and entertains.
          </p>
          
          <p className={`text-[15px] leading-[24px] mb-[16px] font-[400] font-helveticaneue text-semi-white`}>
            Power Digital develops content marketing strategies that intertwine search engine optimization, social media, email marketing, PR, and CRO and social media marketing strategies to create undeniable value for your target audience and increase your brand awareness.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className={`text-[24px] leading-[1.2] tracking-[0.025em] mb-[8px]  ${monsterfont.className} `}>
            When customers fall in love with your written content, you will:
          </h2>
          
          <div className="space-y-8 mt-8">
            <div className="space-y-0">
              <p className={`text-[15px] leading-[24px] mb-[16px] font-[400] font-helveticaneue text-semi-white`}>
                Strengthen your entire customer experience from acquisition to nurture
              </p>
            </div>
            
            <div className="space-y-0">
              <p className={`text-[15px] leading-[24px] mb-[16px] font-[400] font-helveticaneue text-semi-white`}>
                Become an industry authority
              </p>
            </div>
            
            <div className="space-y-0">
              <p className={`text-[15px] leading-[24px] mb-[16px] font-[400] font-helveticaneue text-semi-white`}>
                Boost organic visits and revenue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopywritingMarketingSection;
