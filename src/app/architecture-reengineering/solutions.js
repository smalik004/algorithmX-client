'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from  '../app-development/style.module.css'
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
  weight: '100',
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

const AiOptmizationServices = () => {
  const [isInView, setIsInView] = useState(false);
  const multifacetedRef = useRef(null);
    
  const services = [
    {
      title: "Smart Architectural Solutions",
      description: "Our team of digital transformation consulting experts specializes in creating technology blueprints that are robust, scalable, and forward-looking. We design systems that meet your current needs and grow with your vision. Our strategic architecture ensures your technology investments directly contribute to business growth. Trust us to be the architects of your success.",
      borderColor: styles.border1,
    },
    {
      title: "Upgrading Legacy Systems​",
      description: "We specialize in business transformation consulting and re-engineering solutions that provide extended life to your aging systems. Our goal is to modernize your tech infrastructure, ensuring it remains competitive and efficient in today's fast-paced digital landscape. Our customized modernization strategies are designed to boost productivity and drive profitability.",
      borderColor: styles.border1,
    },
    {
      title: "Cloud Migration & Optimization",
      description: "We assess your existing infrastructure, identify cloud opportunities, and ensure a secure transition to platforms like AWS, Azure, or Google Cloud, enhancing scalability and cost-effectiveness while safeguarding data integrity.",
      borderColor: styles.border2,
    },
    {
      title: "Maximizing Performance​",
      description: "Our experts at Copper Digital fine-tune enterprise apps and infrastructure to boost speed, responsiveness, and resource efficiency. Our performance optimization strategies ensure your systems handle growing workloads, providing an outstanding user experience and enhance customer satisfaction.",
      borderColor: styles.border3,
    },
    {
        title: "Scalability & Reliability​",
        description: "We ensure your systems can expand effortlessly as your operations grow. We prioritize reliability, ensuring your digital assets are available whenever you need them, without fail. Our scalable solutions support your business expansion while maintaining uninterrupted operations.​",
        borderColor: styles.border4,
      },
      {
        title: "Robust Security​",
        description: "At Copper Digital, your security is our top concern. We implement strong measures to protect your data and systems from evolving threats. Trust our expertise to safeguard your digital assets at all times. Our security measures protect your reputation, customer trust, and business continuity.",
        borderColor: styles.border5,
      },
      {
        title: "Cost-Efficiency & ROI Focus​",
        description: "We understand the importance of managing costs. We ensure efficient systems that enhance performance without breaking the bank. Our services deliver a healthy return on investment, ensuring your tech upgrades make financial sense and contribute to your success, maximizing ROI on your technology investments.​",
        borderColor: styles.border2,
      },
      {
        title: "Cloud Management & Efficiency",
        description: "Our services keep your cloud resources operating at their peak. We provide continuous monitoring and management to optimize performance, cost-efficiency, and security. With our expertise, you can maximize your cloud investment for high availability and scalability.",
        borderColor: styles.border3,
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
            SOLUTIONS
            </span>
          </div>
          {/* Main titles with relative positioning to appear above the background text */}
          <div className="relative z-10 mt-[50px]">
            <h2 className={` ${style["multi-subtitle"]} ${monsterfont1.className} text-white`}>
            Accelerating Business Transformation with
            </h2>
            <h3 className={` ${style["multi-subtitle"]} ${monsterfont1.className} text-white`}>
            AI-Enabled Solutions
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

export default AiOptmizationServices;