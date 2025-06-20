import React from 'react';
import styles from '../shopify-development-services/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});



const MagentoSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen pt-[100px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["shopify-text1"]} ${monsterfont.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        Magento
        </h1>
        
        <p className={` ${styles["shopify-description1"]} ${monsterfont.className} text-semi-white leading-relaxed`}>
        Discover AlgorithmX’s exceptional Magento development services, bringing your e-commerce vision to life. We are builders of powerful and feature-rich online stores that drive sales.
        </p>
      </div>
    </section>
  );
};

export default MagentoSection;