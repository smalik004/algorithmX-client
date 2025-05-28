import React from 'react';
import styles from "../contentcreation/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
subsets: ["latin"],
weight: "100",
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "300",
});


const SocialTechnologyToolbox = () => {
const tools = [
    { id: 'ae', name: 'Adobe Spark', image: 'images/Adobe-Spark.png' },
    { id: 'sem', name: 'Agora pulse', image: 'images/Agorapulse.png'},
    { id: 'big', name: 'Buffer', image: 'images/Buffer.png'},
    { id: 'figma', name: 'BuzzSumo', image: 'images/BuzzSumo.png' },
    { id: 'clearscope', name: 'Crello', image: 'images/Crello.png' },
    { id: 'deepcrawl', name: 'Followerwonk', image: 'images/Followerwonk.png' },
    { id: 'data', name: 'Hootsuite', image: 'images/Hootsuite.png' },
    { id: 'goo', name: 'Klear', image: 'images/Klear.png' },
    { id: 'sear', name: 'SocialBee', image: 'images/SocialBee.png' },
    { id: 'gt', name: 'Sprout-Social', image: 'images/Sprout-Social.png' },
    { id: 'hot', name: 'Trendsmap', image: 'images/Trendsmap.png' },
    { id: 'ps', name: 'Upfluence', image: 'images/Upfluence.png' },
    { id: 'ai', name: 'Zendesk', image: 'images/Zendesk.png' },
];

return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
    <div className="max-w-[1200px] mx-auto">
        <h1 className={` text-[50px] md:text-[56px] leading-[60px] tracking-[0.06em] text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
        TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-[25px] mb-[32px]"></div>
        
        <p className={`text-semi-white text-center text-[16px]  ${monsterfont1.className} mb-8 sm:mb-16  px-2`}>
        Advanced tools for enhancing social media engagement, audience growth, and brand presence.
        </p>
        <div className={`container justify-center justify-items-center pl-8 md:pl-0 ${styles["margin1"]}`}>
        <div className="grid grid-cols-4 gap-1 ">
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

export default SocialTechnologyToolbox;