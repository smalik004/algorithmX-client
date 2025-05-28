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

const FacebookServices = () => {
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
      title: 'Excellent level of granularity',
      description: "Target ideal audiences via age range, demographics, behaviors, interests, and much more.",
      image: '/images/Excellent-level-of-granularity-01.png',
    },
    {
      id: '02',
      title: 'Take advantage of robust analytics',
      description: 'Know how well your Facebooks ads are performing and engaging with the audience.',
      image: '/images/Take-advantage-of-robust-analytics-02.png',
    },
    {
      id: '03',
      title: 'Increased advertising speed',
      description: 'Running Facebook ads is a fast way to drive conversions and traffic.',
      image: '/images/Increased-advertising-speed-03.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white text-[46px] leading-[52px] md:text-[64px] md:leading-[68px] ${monsterfont2.className} mb-4`}>
          Benefits of Facebook Ads Management
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
                  className="w-12 h-12 object-cover rounded-md "
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

export default FacebookServices;