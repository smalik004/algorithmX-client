import React from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});

const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});


const HeroSection = () => {
return (
    <div className="relative bg-black  flex items-center justify-center text-center px-4 py-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Main heading */}
        <h1 className={`${styles["hero-title"]} ${monsterfont.className} text-white  mb-6`}>
          Consistency and Compatibility
        </h1>
        
        {/* Subheading with responsive text size */}
        <p className={`${styles["hero-description"]} ${monsterfont1.className} text-semi-white`}>
        Experience flawless user experience with AlgorithmX’s back end web applications, offering unparalleled consistency and compatibility across all browsers and devices.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;