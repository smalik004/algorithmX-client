import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});



const WordPressSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["shopify-text1"]} ${monsterfont.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        Wordpress
        </h1>
        
        <p className={` ${styles["shopify-description1"]} ${monsterfont.className} text-semi-white leading-relaxed`}>
        Build visibly stunning, highly functional, and sales-focused online stores and user-friendly websites with AlgorithmX’s advanced WordPress development services tailored to ensure your business thrives.
        </p>
      </div>
    </section>
  );
};

export default WordPressSection;