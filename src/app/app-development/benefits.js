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


const BenefitsSection = () => {
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
      title: 'Increased Recognition',
      description: 'Mobile app’s intuitive interface makes it easier for users to navigate and strengthens their connection with the brand.',
      imageSrc: "/images/Increased-recognization.png" // Replace with actual image path
    },
    {
      title: 'Growth & Profits',
      description: 'Mobile apps increase your sales as they are a faster and more responsive solution.',
      imageSrc: "/images/Growth-and-Profits.png" // Replace with actual image path
    },
    {
      title: 'Cost Reduction',
      description: 'Enable you to create marketing strategies without adding to your expenses.',
      imageSrc: "/images/Cost-Reduction.png" // Replace with actual image path
    },
    {
      title: 'Process Automation',
      description: 'Bring in new employees and effectively manage the business without getting bogged down by routine duties.',
      imageSrc: "/images/Process-Automation.png" // Replace with actual image path
    },
    {
      title: 'Customer Engagement',
      description: 'Build connections with your customers by being available around the clock to foster trust via mobile apps.',
      imageSrc: "/images/Customer-Engagement.png" // Replace with actual image path
    },
    {
      title: 'Stand out from Crowd',
      description: 'Build a unique mobile app that grabs your customer’s interest.',
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
            <h2 className={`text-[64px] leading-[68px] ${monsterfont.className} mt-16 text-white`}>
              Benefits
            </h2>
            <h3 className={`text-[21px] leading-[1.1] text-semi-white ${monsterfont1.className}`}>
              of Using Mobile Apps
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

export default BenefitsSection;
