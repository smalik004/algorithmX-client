'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from "./style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});


const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '800',
  fallback: ["sans-serif"],
});

const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});

const services = [
  {
    title: "Server-Side Scripting",
    description: "In order to manage dynamic content generation and communication with databases, our specialized back end developer develops server-side scripts using languages like Ruby, PHP, Python, or Node.js.",
    image: "images/Server.png",
    alt: "Consultation Icon",
  },
  {
    title: "Database Management",
    description: "Our back end development company utilizes technologies like PostgreSQL, MySQL, SQLite, or MongoDB to establish and administer databases to efficiently store web data and recover it.",
    image: "images/Database.png",
    alt: "Design Icon",
  },
  {
    title: "User Authentication and Authorization",
    description: "AlgorithmX offers an expert back end developer who uses encryption, hashing, and session handling techniques to develop user authentication and authorization systems in order to control access to website data and safeguard confidential information.",
    image: "images/User-Authentication.png",
    alt: "Custom Development Icon",
  },
  {
    title: "Web Services/API Development",
    description: "Our on demand back end web development solutions include building APIs and web services that facilitate communication between websites and other external systems, enabling third-party services integration or development of mobile applications.",
    image: "images/Web-Services.png",
    alt: "Testing Icon",
  },
  {
    title: "Security and Compliance",
    description: "We enforce security measures to prevent frequent internet threats like cross-site scripting (XSS) and SQL injection and ensure adherence to data protection laws such as GDPR or HIPAA.",
    image: "images/Security.png",
    alt: "Deployment Icon",
  },
  {
    title: "Data Analysis and Insights",
    description: "As part of our back end development services, we employ data analysis and processing features leveraging techniques like data mining, machine learning algorithms, and predictive analytics to derive valuable insights from user engagement on websites in order to tailor content and make informed business choices.",
    image: "images/Data.png",
    alt: "Support Icon",
  },
];

const BackServicesGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const enhancementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (enhancementsRef.current) {
      observer.observe(enhancementsRef.current);
    }

    return () => {
      if (enhancementsRef.current) {
        observer.unobserve(enhancementsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title with Zoom-In Effect */}
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={enhancementsRef}
              className={` ${styles["enhancements-text"]}  ${monsterfont.className}  transform transition-transform duration-700 ${
                isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]}`
              }   `}
            >
              ENHANCEMENTS
            </span>
          </div>

          {/* Main Titles */}
          <div className="relative z-10 mt-24">
            <h2 className={` ${styles["multi-subtitle"]} ${monsterfont2.className} text-white`}>ADVANCED</h2>
            <h3 className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}>INTEGRATIONS</h3>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles["card"]} hover:bg-[#1c1c1e]  hover:border-[#1c1c1e;] border border-zinc-800 group transition-colors duration-1000 ease-in-out  `}
            >
              <img
                src={service.image}
                alt={service.alt}
                className={`${styles["image1"]} object-contain `}
              />
              <h3 className={`${styles["card-title"]} font-helveticaneue  mb-4 transition-colors duration-300 `}>
                {service.title}
              </h3>
              <p className={`${styles["card-description"]} font-helveticaneue  transition-colors duration-300 `}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackServicesGrid;
