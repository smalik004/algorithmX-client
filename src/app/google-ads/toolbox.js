import React from 'react';
import styles from "../graphics/styles.module.css";
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

const TechnologyToolbox = () => {
  const tools = [
    { id: 'ps', name: 'Ad Roll', image: 'images/AdRoll.png' },
    { id: 'ai', name: 'Agency Analytics', image: 'images/AgencyAnalytics.png' },
    { id: 'ae', name: 'Ahrefs', image: 'images/Ahrefs.png' },
    { id: 'id', name: 'Keyword Planner', image: 'images/Google-Keyword-Planner.png' },
    { id: 'canva', name: 'Google Optimize', image: 'images/Google-Optimize.png' },
    { id: 'figma', name: 'Optmyzr', image: 'images/Optmyzr.png' },
    { id: 'cs', name: 'SEMrush', image: 'images/SEMrush.png'},
    { id: 'stock', name: 'SpyFu', image: 'images/SpyFu.png' },
  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
          TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
        
        <p className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont1.className} mb-8 sm:mb-16 max-w-5xl mx-auto px-2`}>
        Google Ads’ tech stack includes ad servers, keyword planners, AI algorithms, bidding systems, analytics platforms, and tracking tools for performance.
        </p>
        <div className={`container justify-center justify-items-center ${styles["margin1"]}`}>
          <div className="grid grid-cols-4 gap-1">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`${styles["background"]} rounded-lg  flex items-center ${styles["tool"]}  transition duration-300`}
              >
                {/* Flex container for image and text */}
                <div className={`flex w-full items-center ${styles["toolbox"]} `}>
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
                    <span className={`hidden md:block ${styles["toolbox"]}  ml-1 mb-0`}>
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

export default TechnologyToolbox;
