import React from 'react';
import styles from "../back-end/style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback : ["sans-serif"],
})

const AdsSuspension = () => {
  return (
    <section className="relative w-full min-h-screen  bg-black flex items-center justify-center p-4 ">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["backend"]} ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        Ads Suspension Recovery
        </h1>
        
        <p className={` ${styles["backend-description"]}  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        Expert assistance to recover and optimize suspended<br/>
Google Ads accounts for continued performance.
        </p>
      </div>
    </section>
  ); 
};

export default AdsSuspension;