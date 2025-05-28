import React from 'react';
import styles from './style.module.css'
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});

const DigitalSolutions = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative">
            <h1 className={`${styles["digital-title"]} ${monsterfont.className}  mb-[30px]`}>
              Innovative Digital Content Solutions
            </h1>
            <div className="absolute  w-1 h-16 bg-blue-600"></div>
            <div className="flex items-center pl-4 gap-4 ">
            
              <span className={`${styles["digital-subtitle"]} ${monsterfont.className}`}>
                EMPOWERING
                <br />
                <span className={`${styles["digital-subtitle"]} ${monsterfont1.className}`}>BRANDS</span>
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-gray-300">
            <p className={`${styles["digital-description"]} font-helveticaneue text-semi-white mt-[16px] mb-[25px]`}>
              Our top-notch content services cover a variety of offerings that focus on developing,
              organizing, and optimizing digital content for brands which ranges from creating
              content like blogs, articles, videos and social media posts customized to captivate
              audiences.
           
              Content management includes strategic planning, structuring and
              distributing content across diverse platforms to boost influence and visibility.
              optimization of content aims to enhance content performance using SEO, analytics,
              and consistent improvements.
            
              Effective content services play a huge role in present day's digital era where quality
              and relevance are key components in achieving marketing goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSolutions;