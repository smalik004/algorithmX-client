"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../crm/style.module.css";
import style from "../erp/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const BusinessModules = () => {
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
      title: "Manufacturing",
      description:
        "Optimize production scheduling, cost management, and quality control through integrated insights across the manufacturing lifecycle.",
      imageSrc: "/images/Manufacturing.png",
    },
    {
      title: "Marketing & Sales",
      description:
        "Track leads, monitor campaign ROI, and automate sales pipelines with real-time analytics to improve conversion and revenue forecasting.",
      imageSrc: "/images/Marketing-and-Sales.png",
    },
    {
      title: "Supply Chain Management",
      description:
        "Gain visibility into logistics, inventory levels, and demand planning to streamline procurement and reduce delays across the supply chain.",
      imageSrc: "/images/Supply-Chain-Management.png",
    },
    {
      title: "Finance & Accounting",
      description:
        "Automate financial reporting, cost tracking, and compliance monitoring for greater accuracy, reduced errors, and operational transparency.",
      imageSrc: "/images/Finance-and-Accounting.png",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description:
        "Analyze customer behavior, manage lifecycle data, and personalize engagement using integrated marketing and sales insights.",
      imageSrc: "/images/Customer-Relationship-Management.png",
    },
    {
      title: "Analytics",
      description:
        "Generate tailored reports and dashboards that reveal operational trends, support predictive modeling, and enable proactive decision-making.",
      imageSrc: "/images/Analytics.png",
    },
    {
      title: "Inventory",
      description:
        "Manage stock across multiple locations, track turnover, and prevent shortages or overstock through automated inventory intelligence.",
      imageSrc: "/images/Inventory.png",
    },
    {
      title: "Human Resources",
      description:
        "Streamline employee management, performance tracking, and HR workflows using data-driven dashboards and predictive HR analytics.",
      imageSrc: "/images/Human-Resources.png",
    },
    {
      title: "Distribution",
      description:
        "Monitor delivery performance, invoice workflows, and order fulfillment with real-time visibility into the full distribution process.",
      imageSrc: "/images/Distribution.png",
    },
    {
      title: "Purchasing",
      description:
        "Automate POs, evaluate vendor performance, and optimize procurement using analytics that reduce cost and improve supplier reliability.",
      imageSrc: "/images/Purchasing.png",
    },
    {
      title: "Business Intelligence (BI)",
      description:
        "Centralize data from multiple modules into real-time dashboards and reports, enabling smarter decisions across your ERP ecosystem.",
      imageSrc: "/images/Business-Intelligence.png",
    },
    {
      title: "Chatbots & Virtual Assistants",
      description:
        "Leverage AI-powered bots to automate ERP interactions, send alerts, assist with data queries, and support onboarding and task navigation.",
      imageSrc: "/images/Chatbots-and-virtual-assistants.png",
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
              className={`mb-8 ${styles["outcome-text"]} ${
                monsterfont1.className
              } text-gray-600/20 transform transition-transform duration-700 ${
                isInView ? "scale-110 opacity-100" : "scale-75 opacity-0"
              } select-none`}
            >
              DECISIONS
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2
              className={`${styles["outcome-subtitle"]} ${monsterfont.className} mt-16 text-white`}
            >
              MAKE DATA-DRIVEN DECISIONS WITH
            </h2>
            <h3
              className={`${styles["outcome-subtitle"]} ${monsterfont1.className} text-white`}
            >
              BUSINESS INTELLIGENCE
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
          className={`w-full h-full object-contain ${style["border-design"]}`}
        />
      </div>
      <div className="flex-1">
        <h3
          className={`${style["modules-title"]} ${monsterfont1.className} text-white`}
        >
          {title}
        </h3>
        <p className={`${style["modules-description"]} text-semi-white`}>
          {description}
        </p>
      </div>
    </div>
    <div
      className={`${style["line"]} absolute bottom-0 left-6 right-6 h-px `}
    ></div>
  </div>
);

export default BusinessModules;
