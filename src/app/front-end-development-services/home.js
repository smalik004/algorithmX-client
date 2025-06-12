import React from 'react';
import styles from "./style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})


const FrontEndSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen pt-[100px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["frontend"]} ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        Front-end Development
        </h1>
        
        <p className={` ${styles["frontend-description"]}  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        AlgorithmX’s offers superior front end development services where we create aesthetically pleasing and highly functional websites and seamless web applications tailored to your business requirements using HTML, JavaScript, and CSS and advanced frameworks like React and Angular, providing an unparalleled browsing experience.
        </p>
      </div>
    </section>
  );
};

export default FrontEndSection;