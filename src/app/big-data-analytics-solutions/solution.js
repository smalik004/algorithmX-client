"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../front-end-development-services/style.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";

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

const services = [
  {
    title: "Business Intelligence & Analytics",
    description:
      "Transform unstructured data into real-time insights. Our BI platforms power strategic decision-making with custom dashboards, KPI tracking, and automated reporting across the enterprise.",
    image: "/images/User.png",
    alt: "Consultation Icon",
  },
  {
    title: "Data Engineering",
    description:
      "Build modern data infrastructure—data lakes, warehouses, and ETL pipelines—designed for scale, governance, and seamless integration across cloud and on-prem environments.",
    image: "/images/UX.png",
    alt: "Design Icon",
  },
  {
    title: "Data Security & Integration",
    description:
      "Secure your data end-to-end with encryption, role-based access, and compliance controls. Our integration frameworks unify sources for clean, synchronized, and analysis-ready data.",
    image: "/images/Front.png",
    alt: "Custom Development Icon",
  },
  {
    title: "Data Visualization",
    description:
      "Enable leaders to interpret complexity at a glance. We build interactive dashboards with tools like Tableau, Power BI, and Looker—designed for clarity, speed, and real-time exploration.",
    image: "/images/Responsive.png",
    alt: "Testing Icon",
  },
  {
    title: "Predictive Modeling",
    description:
      "Leverage ML and historical patterns to forecast demand, detect anomalies, and simulate outcomes. Our models optimize planning, reduce risk, and surface proactive insights.",
    image: "/images/HTML.png",
    alt: "Deployment Icon",
  },
  {
    title: "Big Data Analytics",
    description:
      "Analyze high-velocity, high-volume data from sensors, transactions, and user behavior using platforms like Hadoop, Snowflake, and Spark. We surface patterns others miss—at scale.",
    image: "/images/Performance.png",
    alt: "Support Icon",
  },
];

const BigDataGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const allInOneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (allInOneRef.current) {
      observer.observe(allInOneRef.current);
    }

    return () => {
      if (allInOneRef.current) {
        observer.unobserve(allInOneRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "ALL-IN-ONE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={allInOneRef}
              className={`mb-8 ${
                styles["main-allinone"]
              } transform transition-transform duration-700 ${
                monsterfont.className
              } ${
                isInView
                  ? `${styles["scale-110"]} ${styles["opacity-100"]}`
                  : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
            >
              SOLUTIONS
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2
              className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}
            >
              Maximize the Value of Your Data
            </h2>
            <h2
              className={` ${styles["multi-subtitle"]} ${monsterfont.className} text-white`}
            >
              with Our Advanced Solutions.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles["card"]} hover:bg-[#1c1c1e]  hover:border-[#1c1c1e;] border border-zinc-800 group transition-colors duration-1000 ease-in-out `}
            >
              <Image
                width={32}
                height={32}
                src={service.image}
                alt={service.alt}
                className={`${styles["image1"]} object-contain `}
              />
              <h3
                className={`${styles["card-title"]} font-helveticaneue mb-4 transition-colors duration-300 `}
              >
                {service.title}
              </h3>
              <p
                className={`${styles["card-description"]} font-helveticaneue transition-colors duration-300 `}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigDataGrid;
