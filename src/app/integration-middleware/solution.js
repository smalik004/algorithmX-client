'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css";
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

const IntegrationServices = () => {
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
        title: 'Enterprise Application Integration (EAI) with AI',
        description: 'Maximize operational efficiency by connecting and integrating disparate enterprise applications with AI-driven solutions. Our EAI services enable real-time data synchronization, automating complex workflows and optimizing end-to-end business processes, making your organization more agile, responsive, and intelligent in its operations.',
        image: '/images/eai.webp',
      },
      {
        id: '02',
        title: 'API Development & Management',
        description: 'Harness the full potential of your data with AI-tailored API solutions. We create, develop, and manage robust APIs that ensure secure, scalable communication between your systems and external applications, unlocking new capabilities and streamlining operations with AI, enhancing automation and data flow efficiency.',
        image: '/images/api-integration.webp',
      },
      {
        id: '03',
        title: 'Middleware Implementation & Optimization',
        description: 'Strengthen your IT infrastructure with AI-driven middleware solutions that serve as the connective tissue of your ecosystem. We ensure reliable system integration, optimize performance, and deliver high availability, enabling seamless operations across all business functions, while leveraging AI for real-time optimization and predictive maintenance.',
        image: '/images/expertise_bd_3.svg',
      },
      {
        id: '04',
        title: 'Cloud Integration',
        description: 'Simplify and accelerate your cloud transition with our AI-powered cloud integration services. By connecting your legacy on-premise systems to cutting-edge cloud platforms, we create a unified, flexible, and future-proof IT landscape that enhances growth and innovation through intelligent automation and data insights.',
        image: '/images/expertise_bd_4.svg',
      },
      {
        id: '05',
        title: 'Legacy System Modernization',
        description: 'Unlock new opportunities by modernizing your legacy systems with AI integration. Using advanced AI-driven techniques, we transform outdated platforms into agile, scalable solutions, enhancing functionality and ensuring seamless compatibility with your evolving technology stack, all while reducing risks and improving efficiency.',
        image: '/images/expertise_bd_5.svg',
      },
      {
        id: '06',
        title: 'Data Integration & Management',
        description: 'Achieve data excellence with our real-time integration and management services. We centralize and synchronize your data across all systems, ensuring consistency, accuracy, and accessibility so your teams can make faster, data-driven decisions.',
        image: '/images/expertise_bd_6.svg',
      },
    ];
  
    return (
      <div className="min-h-screen bg-black p-4 md:p-8">
        <div className="max-w-6xl mx-auto" ref={scalableRef}>
          <div className="text-center mb-8 md:mb-16">
            <h1 className={`text-white text-[2rem]  leading-[2.2rem] md:text-[3.5rem] md:leading-[3.7rem] tracking-[0.06em] ${monsterfont1.className} mb-4`}>
            Transformative Digital Solutions for <br/> Seamless Integration and Operational Excellence
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
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
                <div className={`absolute top-4 right-4 text-blue-500 ${styles["number"]} `} >
                  {service.id}
                </div>
  
                <h3 className={`${styles["video-title"]} text-white  ${monsterfont3.className}  transition-colors duration-300`}>
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

export default IntegrationServices;