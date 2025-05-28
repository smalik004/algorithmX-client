'use client'
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import styles from '../front-end/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});



const CRMSystem = () => {
    const [inView, setInView] = useState(false); // To track visibility
    const ref = useRef(null); // Reference for the component
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Disconnect observer after triggering once
          }
        },
        { threshold: 0.1 } // Trigger when 50% of the component is visible
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) observer.disconnect(); // Clean up observer
      };
    }, []);
    const services = [
      {
        icon: (
          <img
            src="/images/CRM-migration.png"
            alt="CRM Migration"
            className="w-[80px] h-[80px]"
          />
        ),
        title: 'CRM migration',
        description:
          'Our expert CRM developer assists in the seamless transfer of your customer data and CRM to a new platform, ensuring data precision and minimizing interruptions to your business’s functioning. Additionally, our team offers training for transitioning to a new system easily.',
      },
      {
        icon: (
          <img
            src="/images/CRM-testing.png"
            alt="CRM Testing"
            className="w-[80px] h-[80px]"
          />
        ),
        title: 'CRM testing',
        description:
          'Our leading CRM development company thoroughly evaluates the features, efficiency, safety, and integrations of your CRM. This evaluation process provides you with details on any performance challenges, offering actionable advice for addressing them efficiently.',
      },
      {
        icon: (
          <img
            src="/images/CRM-improvement.png"
            alt="CRM Improvement"
            className="w-[80px] h-[80px]"
          />
        ),
        title: 'CRM Improvement',
        description:
          'AlgorithmX offers maintenance for your CRM systems where we keep your system up to date to prevent any issues related to data consistency, accessibility, security and more. Also, we are highly reliable as we readily apply new features and make workflow adjustments as may be required.',
      },
    ];
    

  return (
    <div className="min-h-screen bg-black text-white p-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className={`${styles["tech-title"]} ${monsterfont1.className}  mb-4`}>OPTIMIZE YOUR</p>
          <h2 className={`${styles["scale-subtitle"]} ${monsterfont2.className} `}>EXISTING CRM SYSTEM</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {services.map((service, index) => (
            <div
            key={index}
            className={`relative p-6 bg-gradient-to-b from-black via-[#2a3b4e] to-black rounded-lg
              transition-all duration-300 group hover:bg-[rgba(39,117,255,.6)] hover:shadow-[0px_20px_60px_0px_rgba(39,117,255,0.4)] overflow-hidden w-full h-[450px]`}
          >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className={`${styles["animate-slideDown"]} mb-4 ${
                    inView ? styles["start-animation"] : ""
                  }`}
                >
                  {service.icon}
                </div>
                <div
                  className={`${styles["animate-slideUp"]} ${
                    inView ? styles["start-animation"] : ""
                  }`}
                >
                  <h3 className={`${styles["scale-title"]} ${monsterfont3.className} mt-5  mb-4`}>{service.title}</h3>
                  <p className={`${styles["scale-description"]} font-helveticaneue  `}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default CRMSystem;
