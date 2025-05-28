import React from 'react';
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
  weight: "500",
  fallback: ["sans-serif"],
});

const CostMob = () => {
  const estimates = [
    {
      imgSrc: "/images/price-1.svg",
      imgAlt: "Mobile app icon",
      title:"Simple App",
      price: "$30,000-$80,000",
      description: "Simple User Interface, Navigation, Basic features-functionalities and low programming complexity",
    },
    {
      imgSrc: "/images/price-2.svg", // Replaced FontAwesome with image
      imgAlt: "Scissors icon",
      title:"App of Medium Complexity",
      price: "$80,000-$200,000",
      description: "Interactive Interface, more complicated navigation, data storage, integration with external APIs are likely. A moderate level of technical expertise is required.",
    },
    {
      imgSrc: "/images/price-1.svg", // Replaced FontAwesome with image
      imgAlt: "Shopping cart icon",
      title :"App of High Complexity",
      price: "$200,000-$500,000",
      description: "Dynamic Interface, Advanced Interations, complex business logic, workflows, likely to involve the development of custom back-end logic and sophisticated data structure and algorithms. Compliance with industry standards and Regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
        <h1 className={`${style["cost-title"]} ${monsterfont.className} text-white`}>Cost</h1>
        <h2 className={`${style["cost-title"]} ${monsterfont1.className} mb-8 text-white`}>Estimations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First two cards in top row */}
          {estimates.slice(0, 2).map((item, index) => (
            <div key={index} className={`${style["border-design1"]} bg-black flex flex-col items-center text-center mr-[10px] ml-[10px]`}>
              <div className="mb-4 mt-[30px]">
                <img 
                  src={item.imgSrc} 
                  alt={item.imgAlt} 
                  className="mx-auto mb-4 w-[56px] h-[56px] object-cover"
                />
              </div>
              <div className={`text-[20px]  ${monsterfont2.className} text-center`}>
                {item.title}
              </div>
              <div className={`text-[20px] ${monsterfont2.className} text-center text-white`}>
                {item.price}
              </div>
              <p className={`${style["cost-description"]} font-helveticaneue mt-4 text-white`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row with one full-width card */}
        <div className="grid grid-cols-1 gap-6">
          <div className={`${style["border-design1"]} bg-black flex flex-col items-center text-center mr-[10px] ml-[10px]`}>
            <div className="mb-4 mt-[30px]">
              <img 
                src={estimates[2].imgSrc} 
                alt={estimates[2].imgAlt} 
                className="mx-auto mb-4 w-[56px] h-[52px] object-cover"
              />
            </div>
            <div className={`${styles["cost-price"]} ${monsterfont2.className} text-center text-white`}>
              {estimates[2].price}
            </div>
            <p className={`${style["cost-description"]} font-helveticaneue mt-4 text-white`}>
              {estimates[2].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostMob;