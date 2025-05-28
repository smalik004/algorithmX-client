'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../crm/style.module.css';
import style from '../erp/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '200',
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '700',
});


const InfluencerModules = () => {
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
      title: 'Brand-Optimized Purchasing Power',
      description: 'At AlgorithmX, we are adept in influencer economics and formulate optimized costs targeting the brand ROI by leveraging purchasing power and valuable perspectives.',
      imageSrc: "/images/Brand-Optimized Purchasing-Power.png" // Replace with actual image path
    },
    {
      title: 'Global Capability',
      description: 'Being among the best influencer marketing agencies, we have a presence in more than 30 countries, offering work and producing reports in over 15 languages. Our expertise lies in crafting social media responses customized to international markets.',
      imageSrc: "/images/Global-Capability.png" // Replace with actual image path
    },
    {
      title: 'Proven Infinite Scale',
      description: 'Influencer marketing faces scalability challenges, but AlgorithmX has honed and displayed its effectiveness over time.',
      imageSrc: "/images/Proven-Infinite-Scale.png" // Replace with actual image path
    },
    {
      title: 'AI-driven brand safety analysis',
      description: 'As one of the top influencer marketing agencies, we offer reliable scalability in influencer marketing amongst many solutions that claim to ensure brand safety in today’s world.',
      imageSrc: "/images/AI-driven-brand-safety-analysis.png" // Replace with actual image path
    },
    {
      title: 'Influencer-Integrated Performance Media',
      description: 'AlgorithmX’s popular performance marketing team boosts the effectiveness of influencer campaigns while extensively increasing the worth of investment in influencers especially when carrying out influencer marketing for startups.',
      imageSrc: "/images/Influencer-Integrated-Performance-Media.png" // Replace with actual image path
    },
    {
      title: 'Influencer Experts',
      description: 'With almost a year since AlgorithmX was founded, we now boast a dedicated team of experts deeply engaged in the world of creators.',
      imageSrc: "/images/Influencer-Experts.png" // Replace with actual image path
    },
    {
        title: 'Complete Marketing Synergy',
        description: 'Merely concentrating on influencer marketing is not enough for us so we broadened our horizons to offer a wide range of the latest marketing strategies, guaranteeing comprehensive success.',
        imageSrc: "/images/Complete-Marketing-Synergy.png" // Replace with actual image path
      },
      {
        title: 'Platform Directness',
        description: 'AlgorithmX is one of the premier influencer marketing management companies and a technological partner that collaborates closely with top social platforms to help clients meet their brand goals.',
        imageSrc: "/images/Platform-Directness.png" // Replace with actual image path
      },
      {
        title: 'Measurability, Predictability, Attribution',
        description: 'Annually, our multicultural influencer marketing agency collaborates with content creators for international brands utilizing past data, and our exclusive artificial intelligence technology to find perfect fits and get foreseeable results.',
        imageSrc: "/images/Measurability-Predictability-Attribution.png" // Replace with actual image path
      },
      {
        title: 'Brand Integration Trend Analysis',
        description: 'We are always a step ahead when it comes to influencer marketing trends since we rely on industry insights, the latest data, in-house technology, and valuable partnerships to adapt to the ever-changing landscape.',
        imageSrc: "/images/Brand-Integration-Trend-Analysis.png" // Replace with actual image path
      },
      

  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[120px] relative overflow-hidden">
          {/* Background "MODULIFY" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={modulifyRef}
              className={`mb-8 ${styles['outcome-text']} ${monsterfont1.className} text-gray-600/20 transform transition-transform duration-700 ${
                isInView ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              } select-none`}
            >
             SERVICES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={`${styles['outcome-subtitle']} text-white ${monsterfont.className} mt-16`}>
            INFLUENCER MARKETING SERVICES
            </h2>
            <h3 className={`${styles['outcome-subtitle']} text-white ${monsterfont1.className}`}>
            WE OFFER
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
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
  <div className=" bg-black relative">
    <div className="flex items-start gap-4  pb-[40px]">
      <div className="">
        <img
          src={imageSrc || "/images/Supply-Chain-Management.png"}
          alt={title}
          className={`w-full h-full object-contain ${style['border-design']}`}
        />
      </div>
      <div className="flex-1" style={{ borderBottom: '1px solid gray', paddingBottom: '20px' }}>
  <h3 className={`${style['modules-title']} font-helveticaneue font-[700] text-white`}>{title}</h3>
  <p className={`${style['modules-description']} font-helveticaneue text-semi-white`}>
    {description}
  </p>
</div>

    </div>
  </div>
);

export default InfluencerModules;
