'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
import { Plus, Minus } from 'lucide-react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback  : ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback  : ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback  : ["sans-serif"],
});


const AccordionItem = ({ title, content, isActive, onClick, isInView }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center py-4 text-left text-white hover:text-blue-500 transition-colors duration-300 border-t border-b border-white transform transition-transform duration-500
        }`}
      >
        <span className={`text-[21px] leading-[22px] ${monsterfont2.className} `}>{title}</span>
        {isActive ? (
          <Minus className="transition-transform duration-300" size={24} />
        ) : (
          <Plus className="transition-transform duration-300" size={24} />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="py-10 text-[15px] leading-[22px] text-semi-white font-helveticaneue">{content}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Review Your PPC Business Goals",
      content: "Before we start a PPC audit, we’ll establish what you’re hoping to achieve by using Pay Per Click as part of your marketing strategy. By understanding your business goals, we can focus our PPC audits on highlighting the actions required to achieve your overall objectives."
    },
    {
      title: "Ads Account Set Up & Structure",
      content: "We start by getting to know your business and understanding your goals. Once we’ve got that, we dig in with precision. We review your account setup from top to bottom. Is it built to maximize results or just burning through your budget?"
    },
    {
      title: "Campaign Structure Analysis",
      content: "Campaigns need strategy. We pinpoint areas where your structure might be falling short and provide solutions that can immediately lift performance."
    },
    {
      title: "Ad Group Optimisation",
      content: "Ad group structure is critical to the success of your campaigns. Ad groups need to be set up correctly to achieve the goals of your campaigns. We will make sure that your ad groups are set up with keywords you need to target and exclude, contain the number of ad variations necessary to measure content performance, and that the landing pages are highly relevant to the keywords. We’ll check that keywords are thematically well-organised and the ad copy is true to the search intent of those keywords. This will help you achieve high quality scores which directly affect the performance of your ads"
    },
    {
      title: "Keywords Audit",
      content: "We’ll take a deep-dive into your keyword strategy to identify patterns and trends beyond individual keywords. We’ll look at keywords from a campaign level on down to identify relevance, search intent and performance of the keywords. Our analysis will reveal where keywords are off subject matter, have low quality and are not returning your required CPC, CTR and conversions."
    },
    {
        title: "Impression Share",
        content: "If your ads are receiving a low impression share we will advise you how to maximise that share by improving your quality score and reviewing your bidding strategy."
      },
    {
        title: "Ad Copy and Landing Pages",
        content: "We’ll analyse your ad copy and review how well the creative, voice & tone, and messaging reflect your business and the products and services you are offering. We’ll let you know if your ads are optimised for best performance and whether you’re testing enough ad variations to learn what’s working and what’s not. As part of our PPC audits, we’ll review your landing page design and strategy to check you’re sending potential customers to highly relevant pages that have gone through a process of Conversion Rate Optimisation."
    },
    {
        title: "Budget and Bid Management",
        content: "Setting up bid management is a complicated area of PPC and easily done wrong – whether that is via automated bidding or using a third-party application. The most effective solution will differ for each business. As part of our PPC audits, we’ll ask the right questions about your scale, margins and long term sales goals to determine if your account is being managed in the best way possible."
    },
    {
        title: "Keyword analysis",
        content: "Keywords are the bread and butter of PPC, but they can’t just be left to build up. From duplicate keywords to excessive broad match campaigns, and narrow targeting scopes to poor negative keyword structure, it’s easy to go after the wrong queries that won’t get your ads seen by the right people. We help rectify that."
    },
    {
        title: "Copy review",
        content: "Are you using older ad formats? Are there errors in your copy? Our pay per click audit ensures your ads are up to date and compelling, so you can get more people clicking and lining your pockets. We also recommend an array of ad extensions and ad customisers that help you personalise your copy to improve CTR."
    },
    {
        title: "Budget & bidding optimisation",
        content: "Tired of wasting your budget on campaigns that don’t work? We analyse your bid strategies to ensure no budget is being wasted on irrelevant queries and no opportunities are being missed because campaigns lack budget."
    },
    
  ];

  return (
    <div  className="min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto p-4">
      <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SCALABLE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={ref}
              className={` ${styles["main-scalable"]} transform transition-transform duration-700 ${monsterfont.className} ${
                isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
              
            >
            WHAT DO
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-16 text-white`}>
            PPC AUDITS
            </h2>
            <h2 className={` ${styles["description"]} ${monsterfont.className} text-white`}>
            INCLUDE?
            </h2>
          </div>
        </div>
        {services.map((service, index) => (
          <AccordionItem
            key={index}
            title={service.title}
            content={service.content}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordion;
