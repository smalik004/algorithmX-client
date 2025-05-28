import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "../android-app/style.module.css";

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const PrivacySection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 pb-[50px] pt-[200px] md:pb-[170px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["android-title"]} ${monsterfont1.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        Privacy Policy
        </h1>
        
       
      </div>
    </section>
  ); 
};

export default PrivacySection;