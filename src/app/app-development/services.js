'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import style from '../android-app/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '500',
  fallback: ["sans-serif"],
});

// Adding the bold font for MULTIFACETED text
const monsterfont700 = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
  });
  const monsterfont2= Montserrat({
    subsets: ['latin'],
    weight: '800',
    fallback: ["sans-serif"],
  });

const MobileAppServices = () => {
  const [isInView, setIsInView] = useState(false);
  const multifacetedRef = useRef(null);
    
  const services = [
    {
      title: "Android App Development",
      description: "Our custom mobile app development company uses Java and Kotlin to develop native Android apps. Our team of dedicated app developers in USA has mastered the particulars of the Android OS to guarantee exceptional results.",
      borderColor: styles.border1,
    },
    {
      title: "iOS App Development",
      description: "With our on demand app development services, AlgorithmX uses the Swift and Objective-C languages to develop iOS apps for iPhones and iPads. We utilize the latest tools and technologies to create unique iOS solutions, ensuring complete client satisfaction.",
      borderColor: styles.border1,
    },
    {
      title: "MVP Development",
      description: "Our custom mobile app development company validates the market by building a Minimum Viable Product (MVP) to establish product feasibility and gather user feedback with minimal investment.",
      borderColor: styles.border2,
    },
    {
      title: "Enterprise Mobile App Development",
      description: "As a leader in enterprise mobile app development in USA, we assist SMBs, startups, and global enterprises to reach new audiences by providing both native and cross-platform solutions with our custom mobile app development services.",
      borderColor: styles.border3,
    },
    {
        title: "Cross-Platform App Development",
        description: "With AlgorithmX's cross platform app development services in Los Angeles, we create versatile, efficient, and affordable mobile applications for both iOS and Android platforms using Flutter and React Native without compromising quality.",
        borderColor: styles.border4,
      },
      {
        title: "Mobile UX Design",
        description: "Our best enterprise mobile app development company comprises a design team with experience across various industries in creating mobile app designs that are user-friendly and unique, helping you stand out from your competitors.",
        borderColor: styles.border5,
      },
  ];
  
  // Refs for animation
  const boxRefs = useRef([]);
  
  // Set up intersection observer for animation for service boxes
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes when box comes into view
          entry.target.classList.remove('translate-y-20', 'opacity-0');
          entry.target.classList.add('translate-y-0', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    boxRefs.current.forEach(box => {
      if (box) {
        observer.observe(box);
      }
    });
    
    return () => {
      boxRefs.current.forEach(box => {
        if (box) {
          observer.unobserve(box);
        }
      });
    };
  }, []);
  
  // Set up intersection observer for MULTIFACETED text
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
  
  return (
    <div className="bg-black text-white min-h-screen p-8 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-16 pt-4 md:pt-8 relative">
          {/* Background "MULTIFACETED" text with zoom-in effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              ref={multifacetedRef}
              className={`${style["multi-title"]} ${monsterfont700.className} text-gray-600/20 select-none transform transition-transform duration-700 ${
                isInView ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
              SERVICES
            </span>
          </div>
          {/* Main titles with relative positioning to appear above the background text */}
          <div className="relative z-10 mt-[50px]">
            <h2 className={` ${style["multi-subtitle"]} ${monsterfont1.className} text-white`}>
            MOBILE APP
            </h2>
            <h3 className={` ${style["multi-subtitle"]} ${monsterfont2.className} text-white`}>
            DEVELOPMENT SERVICES
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => boxRefs.current[index] = el}
              className={`relative ${service.borderColor}  p-6 md:p-[30px] rounded bg-black translate-y-20 opacity-0 transition-all duration-700 ease-out`}
            >
              <div className="absolute top-4 right-4 md:top-8 md:right-8 w-20 h-20 md:w-32 md:h-32 overflow-hidden">
                <div 
                  className="w-full h-[70%] flex items-center justify-center opacity-50"
                  style={{
                    backgroundImage: "url('/images/faq_15_icon.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                />
              </div>
              <h3 className={`text-[16px]  leading=[1.4] mb-[10px] ${monsterfont.className} text-center  `}>{service.title}</h3>
              <p className="text-[16px]  leading=[1.4] text-[#83779e] text-helveticaneue text-center ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppServices;