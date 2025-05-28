import React from 'react';
import styles from "./style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const BackEndSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen pt-[100px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["backend"]} ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        Back-end Development
        </h1>
        
        <p className={` ${styles["backend-description"]}  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        Discover AlgorithmX’s top-notch back end development services where a dedicated back end developer leverages programming languages like Java, Python, Node.js, or Ruby to create secure, reliable and scalable applications with effortless integration and optimized performance.
        </p>
      </div>
    </section>
  ); 
};

export default BackEndSection;