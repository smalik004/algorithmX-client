import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ['sans-serif'],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ['sans-serif'],
});

const DeliverablesSection = () => {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-[40px] md:text-[64px] leading-[68px] ${monsterfont.className} text-white`}>
            Deliverables
          </h1>
          <h2 className={`text-[40px] md:text-[64px] ${monsterfont1.className} text-white`}>
            To Clients
          </h2>
        </div>

        <div className="bg-[#030c0d] rounded-[2.5rem] p-6 md:p-8">
          <h3 className="text-[25px] leading-[1.1] font-helveticaneue text-white mt-[20px] mb-[20px]">
            Details
          </h3>
          <div className="relative space-y-4 pl-4">
            {/* Continuous vertical line */}
            <div className="hidden md:block absolute top-0 left-0 w-px h-full bg-white"></div>
            
            <ul className="space-y-3 md:space-y-4">
              {[
                "Keyphrase Optimization",
                "Optimized Pages",
                "Technical Website Analysis",
                "Keyword research & selection",
                "Keyword mapping to target pages",
                "Title Tags & Meta descriptions",
                "Robots.txt optimization",
                "XML sitemap creation & submission",
                "Google Business Profile optimization (if needed)",
                "Information architecture audit",
                "Canonicalization analysis",
                "Link redirect audit",
                "Internal linking restructuring & optimization",
                "Duplicate content analysis"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-semi-white mt-1 mr-2 flex-shrink-0" />
                  <span className="text-[16px] leading-[22px] font-helveticaneue text-semi-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverablesSection;
