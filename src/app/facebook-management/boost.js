'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faGem } from '@fortawesome/free-solid-svg-icons';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
subsets: ['latin'],
weight: '700',
fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "200",
fallback: ["sans-serif"],
});

const MarketingSection = () => {
const [activeTab, setActiveTab] = useState('organic');
const [hoverTab, setHoverTab] = useState(null);
const [isInView, setIsInView] = useState(false);
const boostRef = useRef(null);

const content = {
    organic: {
    text: "Need to reach more people, fast? Our paid Facebook marketing services are built to put your brand in front of the right audience, at the right time. By leveraging boosted posts and precisely targeted ads, we drive visibility where it matters most—getting your message directly to potential customers and optimizing ad spending for maximum impact. Whether you're looking for a top facebook management agency in USA or a dedicated Facebook Manager, we've got you covered.",
    extraText: "Our organic Facebook services focus on engaging your audience and driving meaningful interactions.",
    features: [
        "10+ Monthly Posts and 8+ Custom Images",
        "Tailored Strategy to match your business goals",
        "Brand Analysis and Audit of Existing Strategy",
        "Dedicated Account Manager",
        "Monthly Performance Reports"
    ]
    },
    paid: {
    text: "Paid ads may be quick, but organic marketing is where true brand loyalty is built. We focus on creating content that not only keeps your current audience engaged but also nurtures long-term relationships. Through consistent, meaningful interactions, your brand becomes more than just another post—it becomes a trusted voice in your community.",
    extraText: "Our paid Facebook advertising helps expand your reach with targeted campaigns that drive conversions.",
    features: [
        "4+ Unique Ads",
        "Targeted Campaigns for relevant audiences",
        "Mobile-optimized ads",
        "Pixel Installation for tracking",
        "Performance Reports and Account Setup"
    ]
    }
};

useEffect(() => {
    const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting && !isInView) {
        setIsInView(true);
        }
    },
    { threshold: 0.5 }
    );

    if (boostRef.current) {
    observer.observe(boostRef.current);
    }

    return () => {
    if (boostRef.current) {
        observer.unobserve(boostRef.current);
    }
    };
}, [isInView]);

const splitContent = (text) => {
    const parts = text.split("\n");
    return parts;
};

return (
    <div className="min-h-screen bg-black text-gray-300 p-4 flex justify-center items-center">
    <div className="max-w-[1200px] mx-auto p-8">
        <div className="mb-16 text-center space-y-2">
        <h2
            ref={boostRef}
            className={`-mb-6 leading-[1.1] text-[36px] md:text-[90px] text-[#151515] transform transition-transform duration-700 ${monsterfont.className} ${
            isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
            }`}
        >
            BOOST ENGAGEMENT
        </h2>
        <div className="relative z-10">
            <h2 className={`${styles["description"]} ${monsterfont1.className} mt-6 md:-mt-[60px] text-white`}>
            THROUGH PAID AND ORGANIC
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
            FACEBOOK MARKETING
            </h2>
        </div>
        </div>

        <div className="relative mb-12">
        <div className="flex justify-center items-center">
        <div className="flex rounded-[33px] border-[1px] border-[#a2ed56] p-2 relative md:min-w-[720px]">

            <div 
            className="hidden md:flex absolute h-[calc(100%-8px)] transition-all duration-300 ease-in-out"
            style={{
              width: '180px',  // Adjust this value to control background width
              height: '45px',  // Adjust this value to control background height
              left: hoverTab 
                ? hoverTab === 'paid' 
                  ? 'calc(36% + 90px)' // Center in right half
                  : 'calc(40% - 90px)'  // Center in left half
                : activeTab === 'paid'
                  ? 'calc(36% + 90px)'
                  : 'calc(40% - 90px)',
              top: '50%',
              transform: 'translateY(-50%)',
              background:'#5a882b',
              borderRadius: '9999px',
              boxShadow: '-1px 1px 5px 7px rgba(128, 215, 0, 0.2)',
              backdropFilter: 'blur(4px)',
            }}
          />
          <div 
            className="flex md:hidden absolute h-[calc(100%-8px)] transition-all duration-300 ease-in-out"
            style={{
              width: '120px',  // Adjust this value to control background width
              height: '45px',  // Adjust this value to control background height
              left: hoverTab 
                ? hoverTab === 'paid' 
                  ? 'calc(18% + 90px)' // Center in right half
                  : 'calc(40% - 90px)'  // Center in left half
                : activeTab === 'paid'
                  ? 'calc(18% + 90px)'
                  : 'calc(40% - 90px)',
              top: '50%',
              transform: 'translateY(-50%)',
              background:'#5a882b',
              borderRadius: '9999px',
              boxShadow: '-1px 1px 5px 7px rgba(128, 215, 0, 0.2)',
              backdropFilter: 'blur(4px)',
            }}
          />
            <button
            className="flex-1 rounded-full py-2 px-6 transition-all duration-300 relative z-10"
            onClick={() => setActiveTab('organic')}
            onMouseEnter={() => setHoverTab('organic')}
            onMouseLeave={() => setHoverTab(null)}
          >
            <div className="flex justify-end items-center">
              <span className={`flex justify-end items-center gap-2 ${hoverTab === 'organic' || (!hoverTab && activeTab === 'organic') ? 'text-white' : 'text-[#a2ed56]'}`}>
                <FontAwesomeIcon icon={faGem} className=" w-[18px] h-[16.8px]" />
                ORGANIC
              </span>
            </div>
          </button>

          <button
            className="flex-1 rounded-full py-2 px-6 transition-all duration-300 relative z-10"
            onClick={() => setActiveTab('paid')}
            onMouseEnter={() => setHoverTab('paid')}
            onMouseLeave={() => setHoverTab(null)}
          >
            <div className="flex justify-start items-center">
              <span className={`flex items-center gap-2 ${hoverTab === 'paid' || (!hoverTab && activeTab === 'paid') ? 'text-white' : 'text-[#a2ed56]'}`}>
                <FontAwesomeIcon icon={faGem} className="w-[18px] h-[16.8px]" />
                PAID
              </span>
            </div>
          </button>
            </div>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
            <p className="text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-helveticaneue">
            {splitContent(content[activeTab].text)[0]}
            </p>
        </div>
        <div className="space-y-4">
            <p className="text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-helveticaneue">
            {splitContent(content[activeTab].extraText)[0]}
            </p>
            {activeTab === 'paid' && (
            <ul className="space-y-2 mt-4">
                {content.paid.features.map((feature, index) => (
                <li key={index} className="flex items-center text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-helveticaneue gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    {feature}
                </li>
                ))}
            </ul>
            )}
            {activeTab === 'organic' && (
            <ul className="space-y-2 mt-4">
                {content.organic.features.map((feature, index) => (
                <li key={index} className="flex items-center text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-helveticaneue gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    {feature}
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    </div>
    </div>
);
};

export default MarketingSection;