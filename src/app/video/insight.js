import React from 'react';
import { Montserrat } from "next/font/google";
import styles from "./styles.module.css";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const InsightSection = () => {
  return (
    <div className="w-full bg-black mx-auto px-4 py-6">
      <div className="relative bg-black rounded-3xl border border-gray-800 overflow-hidden max-w-6xl mx-auto">
        {/* Purple accent line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-purple-800 rounded-r md:h-24" />
        
        {/* Content container */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 gap-4 md:gap-8">
          {/* Text content */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className={`${styles["insight"]} ${monsterfont.className} text-white whitespace-nowrap`}>
              Get an Insight
            </h2>
            <p className={`${styles["insight-description"]} text-semi-white max-w-2xl`}>
              We assure you the consultation is completely free. Let us understand the depths of your Idea and get the suggestion on how you can proceed further about growing it.
            </p>
          </div>
          
          {/* Connect button */}
          <button className={`px-14 py-2 bg-black border border-gray-700 rounded-full text-white ${styles["connect"]} `}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightSection;
