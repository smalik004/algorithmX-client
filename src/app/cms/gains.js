'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from 'next/font/google';
import styles from "../android-app/style.module.css";
import style from '../front-end/style.module.css'


const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"400",
  fallback: ["sans-serif"],
  
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback: ["sans-serif"],
})
const monsterfont2 = Montserrat({
    subsets: ['latin'],
    weight: '700',
    fallback: ["sans-serif"],
  });
  
  const monsterfont3 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
  });

const services = [
  {
    title: "Access Ready-to-use Plugins",
    description: "Extensive plugins are available within this sizable community, giving business owners a choice for finding a unique solution to fulfill their requirements.",
    image: "/images/ai-img.svg", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "Lower Maintenance Cost",
    description: "A Content Management System (CMS) is generally used for building and managing websites, and it enables even non-technical individuals to easily publish content on a website as well as monitor it effectively.",
    image: "/images/IoT-img.svg", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "No Developers Required",
    description: "Quality content serves as the heartbeat of every website necessitating updates to remain engaging and relevant over time. Content Management Systems (CMSs) facilitate smoother content creation with a user-friendly interface making the process seamless and hassle-free.",
    image: "/images/blockchain-img.svg", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "Complete Content Control",
    description: "A well-designed CMS makes it easy for businesses to generate, update, release and store content facilitating effective dissemination of all kinds of data and information.",
    image:  "/images/cloud-img.svg",  // Replace with the actual path
    alt: "Testing Icon",
  },
  {
    title: "Improvise Customer Service",
    description: "A CMS collects user information on different digital platforms, aiding in better understanding of how customers engage with your brand. Furthermore, it offers insights into how a business can adjust based on user interactions.",
    image: "/images/AR.svg",  // Replace with the actual path
    alt: "Deployment Icon",
  },
  {
    title: "Manage SEO Effectively",
    description: "A CMS automates the creation of URLSs for all pages of your website. and a more powerful CMS also includes SEO capabilities. This assists in improving the visibility of the content on search engines ultimately supporting business growth.",
    image:"/images/metaverse.svg", // Replace with the actual path
    alt: "Support Icon",
  },
];

const CMSServicesGrid = () => {
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
      <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={allInOneRef}
              className={`mb-8 ${style["main-allinone"]} transform transition-transform duration-700 ${monsterfont2.className} ${
                isInView ? `${style['scale-110']} ${style['opacity-100']}` : `${style['scale-75']} ${style['opacity-0']}`
              }`}
            >
            GAINS
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2 className={` ${style["multi-subtitle"]} ${monsterfont3.className} text-white`}>
            BENEFITS OF ADOPTING CMS
            </h2>
            <h3 className={` ${style["multi-subtitle"]} ${monsterfont2.className} text-white`}>
            FOR YOUR BUSINESS
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
          <div
          key={index}
          className={`bg-black ${styles["box"]} `}>
              <img 
                src={service.image} 
                alt={service.alt} 
                className={` object-contain rounded-lg  ${styles["indus-card-figure"]}  `}
              />
              <h3 className={` ${styles["and-title2"]} font-helveticaneue  transition-colors duration-300 `}>
                {service.title}
              </h3>
              <p className={` text-semi-white  ${styles["and-description"]} font-helveticaneue  transition-colors duration-300 `}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CMSServicesGrid;
