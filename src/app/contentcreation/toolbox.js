import React from 'react';
import styles from "./style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
});


const TechnologyToolbox = () => {
  const tools = [
    { id: 'ps', name: 'Adobe Font', image: 'images/Adobe-Font.png' },
    { id: 'ai', name: 'Creative Cloud', image: 'images/creative-cloud.png' },
    { id: 'ae', name: 'Ahrefs', image: 'images/Ahrefs.png' },
    { id: 'id', name: 'ChatGPT', image: 'images/Chatgpt.png' },
    { id: 'canva', name: 'Claude', image: 'images/Claude.png' },
    { id: 'figma', name: 'Google Analytics', image: 'images/Google-Analytics.png' },
    { id: 'cs', name: 'Google Font', image: 'images/Google-Font.png'},
    { id: 'stock', name: 'Grammerly', image: 'images/Grammerly.png' },
    { id: 'sketch', name: 'Hemingway Editor', image: 'images/Hemingway-Editor.png'},
    { id: 'word', name: 'Microsoft Word', image: 'images/Microsoft-Word.png'},
    { id: 'oa', name: 'Originality AI', image: 'images/Originality-AI.png'},
    { id: 'per', name: 'Perplexity', image: 'images/Perplexity.png'},
    { id: 'scr', name: 'Scrivener', image: 'images/Scrivener.png'},
    { id: 'sem', name: 'SEMrush', image: 'images/SEMrush.png'},
  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className={` ${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
          TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
        
        <p className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont.className} mb-8 sm:mb-16 max-w-5xl mx-auto px-2`}>
        Versatile toolbox for creating compelling content across digital platforms and engaging diverse audiences effectively.
        </p>
        <div className={`container justify-center justify-items-center ${styles["margin1"]}`}>
          <div className="grid grid-cols-4 gap-1">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={` ${styles["background"]} rounded-lg  flex items-center ${styles["tool"]}  transition duration-300`}
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