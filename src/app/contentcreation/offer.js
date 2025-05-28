'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "./style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});

const Offer = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Trigger animation when 50% of the component is in view
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
      title: 'SEO-friendly content',
      description: 'Digital marketing content creation involves keyword research and optimized content to improve brand visibility and ranking on search results.',
      image: '/images/SEO.png',
    },
    {
      id: '02',
      title: 'Business-boosting copies',
      description: 'AlgorithmX’s effective ads and compelling CTAs drive desired engagement, boosting CTR and enhancing ROAS.',
      image: '/images/Business-.png',
    },
    {
      id: '03',
      title: 'Rapid content delivery',
      description: 'A major part of our content creation services is producing customized, high-quality content exceeding 20,000 words delivered within 48 hours.',
      image: '/images/Rapid.png',
    },
    {
      id: '04',
      title: 'Proofed, original write-ups',
      description: 'Every content piece undergoes Grammarly and premium plagiarism checks, ensuring 100% originality and 0% plagiarism.',
      image: '/images/Proofed.png',
    },
    {
      id: '05',
      title: 'Quality multilingual content',
      description: 'Our content creation agency specializes in quality content that transcends language barriers, offering delivery in multiple languages for diverse audience needs.',
      image: '/images/Quality.png',
    },
    {
      id: '06',
      title: 'Stunning visual graphics',
      description: 'Our premium graphics in video content creation elevate your content, enhancing its aesthetic appeal, and persuasive power, creating a captivating experience.',
      image: '/images/Stunning.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white  ${styles["offer"]} ${monsterfont1.className} mb-4`}>
            WHAT WE OFFER
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={` ${styles["service-card"]} relative group rounded-lg p-7 transition-all duration-700   ${styles["box-color"]} transform
                ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute top-4 right-4 text-blue-500 number ">
                {service.id}
              </div>

              <h3 className={` ${styles["offer-title"]} text-white font-helveticaneue font-bold transition-colors duration-300`}>
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p className={`text-semi-white font-helveticaneue ${styles["offer-description"]} `}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
