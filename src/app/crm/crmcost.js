import React from 'react';
import style from './style.module.css';
import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"100",
  fallback: ["sans-serif"],
})
const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback: ["sans-serif"],
})
const monsterfont2 = Montserrat ({
  subsets : ["latin"],
  weight :"500",
  fallback: ["sans-serif"],
})


const EstimationBox = ({ imageSrc, title, description }) => (
  <div className={`${style["border-design1"]} p-4`}>
    <img
      src={imageSrc}
      alt={title}
      className="mx-auto mb-4 w-[50px] h-[50px] object-cover "
    />
    <h3 className={`${style["cost-price"]}  ${monsterfont2.className} text-center `}>{title}</h3>
    <p className={`${style["cost-description"]} font-helveticaneue  mt-4 text-white mb-[10px]`}>{description}</p>
  </div>
);

const CostEstimations = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className={`${style["cost-title"]}  ${monsterfont.className} `}>Cost</h1>
        <h2 className={`${style["cost-title"]}  ${monsterfont1.className} mb-16 `}>Estimations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Box 1 */}
          <EstimationBox
            imageSrc="images/price-1.svg"
            title="From $15,000"
            description="A CRM with standard functionality and minimal customization, meant for about 10 users."
          />

          {/* Box 2 */}
          <EstimationBox
            imageSrc="images/price-2.svg"
            title="Up to $250,000"
            description="A heavily customized CRM with industry-specific functionality and advanced analytics features, meant for over 1,000 users in diverse roles."
          />
        </div>
      </div>
    </div>
  );
};

export default CostEstimations;
