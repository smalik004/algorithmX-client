import React from 'react';
import styles from "../back-end-development-services/style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
})

const AmazonAds = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4  pt-[150px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["backend"]} ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        Amazon Ads
        </h1>
        
        <p className={` ${styles["backend-description"]}  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        Optimize Amazon Ads for maximum visibility and<br/>
sales with expert targeting and campaign strategies.
        </p>
      </div>
    </section>
  ); 
};

export default AmazonAds;