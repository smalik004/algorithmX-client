'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
import { Plus, Minus } from 'lucide-react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback : ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback : ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback : ["sans-serif"],
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
      title: "Campaign Development and Strategy",
      content: "As a top YouTube Ads agency in the USA, we create custom campaigns based on your specific goals. We analyze your audience and competition to craft strategies that deliver results. Whether you're looking for affordable YouTube advertising services in California or aiming to target a broader national audience, we ensure your campaigns stay on track."
    },
    {
      title: "Keyword Research and Analysis",
      content: "Targeting the right keywords is essential for any successful campaign. As the best agency for YouTube ads, we conduct in-depth keyword research to see what your potential customers are searching."
    },
    {
      title: "Ad Copywriting",
      content: "We partner with you to craft engaging video scripts and text ads. Our experts create high-conversion ad copy that aligns with your marketing goals, whether you're searching for YouTube marketing agency services or need support for ad copy and script creation."
    },
    {
      title: "A/B Testing",
      content: "Our YouTube Ads management services use A/B testing to optimize every aspect of your campaign. From ad format to targeting, we continuously test and improve your ads to maximize performance and conversions."
    },
    {
      title: "Channel Management",
      content: "Your dedicated YouTube ad manager will handle everything—from bid management and budget allocation to updating ads. As the best YouTube marketing agency in the USA, we prioritize securing optimal ad placements within your budget."
    },
    {
        title: "Bid Management",
        content: "Our agile approach includes real-time bidding adjustments based on data-driven insights, landscape analysis and performance metrics. The experts at our YouTube ad agency prioritize securing optimal ad placements while operating within budget."
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
            SERVICES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-16 text-white`}>
            WHAT WE
            </h2>
            <h2 className={` ${styles["description"]} ${monsterfont.className}  text-white`}>
            OFFER
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
