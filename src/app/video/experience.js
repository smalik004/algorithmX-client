import React from 'react';
import { Montserrat } from "next/font/google";
import styles from "./styles.module.css";


const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});

const ResponsiveHero = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center p-4 md:p-8 pt-20 md:mt-0">
        {/* Outer container with specific width and height */}
        <div className={`w-full max-w-[800px] ${styles["responsive-hero"]} md:w-full  rounded-3xl border border-red-500 relative flex flex-col md:flex-row `}>
          
          {/* Left Section: Image Container (1/5 width) */}
          <div className="w-1/5 relative">
            {/* Image container */}
            <div className="absolute w-64 h-64 md:w-72 md:h-72 overflow-hidden border
                          left-[70%]  -top-32
                          md:left-[-40%] md:top-1/2 md:translate-x-0
                          z-10
                          transform md:translate-y-[-50%] ">
              <img
                src="images/Graphics.webp"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section: 4/5 width */}
          <div className="md:w-4/5 flex">
            {/* Small section: 1/5 */}
            <div className="md:w-1/5">

            </div>

            {/* Main content area: 4/5 width */}
            <div className="md:w-4/5 flex flex-col items-center md:items-start  mt-40 md:mt-20  text-center md:text-left">
              <h2 className={`${styles["hero-img-title"]} text-white ${monsterfont1.className}`}>
                Experience AlgorithmX Today
              </h2>
              <p className={`text-semi-white ${styles["hero-img-description"]} ${monsterfont1.className} md:max-w-md`}>
                We're your full-stack solution for everything digital. Bring us your idea and we'll make it a success.
              </p>
              <button className="px-12 py-4 mb-4 rounded-full bg-transparent border border-white/20 text-white text-lg hover:bg-white/10 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHero;
