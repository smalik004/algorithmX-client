import React from 'react';
import styles from "../video/styles.module.css";
import { Montserrat } from "next/font/google";

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

const CROTechnologyToolbox = () => {
  const tools = [
    { id: 'ps', name: 'Adobe Target', image: 'images/Adobe-Target.png' },
    { id: 'ai', name: 'Amplitude', image: 'images/Amplitude.png' },
    { id: 'ae', name: 'Crazy Egg', image: 'images/Crazy-Egg.png' },
    { id: 'id', name: 'Google Analytics', image: 'images/Google-Analytics (1).png' },
    { id: 'canva', name: 'Google Optimize', image: 'images/Google-Optimize.png' },
    { id: 'figma', name: 'PageSpeed Insights', image: 'images/Google-PageSpeed-Insights.png' },
    { id: 'cs', name: 'GTmetrix', image: 'images/GTmetrix.png'},
    { id: 'stock', name: 'Hotjar', image: 'images/Hotjar.png' },
    { id: 'kis', name: 'Kissmetrics', image: 'images/Kissmetrics.png' },
    { id: 'mix', name: 'Mixpanel', image: 'images/Mixpanel.png' },
    { id: 'opt', name: 'Optimizely', image: 'images/Optimizely.png' },
    { id: 'pin', name: 'Pingdom', image: 'images/Pingdom.png' },
    { id: 'pow', name: 'Power BI', image: 'images/Power BI.png' },
    { id: 'qua', name: 'Qualaroo', image: 'images/Qualaroo.png' },
    { id: 'tab', name: 'Tableau', image: 'images/Tableau.png' }

  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
          TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
        
        <p className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont1.className} mb-8 sm:mb-16  px-2`}>
        A CRO tech stack uses analytics, testing, personalization, and feedback tools to optimize user experiences and boost conversions.
        </p>
        <div className="container mx-auto flex justify-center items-center">
          <div className="grid grid-cols-4 gap-1">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`${styles["background"]} rounded-lg  flex items-center ${styles["tool"]}  transition duration-300`}
              >
                {/* Flex container for image and text */}
                <div className={`flex w-full items-center ${styles["toolbox"]}  `}>
                  {/* Image part (1/3) */}
                  <div className="md:w-1/5 ">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-12 h-12  object-contain md:ml-2"
                    />
                  </div>
                  
                  {/* Text part (2/3) */}
                  <div className="md:w-4/5 ">
                  <div>
                    <span className={`hidden md:block ${styles["toolbox"]} ml-1 mb-0`}>
                      {tool.name}
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CROTechnologyToolbox;
