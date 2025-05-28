import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import style from '../crm/style.module.css';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const CostEstimation = () => {
  const estimates = [
    {
      iconType: "image", // Only the first box uses an image
      price: "$30,000-$70,000",
      description: "Mobile App of moderate level of complexity",
    },
    {
      iconType: "fa",
      icon: <FontAwesomeIcon icon={faCut} className="text-[#2775ff] w-[43.72px] h-[52px] " />, // Fixed FontAwesome icon
      price: "$70,000-$150,000",
      description: "Mobile banking app or health app",
    },
    {
      iconType: "fa",
      icon: <FontAwesomeIcon icon={faShoppingCart} className="text-[#2775ff]  w-[56.25px] h-[52px] " />, // Fixed FontAwesome icon
      price: "$150,000-$350,000",
      description: "Mid-market web platform for clients",
    },
    {
      iconType: "fa",
      icon: <FontAwesomeIcon icon={faCut} className="text-[#2775ff]  w-[43.72px] h-[52px] " />, // Fixed FontAwesome icon
      price: "$200,000-$400,000",
      description: "Creating a moderately complex specialized automation solution tailored to specific needs (such as accounting, supply chain management, or ecommerce)",
    },
    {
      iconType: "fa",
      icon: <FontAwesomeIcon icon={faShoppingCart} className="text-[#2775ff] w-[56.25px] h-[52px] " />, // Fixed FontAwesome icon
      price: "$800,000-$4,000,000",
      description: "Deploying an extensive business automation system fueled by big data and artificial intelligence/machine learning capabilities",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
        <h1 className={`${style["cost-title"]} ${monsterfont.className} text-white`}>Cost</h1>
        <h2 className={`${style["cost-title"]} ${monsterfont1.className} text-white mb-8`}>Estimations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {estimates.slice(0, 3).map((item, index) => (
            <div key={index} className={`${style["border-design1"]} bg-black flex flex-col items-center text-center mr-[10px] ml-[10px]`}>
              <div className="mb-4 mt-[30px]">
                {item.iconType === "image" ? (
                  <img 
                    src="/images/mobile.svg" 
                    alt="Mobile app icon" 
                    className="mx-auto mb-4 w-[42px] h-[50px] object-cover"
                  />
                ) : (
                  item.icon // Render FontAwesome icon
                )}
              </div>
              <div className={`${styles["cost-price"]} ${monsterfont2.className} text-white text-center`}>
                {item.price}
              </div>
              <p className={`${style["cost-description"]} font-helveticaneue mt-4 text-semi-white`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {estimates.slice(3).map((item, index) => (
            <div key={index + 3} className={`p-6 ${style["border-design1"]} bg-black flex flex-col items-center text-center mr-[10px] ml-[10px]`}>
              <div className="mb-4 mt-[30px]">
                {item.icon} {/* Render FontAwesome icon */}
              </div>
              <div className={`${styles["cost-price"]} ${monsterfont2.className} text-white text-center`}>
                {item.price}
              </div>
              <p className={`${style["cost-description"]}  font-helveticaneue  mt-4 text-semi-white`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostEstimation;
