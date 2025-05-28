'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
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

const ServiceTier = ({ title, features }) => (
  <div className="flex flex-col items-center text-white p-8 relative">
    <h3 className={`font-[300] text-[22px] font-helveticaneue  mb-6`}>{title}</h3>
    {features.map((feature, index) => (
      <p key={index} className="text-gray-400  text-[13px] font-helveticaneue  text-center">{feature}</p>
    ))}
  </div>
);

const ServicesPage = () => {
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

  const tiers = [
    {
      title: "Single Page",
      features: [
        "Single page landing page",
        "Conversion tracking",
        "Phone call tracking installation",
        "Responsive design for tablet and mobile",
        "Interactions and visual effects",
        "Premium imagery",
        "A/B testing features",
        "CRM integrations"
      ]
    },
    {
      title: "3 pages",
      features: [
        "3 unique pages",
        "Conversion tracking",
        "Phone call tracking installation",
        "Responsive design for tablet and mobile",
        "Interactions and visual effects",
        "Premium imagery",
        "A/B testing features",
        "CRM integrations"
      ]
    },
    {
      title: "5 page microsite",
      features: [
        "5 page microsite",
        "Conversion tracking",
        "Phone call tracking installation",
        "Responsive design for tablet and mobile",
        "Interactions and visual effects",
        "Premium imagery",
        "A/B testing features",
        "CRM integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto p-4">
        <div className="text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={ref}
              className={`${styles["main-scalable"]} transform transition-transform duration-700 ${monsterfont.className} ${
                isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
            >
              SERVICES
            </span>
          </div>

          <div className="relative z-10">
            <h2 className={`${styles["description"]} ${monsterfont1.className} mt-6 md:mt-16 text-white`}>
            LANDING PAGE
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white`}>
            DESIGN TIERS
            </h2>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <React.Fragment key={tier.title}>
                <ServiceTier title={tier.title} features={tier.features} />
                {index < tiers.length - 1 && (
                  <div className="hidden md:block w-px bg-white absolute h-[50%] " 
                       style={{ left: `${(index + 1) * (100/3)}%` }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;