'use client'
import React from 'react';
import './style.css'
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const Roadmap = () => {
  const timelineData = [
    {
      title: "Consultation & Research",
      description: "Understand the client's requirements and goals to establish timelines. Perform market research to define competitors and target audience.",
      color: "box-style-red",
      borderColor: "rgb(239, 68, 68)", // red-500
      direction: "right"
    },
    {
      title: "Strategy Development",
      description: "Enlist the Key Performance Indicators (KPIs) and objectives, choose the tech stack, and prepare a customized strategy.",
      color: "box-style-yellow",
      borderColor: "rgb(234, 179, 8)", // yellow-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(255,255,0,0.7)]",
      direction: "left"
    },
    {
      title: "Design Engineering",
      description: "Create brand elements, graphics, and videos. Produce content. Build and optimize mobile applications and websites.",
      color: "box-style-green",
      borderColor: "rgb(34, 197, 94)", // green-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(0,255,0,0.7)]",
      direction: "right"
    },
    {
      title: "Optimized Execution",
      description: "Implement marketing strategies, launch SEO and PPC Ad Campaigns, check performance statistics, and optimize.",
      color: "box-style-blue",
      borderColor: "rgb(59, 130, 246)", // blue-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(0,0,255,0.7)]",
      direction: "left"
    },
    {
      title: "Analysis/Support",
      description: "Create performance reports based on KPIs. Consistently improve and maintain as per client objectives and market trends.",
      color: "box-style-purple",
      borderColor: "rgb(185, 30, 170)", // purple-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(255,0,255,0.7)]",
      direction: "right"
    }
  ];

  return (
    <div className="relative bg-black text-white">
      <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto">
        {/* Left Section */}
        <div className="w-full lg:w-5/12">
          <div className="p-8 lg:sticky lg:top-[100px]">
            <h1 className={`text-[50px] leading-[1.1]  font-helveticaneue bg-black font-[400]  text-white md:text-start text-center `}>
              Accelerate Your <br/>Digital Evolution!
            </h1>
            <p className={`text-[17px] leading-[26px]  font-helveticaneue font-[400] text-white mt-[48px] md:text-start text-center`}>
              We're a premier end-to-end digital agency committed to revolutionizing businesses with advanced digital 
              solutions and data-driven strategies to deliver exceptional growth and success. We transform your Vision 
              into a known Brand, your Concept into a tangible Product, and your Product into a Market Leader. Our 
              skilled professionals, including designers, developers, and marketers, are dedicated to grasping your 
              requirements and creating custom solutions to help your brand make a unique impression. Experience the 
              AlgorithmX difference with our dedicated client-centric approach!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-7/12">
          {/* Added a container div with a desktop-only height limit */}
          <div className="hidden lg:block" style={{ height: 'calc(100vh - 679px)' }}></div>
          <div className="lg:h-auto lg:overflow-y-auto scrollbar-hide">
            <div className="p-8">
              {/* Timeline container */}
              <div className="relative">
                {/* Vertical Timeline Line - Different for mobile and desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 lg:hidden" 
                    style={{
                      top: '-10px',
                      height: 'calc(100% + 40px)',
                      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 100%)'
                    }} />
                
                {/* Desktop timeline line stays the same */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 hidden lg:block" 
                    style={{
                      top: '-40px',
                      height: 'calc(100% + 40px)',
                      background: 'linear-gradient(to bottom, rgba(80, 80, 80, 0) 0%, rgb(80, 80, 80) 8%, rgb(80, 80, 80) 92%, rgba(80, 80, 80, 0) 100%)'
                    }} />

                {/* Timeline Items */}
                {timelineData.map((item, index) => (
                  <div key={index} className="relative mb-4">
                    {/* Timeline Dot */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white -top-6 md:-top-0`} 
                      style={{ border: '4px solid rgb(255, 80, 80)' }} />

                    {/* Content Box */}
                    <div className={`flex flex-col items-center lg:items-start text-center mt-8 lg:mt-0
                      ${item.direction === 'right' 
                        ? 'lg:ml-[60%] lg:text-left' 
                        : 'lg:mr-[60%] lg:items-end lg:text-right self-start lg:self-end'}`}>
                      <div className={`relative inline-flex items-center gap-2 px-[10px] py-[6px] rounded ${item.color} border-2 ${item.boxShadow}`}>
                        {/* Mobile Arrow Triangle (upward) */}
                        <div className={`absolute lg:hidden w-0 h-0 bottom-full left-1/2 -translate-x-1/2 
                          border-b-[12px] border-x-[8px] border-x-transparent`}
                          style={{
                            borderBottomColor: item.borderColor
                          }} />
                        
                        {/* Desktop Arrow Triangle (left/right) */}
                        <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-0 h-0
                          ${item.direction === 'right' 
                            ? 'right-full border-r-[12px]' 
                            : 'left-full border-l-[12px]'}
                          border-y-[8px] border-y-transparent`}
                          style={{
                            borderRightColor: item.direction === 'right' ? item.borderColor : 'transparent',
                            borderLeftColor: item.direction === 'left' ? item.borderColor : 'transparent'
                          }} />
                        <h3 className={`text-[15px] leading-[1.1]  font-helveticaneue font-[600] text-white`}>{item.title}</h3>
                      </div>
                      <p className={`text-[11.665px] leading-[1.5em] font-helveticaneue font-[400] text-white italic max-w-md mt-3 
                        lg:p-0 lg:border-0 lg:bg-transparent
                        p-4 border-[1px] border-gray-700 bg-[#0F0F0F]`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
