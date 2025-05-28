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
      title: "Targeted Audience Reach",
      content: "Utilize advanced targeting options to reach specific demographics, interests, behaviors, and locations. This ensures that your ads are shown to the most relevant audience for your business."
    },
    {
      title: "Diverse Ad Formats",
      content: "Choose from various ad formats including photo ads, video ads, carousel ads, and Stories ads. Each format offers unique ways to showcase your brand and engage with your audience."
    },
    {
      title: "Performance Analytics",
      content: "Access detailed analytics and reporting tools to monitor ad performance. Track key metrics such as impressions, engagement, and conversions to optimize campaigns and maximize ROI."
    },
    {
      title: "Story Ads",
      content: "Create immersive full-screen ads that appear between users' Stories. This format leverages the popularity of Instagram Stories to capture attention and drive user interaction."
    },
    {
      title: "Shoppable Ads",
      content: "Enable users to shop directly from your ads by tagging products. This seamless integration of shopping features allows for a smooth transition from browsing to purchasing, enhancing the customer experience and boosting sales."
    }
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
            SERVICES
            </h2>
            <h2 className={` ${styles["description"]} ${monsterfont.className}  text-white`}>
            FOR EVERYONE
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
