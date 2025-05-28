'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "./style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
  fallback: ["sans-serif"],
})
const monsterfont2 = Montserrat ({
  subsets : ["latin"],
  weight :"800",
  fallback: ["sans-serif"],
})
const monsterfont3 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})
const monsterfont4 = Montserrat ({
  subsets : ["latin"],
  weight :"600",
  fallback: ["sans-serif"],
})


const TechGrid = () => {
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

  const BigDataIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      width="64" height="64"
    >
      <line
        className="lievo-savelinecap"
        fill="none"
        stroke="#A5B5B6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="20.37"
        y1="27.33"
        x2="39.68"
        y2="17.77"
      ></line>
  
      {/* Circles with Blue Stroke */}
      <path
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M51,15c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6s2.69-6,6-6C48.31,9,51,11.69,51,15z"
      ></path>
  
      <line
        className="lievo-savelinecap"
        fill="none"
        stroke="#A5B5B6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="20.37"
        y1="32.67"
        x2="39.68"
        y2="42.23"
      ></line>
  
      <path
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M51,45c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C48.31,39,51,41.69,51,45z"
      ></path>
  
      <path
        className="lievo-altstroke"
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M21,30c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C18.31,24,21,26.69,21,30z"
      ></path>
    </svg>
  );
  const CustomIcon = () => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      width="64"
      height="64"
    >
      <polyline
        className="lievo-savelinecap"
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="30,49 23,49 30,40 37,49 30,49"
      />
      <polyline
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeMiterlimit="10"
        points="30,49 41,49 41,53 19,53 19,49 30,49"
      />
      <line
        className="lievo-savelinecap"
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="41.37"
        y1="18.07"
        x2="38.54"
        y2="26.56"
      />
      <line
        className="lievo-savelinecap"
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        x1="31.46"
        y1="19.49"
        x2="39.95"
        y2="16.66"
      />
      <path
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M43.41,14.59c0.78,0.78,0.78,2.05,0,2.83c-0.78,0.78-2.05,0.78-2.83,0c-0.78-0.78-0.78-2.05,0-2.83S42.63,13.8,43.41,14.59z"
      />
      <path
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M35,23.02l12.02,12.02c-6.64,6.64-17.4,6.64-24.04,0c-6.64-6.64-6.64-17.4,0-24.04L35,23.02"
      />
    </svg>
  );
  const Blockchain = () => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      width="64"
      height="64"
    >
      <path
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M29,7c12.7,0,23,10.3,23,23c0,12.7-10.3,23-23,23C16.3,53,6,42.7,6,30C6,17.3,16.3,7,29,7z"
      />
      <path
        fill="none"
        stroke="#69adff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M29,21v-6 M29,39v6M23,35.4v0.9c0,1.49,1.79,2.7,4,2.7h4c2.21,0,4-1.61,4-3.6v-1.8c0-1.99-1.79-3.6-4-3.6h-4c-2.21,0-4-1.61-4-3.6v-1.8c0-1.99,1.79-3.6,4-3.6h4c2.21,0,4,1.21,4,2.7v0.9"
      />
    </svg>
  );
  
  const BigDataIcon1 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      width="64" height="64"
    >
      <line
        className="lievo-savelinecap"
        fill="none"
        stroke="#A5B5B6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="20.37"
        y1="27.33"
        x2="39.68"
        y2="17.77"
      ></line>
  
      {/* Circles with Blue Stroke */}
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M51,15c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6s2.69-6,6-6C48.31,9,51,11.69,51,15z"
      ></path>
  
      <line
        className="lievo-savelinecap"
        fill="none"
        stroke="#A5B5B6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="20.37"
        y1="32.67"
        x2="39.68"
        y2="42.23"
      ></line>
  
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M51,45c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C48.31,39,51,41.69,51,45z"
      ></path>
  
      <path
        className="lievo-altstroke"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeMiterlimit="10"
        d="M21,30c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C18.31,24,21,26.69,21,30z"
      ></path>
    </svg>
  );
  const Blockchain1 = () => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      width="64"
      height="64"
    >
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M29,7c12.7,0,23,10.3,23,23c0,12.7-10.3,23-23,23C16.3,53,6,42.7,6,30C6,17.3,16.3,7,29,7z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M29,21v-6 M29,39v6M23,35.4v0.9c0,1.49,1.79,2.7,4,2.7h4c2.21,0,4-1.61,4-3.6v-1.8c0-1.99-1.79-3.6-4-3.6h-4c-2.21,0-4-1.61-4-3.6v-1.8c0-1.99,1.79-3.6,4-3.6h4c2.21,0,4,1.21,4,2.7v0.9"
      />
    </svg>
  );
  
  
  
const technologies = [
  {
    icon:<BigDataIcon />,
    title: "BIG DATA",
    isGrey: false,
    animationClass: styles['slide-in-left'] // Corrected class import
  },
  {
    icon: <CustomIcon />,
    title: "INTERNET OF THINGS",
    isGrey: true,
    animationClass: styles['fade-in'] // Corrected class import
  },
  {
    icon:<Blockchain/>,
    title: "BLOCKCHAIN",
    isGrey: false,
    animationClass: styles['slide-in-right'] // Corrected class import
  },
  {
    icon:<BigDataIcon1 />,
    title: "AUGMENTED REALITY (AR)",
    isGrey: true,
    animationClass: styles['slide-in-left'] // Corrected class import
  },
  {
    icon: <CustomIcon />,
    title: "VIRTUAL REALITY (VR)",
    isGrey: false,
    animationClass: styles['fade-in'] // Corrected class import
  },
  {
    icon: <Blockchain1 />,
    title: "ARTIFICIAL INTELLIGENCE",
    isGrey: true,
    animationClass: styles['slide-in-right'] // Corrected class import
  }
];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 relative pt-20 pb-15 w-full">
          {/* Background "MULTIFACETED" text with zoom-in effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              ref={scalableRef}
              className={` ${styles["multi-title"]} ${monsterfont1.className} text-gray-600/20 select-none transform transition-transform duration-700 ${
                isInView ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
             ADVANCED TECHNOLOGIES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-20">
            <h2 className={` ${styles["tech-subtitle"]} ${monsterfont3.className} text-white`}>
             WE'RE
            </h2>
            <h3 className={` ${styles["tech-subtitle"]} ${monsterfont2.className} text-white`}>
             SKILLED IN
            </h3>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {technologies.map((tech) => (
          
            <div
            key={tech.title}
            className={`${
              isInView ? tech.animationClass : ''
            } ${tech.isGrey ? 'bg-[#0f0f0f]' : 'bg-black'} w-full h-60 p-8 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] ${
              !tech.isGrey ? styles["bordera"] : 'rounded-[10px]'
            }`}
          >
            <div className="text-blue-400 ">{tech.icon}</div>
            <h3 className={`  ${monsterfont4.className} text-white text-center text-[14px] leading-[24px] mt-[22px] tracking-[0.1em]  `}>{tech.title}</h3>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechGrid;
