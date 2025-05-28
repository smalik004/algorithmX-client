'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});

const CRMOutcomes = () => {
  const [isInView, setIsInView] = useState(false);
  const outcomesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (outcomesRef.current) {
      observer.observe(outcomesRef.current);
    }

    return () => {
      if (outcomesRef.current) {
        observer.unobserve(outcomesRef.current);
      }
    };
  }, [isInView]);

  const outcomes = [
    {
      icon: '/images/Faster.png',
      title: 'Faster sales cycles',
      description: 'Streamlines your sales activities by up to 30% with automation.',
    },
    {
      icon: '/images/Lead.png',
      title: 'Lead volume growth',
      description: 'Enables you to manage multi-channel marketing campaigns simultaneously and limitlessly.',
    },
    {
      icon: '/images/Workload-Reduction.png',
      title: 'Service Workload Reduction',
      description: 'Empowers your customer support with productive self-assistance tools.',
    },
    {
      icon: '/images/Enhanced-Conversions.png',
      title: 'Enhanced Conversions',
      description:
        'Authorizes your business with tailored marketing and dynamic customer segmentation across various lifecycle stages.',
    },
    {
      icon: '/images/Customer-Retention.png',
      title: 'Customer Retention',
      description:
        'Increases customer retention rate by analyzing interactions and sales records for personalized customer engagement.',
    },
    {
      icon: '/images/Quick-Service.png',
      title: 'Quick Service',
      description:
        'Makes quick access to extensive customer information easy and convenient through intelligent workflow automation.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={outcomesRef}
              className={`mb-8 ${styles['outcome-text']} ${monsterfont1.className} text-gray-600/20 transform transition-transform duration-700 ${
                isInView ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              } select-none`}
            >
              OUTCOMES
            </span>
          </div>

          <div className="relative z-10">
            <h2 className={`${styles['outcome-subtitle']} ${monsterfont.className} mt-16`}>AFTER CRM</h2>
            <h3 className={`${styles['outcome-subtitle']} ${monsterfont2.className}`}>
              IMPLEMENTATION RESULTS
            </h3>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
        >
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className={` ${styles['border-design']} w-[350px] h-auto text-center flex flex-col items-center`}
            >
              <img
                src={outcome.icon}
                alt={outcome.title}
                className="w-[50px] h-[50px] mb-6 mt-16"
              />
              <h3 className={`${styles['outcome-title']} ${monsterfont2.className} mb-8`}>
                {outcome.title}
              </h3>
              <p className={`${styles['outcome-description']} text-semi-white`}>
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CRMOutcomes;
