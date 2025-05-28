import React from 'react';
import styles from './style.module.css'
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback : ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback : ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback : ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback : ["sans-serif"],
});

const PPCAudit = () => {
    const auditItems = [
        { title: "Account Structure", imgSrc: "images/Account-Structure.png" },
        { title: "Keywords & Negative Keywords", imgSrc: "images/Keywords-&-Negative-Keywords.png" },
        { title: "Bidding Strategy", imgSrc: "images/Bidding-Strategy.png" },
        { title: "Location Targeting", imgSrc: "images/Location-Targeting.png" },
        { title: "Ad Copy & Assets", imgSrc: "images/Ad-Copy-&-Assets.png" },
        { title: "Conversions & Attribution", imgSrc: "images/Conversions-&-Attribution.png" }
      ];

  return (
    <div className="text-white p-6 bg-black">
      {/* Top Section - Original Layout */}
      <h1 className={`text-[42px] leading-[46px] mb-[100px] text-center ${monsterfont.className}  `}>What does our PPC Audit cover?</h1>
      <div className="max-w-[1200px] mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content - 1/3 Image */}
          <div className="lg:w-1/3">
            <img 
              src="/api/placeholder/400/300"
              alt="PPC Strategy Visualization"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Right Content - 2/3 Text */}
          <div className="lg:w-2/3">
            <h2 className={`text-[28px] leading-[32px] mt-[30px] text-center md:text-start ${monsterfont1.className}  `}>WHAT DO WE LOOK FOR?</h2>
            <p className={`text-[16px] leading-[26px] mt-[20px] text-center md:text-start font-helveticaneue text-semi-white  `}>
            We cast our net far and wide and aim to cover the key elements of your account. We look for strengths, weaknesses, opportunities and threats. We focus on overall account structure, keywords, ad copy & assets, ad strength, quality score, bidding strategy, locations targeting, campaign types, attribution models, conversion tracking, dynamic ads and other opportunities for growth.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content - 2/3 */}
          <div className="lg:w-2/3">
            <h2 className={`text-[28px] leading-[32px] mt-[30px] text-center md:text-start ${monsterfont1.className}  `}>WHAT HAPPENS AFTER?</h2>
            <p className={`text-[16px] leading-[26px] mt-[20px] text-center md:text-start font-opensans text-semi-white  `}>
              We provide you with a visualised report of our findings. We organise the data so it becomes easy to 
              understand and highlights the key action points. One of our experts will then guide you through 
              your audit in a consultation arranged at your convenience. We will then work with you to plan out 
              the next steps in your PPC strategy and help you determine your revised PPC goals.
            </p>
          </div>
          
          {/* Right Content - 1/3 */}
          <div className="lg:w-1/3">
            <img 
              src="/api/placeholder/400/300"
              alt="PPC Audit Visualization"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* Left Side - Icons */}
          <div className="lg:w-1/2 ml-[50px]">
            <div className="grid gap-6">
            {auditItems.map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <img 
                    src={item.imgSrc}
                    alt={`${item.title} icon`}
                    className="w-10 h-10"
                  />
                  <span className={`text-[20px] leading-[60px] ${monsterfont3.className}`}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Box */}
          <div className="lg:w-1/2">
            <div className={` ${styles["box-design"]}`}>
              <h3 className={`text-[36px] leading-[40px] mt-[30px] text-center  ${monsterfont2.className}  `}>PPC AUDIT</h3>
              <p className={`text-[18px] leading-[18px]    font-[700] font-helveticaneue text-center mt-[10px] `}>that gives you a roadmap to success.</p>
              <p className={`text-[16px] leading-[28px]    font-[400] font-helveticaneue text-start mt-[30px] mb-[30px] `}>
                Responding effectively to a PPC audit is essential. We develop a strategic roadmap based on our findings, 
                analyzing performance metrics, identifying improvement areas, and creating tailored strategies. 
                By addressing key issues and leveraging opportunities, we help you achieve maximum ROI. With our roadmap, 
                you can confidently navigate PPC advertising complexities and drive your campaigns toward greater success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCAudit;