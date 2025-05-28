import React from 'react';

import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});




const LineSVG = () => (
  <svg width="48" height="2" viewBox="0 0 48 2" className="transition-opacity duration-300">
    <line 
      x1="0"
      y1="1"
      x2="48" 
      y2="1" 
      stroke="#EF4444" 
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SEOReports = () => {
  const features = [
    {
      title: 'Pages',
      subtitle: 'Reviewed',
    },
    {
      title: 'Implement',
      subtitle: 'Audit',
    },
    {
      title: 'Audit',
      subtitle: 'Report',
    },
    {
      title: 'Future Site',
      subtitle: 'Strategy',
    },
    {
      title: 'Competitive',
      subtitle: 'Scorecard',
    },
    {
      title: 'Backlink',
      subtitle: 'Report',
    },
    {
        title: 'Keyword',
        subtitle: 'Research',
    },
    {
        title: 'SEO',
        subtitle: 'Reporting',
    },
    {
        title: 'Acquire',
        subtitle: 'Link',
    },
    {
        title: 'In-Depth',
        subtitle: 'Linking',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8 flex items-center justify-center  ">
         <div className="max-w-[1200px] mx-auto  mb-16">
      <h1 className={`text-[50px] leading-[60px] md:text-[64px] md:leading-[68px] text-center ${monsterfont.className}`}>
      Get Comprehensive
      </h1>
      <h1 className={`text-[44px] leading-[68px] text-center ${monsterfont1.className}`}>
      Reports that Drive Real Results
      </h1>
      <p className={`text-[16px] leading-[20px] text-center ${monsterfont2.className} text-semi-white mb-4`}>
      Our detailed reports don’t just tell you what’s wrong—they give you a roadmap to success. Here’s <br/>what you’ll get:
      </p>
      
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-5 max-w-5xl mx-auto">
          {/* Vertical Borders */}
          <div className="absolute top-0 left-[22%] w-px h-full bg-gray-700 hidden md:block "></div>
          <div className="absolute top-0 left-[42%] w-px h-full bg-gray-700 hidden md:block"></div>
          <div className="absolute top-0 left-[60%] w-px h-full bg-gray-700 hidden md:block"></div>
          <div className="absolute top-0 left-[80%] w-px h-full bg-gray-700 hidden md:block"></div>
         
          
          {/* Horizontal Border */}
          <div className="absolute top-1/2 w-full h-px bg-gray-700"></div>
          
          {/* Content */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 relative"
            >
              <div className="flex flex-col space-y-0">
                <h2 className=" text-[24px] leading-[1.1] font-helveticaneue text-start font-[400]">
                  {feature.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-full">
                    <LineSVG />
                  </div>
                  <p className={`text-[24px] leading-[1.1] font-helveticaneue font-[400] text-white-500   duration-300 group-hover:-translate-x-14`}>
                    {feature.subtitle}
                  </p>
                </div>
                <p className="text-gray-400  ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
<div className="md:hidden grid grid-cols-2 divide-y divide-gray-700 relative">
  {/* Vertical Border between columns */}
  <div className="absolute top-0 left-[48%] w-px h-full bg-gray-700"></div>
  
  {features.map((feature, index) => (
    <div 
      key={index} 
      className="group py-8 relative"
    >
      <div className="flex flex-col space-y-4">
        <h2 className="text-[24px] leading-[1.1] font-helveticaneue text-start font-[400]">
          {feature.title}
        </h2>
        <div className="flex items-center space-x-2">
          <div className="transition-all duration-300 ">
            <LineSVG />
          </div>
          <p className="text-[24px] leading-[1.1] font-helveticaneue text-start font-[400] text-white transition-transform duration-300">
            {feature.subtitle}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default SEOReports;