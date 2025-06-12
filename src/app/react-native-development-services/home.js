import React from 'react';
import styles from "./style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const NativeSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["react-title"]} ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        React-Native App Development
        </h1>
        
        <p className={` ${styles["react-description"]}  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        Leverage our React Native expertise for seamless cross-platform app development to accelerate your development process, reduce costs, and deliver native-like experiences across various devices.
        </p>
      </div>
    </section>
  ); 
};

export default NativeSection;