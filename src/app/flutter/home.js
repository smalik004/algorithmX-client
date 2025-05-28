import React from 'react';
import styles from "./style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const FlutterSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen  pt-[100px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className= {` ${styles["flutter-title"]} ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        Flutter App Development
        </h1>
        
        <p className={` ${styles["flutter-description"]}  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        Unlock the potential of the flexible and innovative platform Flutter for app development! Create gorgeous, and high-performance Flutter iOS and Android mobile apps with a unified codebase that simplifies workflow and increases productivity.
        </p>
      </div>
    </section>
  ); 
};

export default FlutterSection;