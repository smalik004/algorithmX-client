'use client';
import React from 'react';
import styles from "./style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});


const industries = [
  {
    id: 1,
    title: 'eCommerce',
    iconImg: './images/shopping.png', // Replace with actual image path
    color: styles["text-purple-500"],
    borderColor: styles["border-purple-light"],
  },
  {
    id: 2,
    title: 'Healthcare',
    iconImg: './images/Healthcare.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-yellow-light"],
  },
  {
    id: 3,
    title: 'Media & Entertainment',
    iconImg: './images/Media.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-purple-light"],
  },
  {
    id: 4,
    title: 'Sports & Gambling',
    iconImg: './images/Sports.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-red-light"],
  },
  {
    id: 5,
    title: 'Business Services',
    iconImg: './images/Business-Services-1.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-green-light"],
  },
  {
    id: 6,
    title: 'Real Estate',
    iconImg: './images/Real-Estate.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-blue-light"],
  },
  {
    id: 7,
    title: 'IT Services',
    iconImg: './images/IT-Services.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-orange-light"],
  },
  {
    id: 8,
    title: 'Social Media',
    iconImg: './images/Social-Media.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-pink-light"],
  },
  {
    id: 9,
    title: 'Music',
    iconImg: './images/music.png',
    color: styles["text-purple-500"],
    borderColor: styles["border-yellow-light"],
  },
];

const IndustriesGrid = () => {
  const handleClick = (industry) => {
    console.log(`Clicked: ${industry.title}`);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-white font-size-64 algo-line-height-68 text-center ${monsterfont3.className}`}>Industries</h1>
        <h2 className={`text-white font-size-64 algo-line-height-68 text-center ${monsterfont.className} mb-16`}>We Cater</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleClick(industry)}
              className="group relative flex items-center h-24 w-full"
            >
              {/* Icon Container */}
              <div
                className={`absolute left-2 z-10 ${styles["icon-custom-rounded"]} p-4 bg-black ${industry.color} border-2 ${industry.borderColor}`}
              >
                <img
                  src={industry.iconImg}
                  alt={industry.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Main Container */}
              <div
                className={`w-full h-full ml-12 flex items-center justify-center bg-black border-2 ${industry.borderColor} ${styles["custom-rounded"]} transition-all duration-300 `}
              >
                <span className={`text-white font-size-19 algo-line-height-23 font-helveticaneue font-[600] ml-4 max-w-[180px]`}>{industry.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid;
