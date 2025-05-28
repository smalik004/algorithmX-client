import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "../android-app/style.module.css";


const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const SEOMobileSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["android-title"]} ${monsterfont1.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
      Mobile SEO
        </h1>
        
        <p className={` ${styles["android-description"]} ${monsterfont1.className} text-semi-white leading-relaxed `}>
        Dominate Mobile Search with Our Expert Mobile SEO Services.
        </p>
      </div>
    </section>
  ); 
};

export default SEOMobileSection;