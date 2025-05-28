import React from 'react';
import styles from "../graphics/styles.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback: ["sans-serif"],
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"700",
  fallback: ["sans-serif"],
})
const AIInsightSection = () => {
  return (
    <div className="w-full bg-black mx-auto px-4 py-6">
      <div className="relative bg-black rounded-3xl border border-gray-800 overflow-visible max-w-6xl mx-auto">
        {/* Purple accent line - positioned absolute and extending outside */}
        <div className={`${styles["purple-line"]}`} />
        
        {/* Content container */}
        <div className="flex flex-col md:flex-row text-center md:items-center justify-between p-6 md:p-8 gap-4 md:gap-8">
          {/* Text content */}
          <div className="flex flex-col md:flex-row  md:items-start md:items-center gap-4 md:gap-14">
            <h2 className={`text-white ${styles["insight"]}  ${monsterfont.className}  whitespace-nowrap`}>
            Get an Insight
            </h2>
            <div className=' md:text-start'>
            <p className={`text-semi-white ${styles["insight-description"]} max-w-[700px]`}>
            Did you know 90% of top-performing companies invest in AI to stay ahead? If you’re not thinking AI, you’re already behind.
            </p>
            </div>
          </div>
          
          <div className={`${styles["connect"]}`}>
        <a href="/contact-us" className="text-center font-helveticaneue">Connect</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsightSection;