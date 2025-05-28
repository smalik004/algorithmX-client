import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./style.module.css";

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const AndriodSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen pt-[100px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["android-title"]} ${monsterfont1.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        Android App Development
        </h1>
        
        <p className={` ${styles["android-description"]} ${monsterfont1.className} text-semi-white leading-relaxed`}>
        AlgorithmX provides custom Android app development services where our skilled app developers create user-friendly apps without compromising on quality. Our expert app development team builds on your ideas, ensuring that your Android mobile app development cost remains within budget.
        </p>
      </div>
    </section>
  ); 
};

export default AndriodSection;