'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css"
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback : ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback : ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback : ["sans-serif"],
});

const TiktokServices = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (scalableRef.current) {
      observer.observe(scalableRef.current);
    }

    return () => {
      if (scalableRef.current) {
        observer.unobserve(scalableRef.current);
      }
    };
  }, [isInView]);

  const services = [
    {
      id: '01',
      title: 'Go Viral the Right Way',
      description: "As experts who run TikTok ads in USA, we understand that viral success isn't about luck—we know the tactics that give you the best shot at real reach.",
      image: '/images/Go-Viral-the-Right-Way.png',
    },
    {
      id: '02',
      title: 'Track Every Detail',
      description: "Get insights in real-time. TikTok's analytics tools let you monitor performance down to the finest detail. Our TikTok ads agency ensures your campaigns stay optimized, tweaking them as we go to keep improving results.",
      image: '/images/Track-Every-Detail.png',
    },
    {
      id: '03',
      title: "Build Your Brand's Story",
      description: "TikTok is perfect for creative storytelling. We help you craft a narrative that sticks, with ads that capture attention and leave a lasting impression.",
      image: "/images/Build-Your-Brand's-Story.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white text-[46px] leading-[52px] md:text-[64px] md:leading-[68px] ${monsterfont2.className} mb-4`}>
          Benefits of Tiktok Ads Management
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles["service-card1"]} relative group rounded-lg p-7 transition-all duration-700   ${styles["box-color"]} transform
                ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <h3 className={`text-[18px] leading-[1.1] font-helveticaneue font-[400] text-white  transition-colors duration-300 mb-[8px]`}>
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p className={`text-semi-white font-[300] text-[13px] leading-[2] font-helveticaneue transition-colors duration-300`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiktokServices;