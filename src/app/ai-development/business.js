'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../crm/style.module.css';
import style from '../erp/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});


const AIBusinessSection = () => {
  const [isInView, setIsInView] = useState(false);
  const modulifyRef = useRef(null); // Reference for the MODULIFY text

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true); // Set to true when text enters the view
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is in view
    );

    if (modulifyRef.current) {
      observer.observe(modulifyRef.current);
    }

    return () => {
      if (modulifyRef.current) {
        observer.unobserve(modulifyRef.current);
      }
    };
  }, [isInView]);

  const modules = [
    {
      title: 'Drowning in Data',
      description: "When the flood of data feels overwhelming, and you're not able to extract meaningful insights.",
      imageSrc: "/images/Increased-recognization.png" // Replace with actual image path
    },
    {
      title: 'Slow Decisions, Missed Opportunities',
      description: 'If decision-making is sluggish, leaving your business behind competitors who are moving faster.',
      imageSrc: "/images/Growth-and-Profits.png" // Replace with actual image path
    },
    {
      title: 'Wasting Time on Repetitive Tasks',
      description: 'When your team is bogged down by mundane, repetitive work that could be automated to unlock more creative potential.',
      imageSrc: "/images/Cost-Reduction.png" // Replace with actual image path
    },
    {
      title: 'Human Errors Holding You Back',
      description: 'If mistakes are costing you time, money, or customer trust, AI can add that critical layer of precision.',
      imageSrc: "/images/Process-Automation.png" // Replace with actual image path
    },
    {
      title: 'Personalization on a Large Scale',
      description: 'When you want to deliver personalized experiences, but your resources don’t scale with demand.',
      imageSrc: "/images/Customer-Engagement.png" // Replace with actual image path
    },
    {
      title: 'Leading Amid RapidChange',
      description: 'When competitors are leveraging AI to innovate and gain an edge, and you risk falling behind by sticking to traditional methods.',
      imageSrc: "/images/Stand-out-from-Crowd.png" // Replace with actual image path
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center  relative overflow-hidden">
          {/* Background "MODULIFY" text */}


          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={`text-[64px] leading-[68px] text-white ${monsterfont.className} mt-16`}>
            Is Your Business Ready for AI?
            </h2>
            <h3 className={`text-[21px] leading-[1.1] text-semi-white ${monsterfont1.className}`}>
            Here’s when it’s time to bring AI into your strategy:
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-[7rem]">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              imageSrc={module.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ModuleCard = ({ title, description, imageSrc }) => (
  <div className="pt-6 pl-6 pr-6 bg-black relative">
    <div className="flex items-start gap-4 mb-4">
      <div className="">
        <img
          src={imageSrc || "/images/Supply-Chain-Management.png"}
          alt={title}
          className={`w-full h-full object-contain ${style['border-design']}`}
        />
      </div>
      <div className="flex-1">
        <h3 className={`${style['modules-title']} ${monsterfont1.className} text-white`}>{title}</h3>
        <p className={`${style['modules-description']} text-semi-white`}>{description}</p>
      </div>
    </div>
    <div className={`${style['line']} absolute bottom-0 left-6 right-6 h-px `}></div>
  </div>
);

export default AIBusinessSection;
