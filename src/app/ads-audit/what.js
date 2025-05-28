import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { Montserrat } from "next/font/google";


const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "700",
    fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "500",
    fallback: ["sans-serif"],
});

const PPCAuditSection = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image Section - 1/3 width */}
          <div className="md:w-1/3">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg"></div>
              <img 
                src="/api/placeholder/96/96"
                alt="PPC Audit Icon" 
                className="relative w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content Section - 2/3 width */}
          <div className="md:w-2/3">
            <h1 className={`text-[28px] leading-[32px] mb-[10px] ${monsterfont.className} `}>WHAT IS A PPC AUDIT?</h1>
            
            <p className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white mb-[25px]`}>
              Think of the ads audit services as an MRI for your campaigns. We look at everything—what's driving conversions,
              what's wasting your budget, and what opportunities are flying under the radar. This isn't about surface-level fixes;
              we're talking deep-dive analysis to deliver actionable recommendations that get real results.
            </p>

            <p className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white mb-[25px]`}>We cover every major platform :</p>

            <div className="flex flex-wrap gap-16 mb-8">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon 
                  icon={faGoogle} 
                  className="w-6 h-6 text-orange-500"
                />
                <span className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white `}>Google Ads</span>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon 
                  icon={faMicrosoft} 
                  className="w-6 h-6 text-orange-500"
                />
                <span className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white `}>Microsoft Ads</span>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon 
                  icon={faFacebook} 
                  className="w-6 h-6 text-orange-500"
                />
                <span className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white `}>Facebook</span>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="w-6 h-6 text-orange-500"
                />
                <span className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white `}>LinkedIn</span>
              </div>
            </div>

            <p className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white mb-[25px]`}>
              If you're tired of lackluster PPC results, it's time for a real change.
            </p>

            <p className={`text-[15px] leading-[24px] font-helveticaneue font-[400] text-semi-white mb-[25px]`}>
              Our Ads Audit Service isn't just a checklist, it's a comprehensive diagnosis of your ad campaigns.
              We pinpoint exactly what's holding you back and provide a detailed game plan to help you dominate your market.
              With insights backed by hard data and expertise, we guarantee improved Return on Ad Spend (RoAS) for your
              campaigns through our PPC Audit Services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPCAuditSection;