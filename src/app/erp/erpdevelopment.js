'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
import { Montserrat } from "next/font/google";
import  style from './style.module.css'

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const ERPProcess = () => {
  const [isInView, setIsInView] = useState(false);
  const journeyRef = useRef(null);

  const steps = [
    {
      title: 'Discovery',
      description: 'Analysis of business requirements and engineering of ERP needs.',
      color: 'bg-[#fff200]',
      textColor: 'text-[#fff200]',
    },
    {
      title: 'Technical design',
      description: 'Crafting secure, scalable architecture and role-specific UX/UI for ERP software.',
      color: 'bg-[#ff793f]',
      textColor: 'text-[#ff793f]',
    },
    {
      title: 'ERP project planning',
      description: 'Defining project scope, success metrics, team, timelines, budget, risks, and mitigation.',
      color: 'bg-[#EA2027]',
      textColor: 'text-[#EA2027]',
    },
    {
      title: 'ERP development',
      description: 'Creating new solutions, modernizing existing ERP, or customizing market-available ERPs.',
      color: 'bg-[#32ff7e]',
      textColor: 'text-[#32ff7e]',
    },
    {
      title: 'Quality assurance',
      description: 'Conducting thorough testing concurrently with coding.',
      color: 'bg-[#00b894]',
      textColor: 'text-[#00b894]',
    },
    {
      title: 'Integration',
      description: 'Establishing connections among ERP modules and integrating ERP with systems.',
      color: 'bg-[#b71540]',
      textColor: 'text-[#b71540]',
    },
    {
      title: 'Data migration',
      description: 'Migrating enterprise data to ERP from spreadsheets or previous systems.',
      color: 'bg-[#00a8ff]',
      textColor: 'text-[#00a8ff]',
    },
    {
      title: 'Deployment',
      description: 'Configuring ERP infrastructure, deploying solutions, and transferring knowledge to users.',
      color: 'bg-[#273c75]',
      textColor: 'text-[#273c75]',
    },
    {
      title: 'User training',
      description: 'Creating user manuals and maintenance guides; providing in-person or remote training.',
      color: 'bg-[#be2edd]',
      textColor: 'text-[#be2edd]',
    },
    {
      title: 'After-launch services',
      description: 'Ongoing ERP software support and evolution.',
      color: 'bg-[#6D214F]',
      textColor: 'text-[#6D214F]',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    return () => {
      if (journeyRef.current) {
        observer.unobserve(journeyRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Scalable "Journey" Text */}
        <div className="text-center mb-12 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={journeyRef}
              className={`text-7xl md:text-9xl text-gray-800 font-extrabold ${styles['main-scalable']}   ${monsterfont.className} transform transition-transform duration-700 ${
                isInView ? `${styles['scale-110']} ${styles['opacity-100']}` : `${styles['scale-75']} ${styles['opacity-0']}`
              }`}
            >
              JOURNEY
            </span>
          </div>
          <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-20 text-white`}>
            STEP-BY-STEP PROCESS OF
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
              ERP DEVELOPMENT
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-24 p-4 border-b-2 border-gray-800 hover:border-transparent has-[.group:hover_+_&]:border-transparent last:border-b-0"
            >
              {/* Vertical line */}
              <div
                className={`absolute left-0 top-0 h-full w-[2px] ${step.color} transition-all duration-200 group-hover:-translate-x-3 group-hover:bg-blue-500`}
              />
              {/* Title */}
              <div className={`w-48 ${step.textColor} ${style["dev-title"]} font-medium md:pl-6`}>{step.title}</div>
              {/* Description */}
              <div className={`${style["dev-description"]}`}>{step.description}</div>
              {/* Hover effect */}
              <div className="absolute -top-2 left-0 right-0 h-2 bg-black opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPProcess;
