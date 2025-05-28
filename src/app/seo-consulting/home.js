import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "../android-app/style.module.css";

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ['sans-serif'],
})

const SEOConsultingSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["android-title"]} ${monsterfont1.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        Seo Consulting
        </h1>
        
        <p className={` ${styles["android-description"]} ${monsterfont1.className} text-semi-white leading-relaxed `}>
        As a trusted SEO consulting company, we specialize<br/>
        in crafting strategies that drive organic growth, boost search visibility, and ensure measurable ROI, tailored for businesses of any size.
        </p>
      </div>
    </section>
  ); 
};

export default SEOConsultingSection;