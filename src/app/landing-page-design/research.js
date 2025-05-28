'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback : ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback : ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback : ["sans-serif"],
});

const LandingServices = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger animation when 50% of the component is in view
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
      title: 'Responsive Design',
      description: 'Your landing page design will look stunning on any screen, browser, or device, ensuring a seamless experience for every visitor.',
      image: '/images/Responsive-Design.png',
    },
    {
      id: '02',
      title: 'Custom Imagery',
      description: 'We ensure your visuals stand out and complement your brand. Whether it’s custom graphics or hand-picked stock images, your design and aesthetics are always on point.',
      image: '/images/Custom-Imagery.png',
    },
    {
      id: '03',
      title: 'Creative Copywriting',
      description: 'Our landing page designers craft messaging that re flects your brand’s personality, setting you apart from the competition and making a real connection with your audience.',
      image: '/images/Creative-Copywriting.png',
    },
    {
      id: '04',
      title: 'A/B Testing',
      description: 'From headlines to form fields, we constantly test and refine your page for optimal performance, because there’s always room to improve.',
      image: '/images/Creative-Copywriting.png',
    },
    {
      id: '05',
      title: 'Form Integrations',
      description: 'We’ll seamlessly integrate form submissions and phone tracking into your existing marketing tools and CRM.',
      image: '/images/Form-Integrations.png',
    },
    {
      id: '06',
      title: 'CRM Integrations',
      description: 'Whether capturing leads or driving phone calls, we’ll ensure your landing page integrates flawlessly with your CRM system.',
      image: '/images/CRM-Integrations.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] ${monsterfont1.className} mb-4`}>
           RESEARCH + DESIGN = <br/>
           <span className={` text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] ${monsterfont3.className}`}>MORE CONVERSIONS</span>
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className={`text-semi-white ${styles["video-subtitle"]} ${monsterfont2.className}  `}>
          Create the best landing page designs that capture leads and drive sales with a design optimized for your business goals. At AlgorithmX, our creative landing page design company specializes in crafting visually stunning and highly functional landing pages that boost conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
            key={service.id}
            className={`${styles["service-card1"]} relative group rounded-lg p-7 transition-all duration-700  ${styles["box-color"]} transform
              ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >

              <h3 className={`${styles["video-title"]} text-white font-helveticaneue font-[600] transition-colors duration-300`}>
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p className={`text-semi-white font-helveticaneue ${styles["video-description"]}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
