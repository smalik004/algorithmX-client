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
      title: "Banner Ads",
      content: "Static or animated images placed on websites, designed to capture user attention and drive traffic to your site. Banner ads are customizable in size and format, making them versatile for various placements and audiences."
    },
    {
      title: "Rich Media Ads",
      content: "Interactive ads that incorporate multimedia elements such as video, audio, and interactive features. Rich media ads engage users more deeply than standard banners, providing a dynamic and immersive advertising experience."
    },
    {
      title: "Video Ads",
      content: "Short video clips embedded in web pages or within online content. Video ads capture user attention effectively, convey messages quickly, and are particularly powerful for storytelling and brand building."
    },
    {
      title: "Interstitial Ads",
      content: "Full-screen ads that appear at natural transition points within an app or website, such as between levels in a game or between articles. Interstitial ads are highly visible and hard to ignore, making them effective for driving conversions."
    },
    {
      title: "Native Ads",
      content: "Ads designed to blend seamlessly with the content of the page they appear on, providing a non-disruptive user experience. Native ads match the look and feel of the surrounding content, leading to higher engagement and user trust."
    },
    {
        title: "Retargeting Ads",
        content: "Ads that target users who have previously visited your website or interacted with your content. Retargeting ads remind potential customers of your brand and encourage them to return and complete desired actions, such as making a purchase."
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
