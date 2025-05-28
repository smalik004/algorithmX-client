'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../front-end/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});

const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});

const services = [
  {
    title: 'Business Intelligence & Data Analytics',
    description:
      'Unlock operational excellence and enterprise-wide insights with our cutting-edge business intelligence systems. We transform raw, unstructured data into actionable intelligence, enabling faster, smarter, and more strategic decision-making that drives growth and innovation across your organization.',
    image: 'images/User.png',
    alt: 'Consultation Icon',
  },
  {
    title: 'Data Engineering',
    description:
      'Build a robust and future-ready data ecosystem with our comprehensive data engineering solutions. From data warehouses to lake architectures, ETL development, and seamless maintenance, we design scalable frameworks that empower you to efficiently manage, process, and utilize your data for maximum impact.',
    image: 'images/UX.png',
    alt: 'Design Icon',
  },
  {
    title: 'Data Security & Integration',
    description:
      'Safeguard your critical data assets with best-in-class security measures, ensuring confidentiality, integrity, and availability at every stage. Our data integration strategies unify diverse sources, enabling real-time data flow for seamless collaboration, analytics, and decision-making, ensuring your business operates with confidence and agility.',
    image: 'images/Front.png',
    alt: 'Custom Development Icon',
  },
  {
    title: 'Data Visualization',
    description:
      'Transform complex datasets into visually compelling narratives with dynamic charts, graphs, and dashboards. Our visualization solutions simplify the interpretation of intricate data, allowing business leaders to make informed, impactful decisions quickly and effectively.',
    image: 'images/Responsive.png',
    alt: 'Testing Icon',
  },
  {
    title: 'Predictive Modeling',
    description:
      'Drive innovation and anticipate the future with our advanced predictive modeling solutions. By leveraging machine learning and historical data analysis, we uncover trends, identify opportunities, and provide actionable insights that empower you to optimize operations, reduce risks, and enhance strategic planning.',
    image: 'images/HTML.png',
    alt: 'Deployment Icon',
  },
  {
    title: 'Big Data Analytics',
    description:
      'Discover the untapped value hidden within your massive data ecosystems. Through cutting-edge analytics tools, we help you harness the transformative power of big data, enabling data-driven excellence and ensuring you remain agile and competitive in an ever-evolving business environment.',
    image: 'images/Performance.png',
    alt: 'Support Icon',
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
              className={`mb-8 ${styles["main-allinone"]} transform transition-transform duration-700 ${monsterfont.className} ${
                isInView ? `${styles['scale-110']} ${styles['opacity-100']}` : `${styles['scale-75']} ${styles['opacity-0']}`
              }`}
            >
              SOLUTIONS
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2 className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}>
            Maximize the Value of Your Data
            </h2>
            <h3 className={` ${styles["multi-subtitle"]} ${monsterfont.className} text-white`}>
            with Our Advanced Solutions.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles["card"]} hover:bg-[#1c1c1e]  hover:border-[#1c1c1e;] border border-zinc-800 group transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={service.image}
                alt={service.alt}
                className={`${styles["image1"]} object-contain `}
              />
              <h3 className={`${styles["card-title"]} font-helveticaneue mb-4 transition-colors duration-300 `}>
                {service.title}
              </h3>
              <p className={`${styles["card-description"]} font-helveticaneue transition-colors duration-300 `}>
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
