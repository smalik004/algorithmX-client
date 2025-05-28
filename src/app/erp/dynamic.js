import React from 'react';
import  style from './style.module.css'
import { Montserrat_Alternates } from "next/font/google";

const monsterfont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});


const DynamicSolutionsHero = () => {
  return (
    <div className=" bg-black p-8 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto mt-20">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f9a825] via-[#ef5350] via-[#4984eb] via-[#14c2a2] to-[#14c26e]"></div>

        
        {/* Main content */}
        <div className="px-4 py-16">
          <h1 className={`${style["dynamic-text"]} text-white ${monsterfont.className}`}>
            DYNAMIC SOLUTIONS
          </h1>
          
          {/* Decorative line under title */}
          <div className="relative w-[140px] h-[1px] mb-[30px] mt-[30px]">
  <div className="absolute left-0 w-[40%] h-full bg-blue-500"></div>
  <div className="absolute right-0 w-[60%] h-full bg-white"></div>
</div>





          
          <p className={`max-w-3xl ${style["dyanmic-description"]} text-semi-white`}>
            Drive progress seamlessly. Transform your processes with agile ERP solutions 
            that elevate performance, enhance collaboration, and scale with your vision.
          </p>
        </div>
        
        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-red-500 via-purple-500 via-blue-500 to-teal-500"></div>
      </div>
    </div>
  );
};

export default DynamicSolutionsHero;