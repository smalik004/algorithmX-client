import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "../android-app/style.module.css";

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})
const monsterfont2 = Montserrat ({
    subsets : ["latin"],
    weight :"200",
    fallback: ["sans-serif"],
  })

const SocialConsultingSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["android-title"]} ${monsterfont2.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent`}>
        Social Media Consulting
        </h1>
        
        <p className={` ${styles["android-description"]} ${monsterfont1.className} text-semi-white max-w-5xl mx-auto  `}>
        Elevate Online Presence Expert Social Media Consulting
Services for Unparalleled Growth
        </p>
      </div>
    </section>
  ); 
};

export default SocialConsultingSection;