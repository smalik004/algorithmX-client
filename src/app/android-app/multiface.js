'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "./style.module.css";
import { Montserrat } from 'next/font/google';

// Montserrat fonts
const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});

const AppGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const multifacetedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (multifacetedRef.current) {
      observer.observe(multifacetedRef.current);
    }

    return () => {
      if (multifacetedRef.current) {
        observer.unobserve(multifacetedRef.current);
      }
    };
  }, [isInView]);

  const services = [
    { title: 'Mobile banking, billing <br /> app, wallets', image: '/images/Mobile-banking.png' },
    { title: 'Patient and hospital apps', image: '/images/Patient.png' },
    { title: 'Telehealth apps', image: '/images/Telehealth.png' },
    { title: 'Messaging and VoIP apps', image: '/images/Messaging.png' },
    { title: 'IPTV and SVOD apps', image: '/images/IPTV.png' },
    { title: 'mCommerce apps', image: '/images/mCommerce.png' },
    { title: 'Field service and mobile BI', image: '/images/Field.png' },
    { title: 'Booking and ticketing apps', image: '/images/Booking.png' },
    { title: 'Augmented reality apps', image: '/images/augmented.png' },
    { title: 'Lending apps', image: '/images/Lending.png' },
    { title: 'Insurance apps', image: '/images/Insurance.png' },
    { title: 'Investment apps', image: '/images/Investment.png' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 relative pt-20 pb-8 w-full">
          {/* Background "MULTIFACETED" text with zoom-in effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              ref={multifacetedRef}
              className={` ${styles["multi-title"]} ${monsterfont.className} text-gray-600/20 select-none transform transition-transform duration-700 ${
                isInView ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              MULTIFACETED
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-8">
            <h2 className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}>
              VARIETY OF APP
            </h2>
            <h3 className={` ${styles["multi-subtitle"]} ${monsterfont.className} text-white`}>
              WE DEVELOP
            </h3>
          </div>
        </div>

        <div className={`${styles["container1"]}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-14 md:gap-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-semi-white p-2 md:px-0 md:py-3 flex flex-col items-center justify-center text-center transition-colors duration-300"
              >
                <div className="mb-2">
                  {/* Render image instead of icon */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[50px] h-auto object-contain"
                  />
                </div>
                <h3
                  className={`${styles["multi-description"]} font-helveticaneue    mt-4 `} 
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppGrid;
