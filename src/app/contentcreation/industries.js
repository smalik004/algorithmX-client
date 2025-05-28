'use client';
import React from 'react';
import styles from "./style.module.css";

const industries = [
  {
    id: 1,
    title: 'eCommerce',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-purple-light"], // Correct reference to the imported class
  },
  {
    id: 2,
    title: 'Healthcare',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-yellow-light"], // Correct reference to the imported class
  },
  {
    id: 3,
    title: 'Logistics',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20.25l15-15m0 0h-11.25m11.25 0V15" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-purple-light"], // Correct reference to the imported class
  },
  {
    id: 4,
    title: 'Logistics',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20.25l15-15m0 0h-11.25m11.25 0V15" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-red-light"], // Correct reference to the imported class
  },
  {
    id: 5,
    title: 'Logistics',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20.25l15-15m0 0h-11.25m11.25 0V15" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-green-light"], // Correct reference to the imported class
  },
  {
    id: 6,
    title: 'Logistics',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20.25l15-15m0 0h-11.25m11.25 0V15" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-blue-light"], // Correct reference to the imported class
  },
  {
    id: 7,
    title: 'Logistics',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20.25l15-15m0 0h-11.25m11.25 0V15" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-orange-light"], // Correct reference to the imported class
  },
  {
    id: 8,
    title: 'Logistics',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20.25l15-15m0 0h-11.25m11.25 0V15" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-pink-light"], // Correct reference to the imported class
  },
  {
    id: 9,
    title: 'Logistics',
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20.25l15-15m0 0h-11.25m11.25 0V15" />
      </svg>
    ),
    color: 'text-purple-500',
    borderColor: styles["border-yellow-light"], // Correct reference to the imported class
  },
];


const IndustriesGrid = () => {
  const handleClick = (industry) => {
    console.log(`Clicked: ${industry.title}`);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-6xl font-light text-center mb-4">Industries</h1>
        <h2 className="text-white text-5xl font-light text-center mb-16">We Cater</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleClick(industry)}
              className="group relative flex items-center h-24 w-full"
            >
              {/* Icon Container */}
              <div className={`absolute -left-1 z-10 ${styles["icon-custom-rounded"]}   p-4 bg-black ${industry.color} border-2 ${industry.borderColor} `}>
                <div className={industry.color}>
                  {industry.iconSvg}
                </div>
              </div>
              
              {/* Main Container */}
              <div className={`w-full h-full ml-12 flex items-center  justify-center bg-black border-2 ${industry.borderColor} ${styles["custom-rounded"]}
               transition-all duration-300  `}>
                <span className="text-white text-xl ml-4">{industry.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid;