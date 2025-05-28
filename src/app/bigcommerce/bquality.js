import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});

const QualityBanner = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Background "ALGORITHM X" text */}
        <div className="absolute inset-0 flex  justify-center pointer-events-none">
          <span
            className={` mb-6 text-[48px] leading-[1.1] md:text-[100px] md:pr-[140px] ${monsterfont.className}  text-gray-600/20 transform transition-transform duration-700 `}
            >
            ALGORITHMX
          </span>
        </div>

        <h2 className={`${styles["quality-title"]} ${monsterfont1.className}  md:-ml-8`}>
          QUALITY GUARANTEED
        </h2>
        
        <div className="relative">
        <div className={`absolute top-0 left-0 w-full h-full ${styles["borderd"]}`}></div>
        <div className='inline-flex flex-col'>
  <div className="bg-black relative z-10 pr-6 md:-ml-8 max-w-max">
    <h3 className={`${styles["quality-title"]} ${monsterfont.className} font-bold mb-2`}>
      COMPLIANT &
    </h3>
  </div>
  <div className="bg-black relative z-10 pr-6 md:-ml-8 max-w-max">
    <h3 className={`${styles["quality-title"]} ${monsterfont.className} font-bold mb-2`}>
      WORTH EVERY PENNY
    </h3>
  </div>
</div>



          
          <div className="pl-4 pr-8 py-6 relative z-0">
            <p className={`${styles["quality-description"]} text-semi-white leading-relaxed pb-6 px-6 `}>
            AlgorithmX is committed to exploring all possibilities to deliver top-notch and innovative HubSpot 
            development services customized to suit all your requirements and surpass your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityBanner;
