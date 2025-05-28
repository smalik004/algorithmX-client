import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback: ["sans-serif"],
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"600",
  fallback: ["sans-serif"],
})

const Aboutus = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-gray-300 flex items-center justify-center p-8 ">
      <div className="max-w-6xl mx-auto text-center space-y-0 ">
        <h1 className={`leading-[64px] md:text-[60px] text-[50px] ${monsterfont.className} text-white font-helvetica mb-[10px]`}>
          Introduction
        </h1>
        
        <p className={`text-[18px]   text-center leading-[1.5] font-helveticaneue font-[300] text-semi-white`}>
          Welcome to AlgorithmX, where technology meets excellence. As a leading end-to-end digital agency, 
          we are dedicated to transforming your business with a personalized approach as we align your business 
          goals with the right strategies, utilizing the latest tools and technologies to deliver measurable results.
       
        
        
          We specialize in creating strong brand identities, captivating visuals, and engaging content. 
          We develop user-friendly apps and implement strategies to improve online visibility and audience engagement. 
          Additionally, we offer targeted advertising, optimization techniques, and comprehensive marketing 
          campaigns to foster fast business growth.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;