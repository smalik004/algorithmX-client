'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css"
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback : ["sans-serif"],
});

const YoutubeServices = () => {
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
      title: 'Unlimited Reach',
      description: "YouTube Ads is a top-of-the-funnel strategy that helps you target new users. With over 2 billion users on YouTube right now, we help you tap into this enormous audience. Whether you're targeting local, national, or international markets, our YouTube Ads management services ensure your ads reach the right people.",
      image: '/images/Unlimited-Reach.png',
    },
    {
      id: '02',
      title: 'Deep Audience Engagement',
      description: 'YouTube offers diverse ad formats, allowing us to tailor ads that connect with your audience. By working with a YouTube ads agency like ours, you build awareness, promote products, and drive engagement through personalized ad experiences.',
      image: '/images/Deep-Audience-Engagement.png',
    },
    {
      id: '03',
      title: 'Real-Time, In-Depth Reporting',
      description: "Whether you're tracking clicks, impressions, or conversions, we continuously refine your ads based on performance data to achieve the best results.",
      image: '/images/Real-Time-in-Depth-Reporting.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white text-[46px] leading-[52px] md:text-[64px] md:leading-[68px] ${monsterfont2.className} mb-4`}>
          Benefits of Youtube Ads Management
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

export default YoutubeServices;