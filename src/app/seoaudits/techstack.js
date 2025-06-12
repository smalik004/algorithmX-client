import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const SEOStrategyGrid = () => {
  return (
    <div className="bg-black text-white p-4 flex flex-col items-center justify-center min-h-screen">
      {/* Header Text */}
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14 relative pt-20 pb-8 w-full">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`text-[46px] md:text-[100px] leading-[1.1] ${monsterfont1.className} text-gray-600/20 select-none`}
            >
              TECH-STACK
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-8">
            <h2
              className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white `}
            >
              POWERING
            </h2>
            <h2
              className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white `}
            >
              OUR SERVICES
            </h2>
          </div>
        </div>

        {/* Grid Container */}
        <div className="w-full max-w-[1200px] px-4">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Automotive
              </span>
              <Image
                width={40}
                height={40}
                src="/images/automative.png"
                alt="Lead Generation"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Communications
              </span>
              <Image
                width={40}
height={40}
                src="/images/communications.png"
                alt="Sales Enablement"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Constructions
              </span>
              <Image
                width={40}
height={40}
                src="/images/constructions.png"
                alt="Nurturing Customers"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Govt. Education
              </span>
              <Image
                width={40}
height={40}
                src="/images/govt education.png"
                alt="Social Engagement"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
          {/* MID ROW  */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Energy & Power
              </span>
              <Image
                width={40}
height={40}
                src="/images/energy power.png"
                alt="Lead Generation"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Financial Service
              </span>
              <Image
                width={40}
height={40}
                src="/images/financial service.png"
                alt="Sales Enablement"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Food & Beverage
              </span>
              <Image
                width={40}
height={40}
                src="/images/food and beverages.png"
                alt="Nurturing Customers"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Life Science
              </span>
              <Image
                width={40}
height={40}
                src="/images/life sciences.png"
                alt="Social Engagement"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>

          {/* Bottom Row - Centered and Spaced */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Media & Entertainment
              </span>
              <Image
                width={40}
height={40}
                src="/images/media entertainment.png"
                alt="Thought Leadership"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Travel Agency
              </span>
              <Image
                width={40}
height={40}
                src="/images/Travel agency.png"
                alt="Conversions"
                className="w-[40px] h-[40px]"
              />
            </div>

            <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
              <span
                className={`text-[15px]  leading-[24px] font-helveticaneue font-[500] text-white`}
              >
                Public Safety
              </span>
              <Image
                width={40}
height={40}
                src="/images/public safety.png"
                alt="SEO"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOStrategyGrid;
