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


const PPCTechnologyToolbox = () => {
const tools = [
    { id: 'ae', name: 'AdEspresso', image: 'images/AdEspresso.png' },
    { id: 'sem', name: 'Adobe Analytics', image: 'images/Adobe-Analytics.png'},
    { id: 'big', name: 'AdRoll', image: 'images/AdRoll.png'},
    { id: 'figma', name: 'Agency Analytics', image: 'images/AgencyAnalytics.png' },
    { id: 'clearscope', name: 'Ahrefs', image: 'images/Ahrefs (1).png' },
    { id: 'deepcrawl', name: 'Amazon Ads', image: 'images/Amazon-Advertising.png' },
    { id: 'data', name: 'Facebook Ads', image: 'images/Facebook-Ads-Manager.png' },
    { id: 'goo', name: 'Facebook-Pixel', image: 'images/Facebook-Pixel.png' },
    { id: 'sear', name: 'Google-Ads', image: 'images/Google-Ads (1).png' },
    { id: 'gt', name: 'Ads Remarketing', image: 'images/Google-Ads-Remarketing.png' },
    { id: 'hot', name: 'Google Analytics', image: 'images/Google-Analytics.png' },
    { id: 'ps', name: 'Google Data Studio', image: 'images/Google-Data-Studio.png' },
    { id: 'ai', name: 'Keyword Planner', image: 'images/Google-Keyword-Planner.png' },
    { id: 'ar', name: 'Tag Manager', image: 'images/Google-Tag-Manager.png' },
    { id: 'id', name: 'Hotjar', image: 'images/Hotjar.png' },
    { id: 'canva', name: 'Campaign Manager', image: 'images/LinkedIn-Campaign-Manager.png' },
    { id: 'sch', name: 'Insight Tag', image: 'images/LinkedIn-Insight-Tag.png' },
    { id: 'cs', name: 'Microsoft Ads', image: 'images/Microsoft-Advertising.png'},
    { id: 'stock', name: 'Optmyzr ', image: 'images/Optmyzr.png' },
    { id: 'sketch', name: 'SEMrush', image: 'images/SEMrush.png'},
    { id: 'snap', name: 'Snapchat Ads', image: 'images/Snapchat-Ads.png' },
    { id: 'spyfu', name: 'SpyFu', image: 'images/SpyFu.png' },
    { id: 'tik', name: 'TikTok Ads', image: 'images/TikTok-Ads.png'},
    { id: 'tweet', name: 'Twitter Ads ', image: 'images/Twitter-Ads.png' },
    { id: 'conv', name: 'Conversion Tracking', image: 'images/Twitter-Conversion-Tracking.png'},
];

return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
    <div className="max-w-[1200px] mx-auto">
    <h1 className={` text-[50px] md:text-[56px] leading-[60px] tracking-[0.06em] text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
        TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-[25px] mb-[32px]"></div>
        
        <p className={`text-semi-white text-center text-[16px]  ${monsterfont1.className} mb-8 sm:mb-16  px-2`}>
        Comprehensive SEO services toolkit to enhance online visibility, drive organic traffic, and boost search rankings.
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

export default PPCTechnologyToolbox;