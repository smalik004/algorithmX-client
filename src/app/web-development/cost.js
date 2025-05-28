import React from 'react';
import style from '../crm/style.module.css';
import styles from '../app-development/style.module.css';
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

const CostWeb = () => {
  const estimates = [
    {
      imgSrc: "/images/price-1.svg",
      imgAlt: "Mobile app icon",
      price: "From $20,000",
      description: "For a custom branded corporate website",
    },
    {
      imgSrc: "/images/price-2.svg", // Replaced FontAwesome with image
      imgAlt: "Scissors icon",
      price: "Up to $70,000",
      description: "For a self service custom web portal",
    },
    {
      imgSrc: "/images/price-1.svg", // Replaced FontAwesome with image
      imgAlt: "Shopping cart icon",
      price: "From $200,000",
      description: "For an ecommerce solution with custom visual interface, integrated into a corporate IT infrastructure.",
    },
    {
        imgSrc: "/images/price-2.svg", // Replaced FontAwesome with image
        imgAlt: "Shopping cart icon",
        title :"App of High Complexity",
        price: "Up to $400,000",
        description: "For complex enterprise web software.",
      },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
        <h1 className={`${style["cost-title"]} ${monsterfont.className} text-white`} >Cost</h1>
        <h2 className={`${style["cost-title"]} ${monsterfont1.className} mb-8 text-white`}>Estimations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* All four cards in a 2x2 grid */}
          {estimates.map((item, index) => (
            <div key={index} className={`${style["border-design1"]} bg-black flex flex-col items-center text-center mr-[10px] ml-[10px]`}>
              <div className="mb-4 mt-[30px]">
                <img 
                  src={item.imgSrc} 
                  alt={item.imgAlt} 
                  className="mx-auto mb-4 w-[56px] h-[56px] object-cover"
                />
              </div>
              <div className={`text-[20px] ${monsterfont2.className} text-center text-white`}>
                {item.title}
              </div>
              <div className={`text-[20px] ${monsterfont2.className} text-center text-white`}>
                {item.price}
              </div>
              <p className={`${style["cost-description"]} font-helveticaneue mt-4 text-semi-white`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostWeb;