import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./style.module.css";

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback: ["sans-serif"],
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"700",
  fallback: ["sans-serif"],
})


const IndustriesGrid = () => {
  const industries = [
    'Healthcare', 'Logistics', 'Education',
    'Retail', 'Finance', 'Real Estate',
    'Restaurant', 'Government', 'Travel',
    'Social Network', 'Aviation', 'Agriculture'
  ];

  return (
    <div className="bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className={`  ${styles["industries-title"]} ${monsterfont1.className} text-white `}>
            Industries
          </h1>
          <p className={`text-semi-white ${monsterfont1.className} ${styles["industries-subtitle"]} `}>
            Designing Customized
          </p>
          <p className={`text-semi-white ${monsterfont.className} ${styles["industries-subtitle"]} text-xl md:text-2xl font-semibold`}>
            Android Solutions
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative ${styles["borderd"]} transition-all duration-300
                        flex  `}
            >
              <span className={`text-white ${styles["industries"]} `}>
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid;