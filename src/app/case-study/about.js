// components/AboutSection.jsx

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="w-full bg-black ">
      {/* Top Content Section */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col-reverse md:flex-row md:justify-start">
          
          {/* Right: Description */}
          <div className="md:w-1/2">
            <p className="text-white text-base md:text-lg md:text-start text-center">
              JobGet is a marketplace where job seekers and employers message each other, schedule meetings, and have in-app video
              interviews all in semi real-time. The platform is looking to transform the employment landscape for both hourly employers and
              full-time professionals, making it efficient, accessible, and instant.
            </p>
          </div>
          {/* Left: About Heading */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">About</h1>
          </div>
        </div>
      </div>
      
      {/* Full-Width Phone Images Section */}
      <div className="w-full bg-black relative py-[10px] overflow-hidden">
        {/* Dotted Background - increased density and opacity for visibility */}
        
        
        {/* Phone Images Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-4 md:gap-8">
            {/* Phone Image 1 - Up */}
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 md:-mt-12">
              <div className="relative h-96 w-full">
                <Image 
                  src="/images/screen1.webp" 
                  alt="JobGet Profile Interface"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: "contain" }}
                  className=" "
                />
              </div>
            </div>
            
            {/* Phone Image 2 - Down */}
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 md:mt-12">
              <div className="relative h-96 w-full">
                <Image 
                 src="/images/screen1.webp" 
                  alt="JobGet Candidates Interface"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
            </div>
            
            {/* Phone Image 3 - Up */}
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 md:-mt-8">
              <div className="relative h-96 w-full">
                <Image 
                  src="/images/screen1.webp" 
                  alt="JobGet Jobs Interface"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
            </div>
            
            {/* Phone Image 4 - Down */}
            <div className="w-full sm:w-1/2 md:w-1/4 px-2 md:mt-16">
              <div className="relative h-96 w-full">
                <Image 
                  src="/images/screen1.webp"  
                  alt="JobGet Post Job Interface"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: "contain" }}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;