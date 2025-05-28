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
    { id: 'ps', name: 'Appbot', image: 'images/Appbot.png' },
    { id: 'ai', name: 'Appfigures', image: 'images/Appfigures.png' },
    { id: 'ae', name: 'AppFollow', image: 'images/AppFollow.png' },
    { id: 'id', name: 'AppsFlyer', image: 'images/AppsFlyer.png' },
    { id: 'canva', name: 'AppTweak', image: 'images/AppTweak.png' },
    { id: 'figma', name: 'ASOdesk', image: 'images/ASOdesk.png' },
    { id: 'cs', name: 'Firebase Analytics', image: 'images/Firebase-Analytics.png'},
    { id: 'stock', name: 'Google Play', image: 'images/Google-Play-Experiments.png' },
    { id: 'sketch', name: 'Mixpanel', image: 'images/Mixpanel.png'},
    { id: 'one', name: 'Onesky', image: 'images/Onesky.png'},
    { id: 'act', name: 'Mobile Action', image: 'images/Mobile-Action.png'},
    { id: 'phr', name: 'Phrase', image: 'images/Phrase.png'},
    { id: 'tow', name: 'Sensor Tower', image: 'images/Sensor-Tower.png'},
    { id: 'spl', name: 'Split Metrics', image: 'images/SplitMetrics.png'},
    { id: 'the', name: 'The Tool', image: 'images/TheTool.png'},
    { id: 'trans', name: 'Transifex', image: 'images/Transifex.png'},
  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
          TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-5 mb-[20px]"></div>
   
        
        <p className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont1.className} mb-8 sm:mb-16  px-2`}>
        The technology stack for ASO improves app visibility through keyword research, analytics, metadata optimization, A/B testing, and SEO tools.
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

export default TechnologyToolbox;
