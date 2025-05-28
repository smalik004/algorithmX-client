import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});

const HubSpotSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen pt-[100px]">
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        <h1 className={` ${styles["shopify-text1"]} ${monsterfont.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        HubSpot
        </h1>
        
        <p className={` ${styles["shopify-description1"]} ${monsterfont.className} text-semi-white leading-relaxed`}>
        AlgorithmX utilizes its HubSpot development services to design websites that are not only visually attractive but 
        also highly efficient in attracting leads, engaging customers. and fueling business expansion.
        </p>
      </div>
    </section>
  );
};

export default HubSpotSection;