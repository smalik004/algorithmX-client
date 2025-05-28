import React from 'react';
import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})
const AboutSection = () => {
  return (
    <section className="relative w-full bg-black flex items-center justify-center p-4 pt-[200px]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className={` text-[60px] md:text-[84px] leading-[64px] ${monsterfont.className} bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
          About Us
        </h1>
        
        <p className={`algo-line-height-34  font-size-34 ${monsterfont.className} text-gray-400 leading-relaxed `}>
          Transforming businesses with  personalized
          <br/>
          strategies, cutting-edge tech, and measurable results.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
