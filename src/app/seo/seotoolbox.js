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


    const SEOTechnologyToolbox = () => {
    const tools = [
        { id: 'ae', name: 'Ahrefs', image: 'images/Ahrefs.png' },
        { id: 'sem', name: 'SEMrush', image: 'images/SEMrush.png'},
        { id: 'big', name: 'Bing Webmaster', image: 'images/Bing-webmaster.png'},
        { id: 'figma', name: 'Google Analytics', image: 'images/Google-Analytics.png' },
        { id: 'clearscope', name: 'Clearscope', image: 'images/Clearscope.png' },
        { id: 'deepcrawl', name: 'DeepCrawl', image: 'images/DeepCrawl.png' },
        { id: 'data', name: 'Data Studio', image: 'images/Google-Data-Studio (1).png' },
        { id: 'goo', name: 'Google Business', image: 'images/Google-My-Business.png' },
        { id: 'sear', name: 'Search Console', image: 'images/Google-Search-Console.png' },
        { id: 'gt', name: 'GTmetrix', image: 'images/GTmetrix (1).png' },
        { id: 'hot', name: 'Hotjar', image: 'images/hotjar.png' },
        { id: 'ps', name: 'Majestic', image: 'images/Majestic.png' },
        { id: 'ai', name: 'Market Muse', image: 'images/MarketMuse.png' },
        { id: 'ar', name: 'Bing', image: 'images/Bing.png' },
        { id: 'id', name: 'Moz', image: 'images/Moz (1).png' },
        { id: 'canva', name: 'RiteTag', image: 'images/RiteTag.png' },
        { id: 'sch', name: 'Schema Pro', image: 'images/Schema-Pro.png' },
        { id: 'cs', name: 'Screaming Frog', image: 'images/Screaming-Frog.png'},
        { id: 'stock', name: 'White Spark ', image: 'images/Whitespark.png' },
        { id: 'sketch', name: 'Yoast SEO', image: 'images/Yoast SEO.png'},
    ];

    return (
        <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
        <div className="max-w-[1200px] mx-auto">
        <h1 className={`text-[50px] md:text-[56px] leading-[60px] tracking-[0.06em] text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
        TECHNOLOGY TOOLBOX
        </h1>
            
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
            
            <p className={`text-semi-white text-center text-[16px]  ${monsterfont1.className} mb-8 sm:mb-16  px-2`}>
            Comprehensive SEO services toolkit to enhance online visibility, drive organic traffic, and boost search rankings.
            </p>
            <div className={`container justify-center justify-items-center ${styles["margin1"]} ml-[12px] md:ml-0`}>
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

    export default SEOTechnologyToolbox;