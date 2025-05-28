'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../crm/style.module.css';
import style from './style.module.css';
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


const ERPModules = () => {
  const [isInView, setIsInView] = useState(false);
  const modulifyRef = useRef(null); // Reference for the MODULIFY text

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true); // Set to true when text enters the view
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is in view
    );

    if (modulifyRef.current) {
      observer.observe(modulifyRef.current);
    }

    return () => {
      if (modulifyRef.current) {
        observer.unobserve(modulifyRef.current);
      }
    };
  }, [isInView]);

  const modules = [
    {
      title: 'Manufacturing',
      description: 'The manufacturing module helps with organizing and improving all aspects of the manufacturing process, including handling bills, managing costs, planning production schedules, and maintaining quality standards.',
      imageSrc: "/images/Manufacturing.png" // Replace with actual image path
    },
    {
      title: 'Marketing and Sales',
      description: 'We create the best ERP for service companies as our marketing and sales module allows to handle and automate sales and marketing functions such as tracking opportunities, managing leads, and overseeing campaigns.',
      imageSrc: "/images/Marketing-and-Sales.png" // Replace with actual image path
    },
    {
      title: 'Supply Chain Management',
      description: 'AlgorithmX builds a powerful supply chain management module that helps in optimizing several supply chain elements like logistics, inventory control, forecasting demand, and purchasing.',
      imageSrc: "/images/Supply-Chain-Management.png" // Replace with actual image path
    },
    {
      title: 'Finance and Accounting',
      description: 'With our best ERP for financial services, we assist companies in carrying out transactions, creating financial statements and tracking costs, resulting in improved financial precision, streamlined accounting processes, and minimized errors.',
      imageSrc: "/images/Finance-and-Accounting.png" // Replace with actual image path
    },
    {
      title: 'Customer Relationship Management',
      description: 'With our ERP development services, we empower organizations to analyze their customers\' interactions, manage customer information, and automate marketing and sales activities using customer relationship management module that offers a coherent environment to boost sales and optimize customer focused operations.',
      imageSrc: "/images/Customer-Relationship-Management.png" // Replace with actual image path
    },
    {
      title: 'Analytics',
      description: 'Our leading ERP development company develops ERP analytics module that helps businesses better understand their performances and operations. This module is employed by conducting in-depth analysis, creating tailored reports, and visually presenting diverse data to make better business decisions.',
      imageSrc: "/images/Analytics.png" // Replace with actual image path
    },
    {
        title: 'Inventory',
        description: 'Companies can easily manage their inventory across various sites, analyze costs, and automate transactions using the inventory module as it offers a platform to prevent shortages and manage excess inventory, enhancing precision and streamlining inventory operations.',
        imageSrc: "/images/Inventory.png" // Replace with actual image path
      },
      {
        title: 'Human Resources',
        description: 'Our ERP development company, AlgorithmX builds ERP for professional services, which involves creating HR modules that enable businesses to manage employee data, automate HR responsibilities, and monitor performance indicators, lowering administrative burdens, accelerating HR operations and efficiency.',
        imageSrc: "/images/Human-Resources.png" // Replace with actual image path
      },
      {
        title: 'Distribution',
        description: 'The distribution module allows companies to monitor deliveries, streamline invoicing procedures, and handle customer requests. it offers a platform with user-friendly interface for boosting interaction and visibility at various phases of distribution process.',
        imageSrc: "/images/Distribution.png" // Replace with actual image path
      },
      {
        title: 'Purchasing',
        description: 'Our ERP development services ease the procurement process of companies with the help of the ERP purchasing module. This module includes generating purchase orders, evaluating supplier performance, and automating the workflow.',
        imageSrc: "/images/Purchasing.png" // Replace with actual image path
      },
      {
        title: 'Business Intelligence',
        description: "The ERP software's business intelligence module enables businesses to produce real-time reports, analyze data, and make better decisions, assisting companies to analyze information from different sources by means of BI Platforms, produce dashboards and reports, and make more data-driven decisions.",
        imageSrc: "/images/Business-Intelligence.png" // Replace with actual image path
      },
      {
        title: 'Chatbots and virtual assistance',
        description: 'AlgorithmX’s ERP development services create Virtual assistants that automate tasks like sending inventory alerts and updating customers. Also, Chatbots help users navigate through ERP systems and support in tasks such as employee onboarding.',
        imageSrc: "/images/Chatbots-and-virtual-assistants.png" // Replace with actual image path
      },
      

  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[120px] relative overflow-hidden">
          {/* Background "MODULIFY" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={modulifyRef}
              className={`mb-8 ${styles['outcome-text']} ${monsterfont1.className} text-gray-600/20 transform transition-transform duration-700 ${
                isInView ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              } select-none`}
            >
              MODULIFY
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={`${styles['outcome-subtitle']} text-white ${monsterfont.className} mt-16`}>
              BUILDING PREMIUM
            </h2>
            <h3 className={`${styles['outcome-subtitle']} text-white ${monsterfont1.className}`}>
              ERP MODULES
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              imageSrc={module.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ModuleCard = ({ title, description, imageSrc }) => (
  <div className="pt-6 pl-6 pr-6 bg-black relative">
    <div className="flex items-start gap-4 mb-4">
      <div className="">
        <img
          src={imageSrc || "/images/Supply-Chain-Management.png"}
          alt={title}
          className={`w-full h-full object-contain ${style['border-design']}`}
        />
      </div>
      <div className="flex-1">
        <h3 className={`${style['modules-title']} text-white ${monsterfont1.className}`}>{title}</h3>
        <p className={`${style['modules-description']} text-semi-white`}>{description}</p>
      </div>
    </div>
    <div className={`${style['line']} absolute bottom-0 left-6 right-6 h-px `}></div>
  </div>
);

export default ERPModules;
