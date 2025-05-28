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
    text: "Our social media consulting services offer expert guidance to elevate your online presence. With practical insights from seasoned social media consultants, we help craft customized social media strategies that foster genuine engagement. From optimizing profiles to creating compelling content, our team ensures your social media channels attract likes and followers while driving meaningful interactions. We focus on analytics-driven strategies and offer ongoing support to keep your approach effective and relevant. Perfect for businesses of all sizes, including small businesses and enterprises, our consultation empowers you to build a loyal audience through community-building techniques and targeted messaging.",
    features: [
    ]
},
    paid: {
    text: "Unlock the potential of social media marketing with AlgorithmX’s expert consultants. Our social media marketing consulting services include hands-on advice on every aspect of your ad campaigns— from precise audience targeting and persuasive ad copy to landing page optimization. Whether you're looking to partner with the best social media consulting companies in the US or exploring offshore social media consulting options, our team tailors solutions to your needs. Our strategies aim to increase engagement, boost followers, and drive measurable revenue growth, making us an ideal choice for both small businesses and enterprises alike.From San Diego to international markets, partner with AlgorithmX to maximize your return on investment with customized social media strategies that resonate with your target audience and produce real results.",
    features: [
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

return (
    <div className="min-h-screen bg-black text-gray-300 p-4 flex justify-center items-center">
    <div className="max-w-[1200px] mx-auto md:p-8">
        <div className="mb-16 text-center space-y-2">
        <div className="relative z-10">
            <h2 className={`${styles["description"]} ${monsterfont1.className} mt-6 md:-mt-[60px] text-white`}>
            SERVICES
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
            YOU NEED
            </h2>
        </div>
        </div>

        <div className="relative mb-12">
        <div className="flex justify-center items-center">
        <div className="flex rounded-[33px] border-[1px] border-[#a2ed56] p-2 relative md:min-w-[720px]">

            <div 
            className="hidden md:flex absolute h-[calc(100%-8px)] transition-all duration-300 ease-in-out"
            style={{
              width: '320px',  // Adjust this value to control background width
              height: '45px',  // Adjust this value to control background height
              left: hoverTab 
                ? hoverTab === 'paid' 
                  ? 'calc(38% + 90px)' // Center in right half
                  : 'calc(16% - 90px)'  // Center in left half
                : activeTab === 'paid'
                  ? 'calc(38% + 90px)'
                  : 'calc(16% - 90px)',
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
              width: '180px',  // Adjust this value to control background width
              height: '80px',  // Adjust this value to control background height
              left: hoverTab 
                ? hoverTab === 'paid' 
                  ? 'calc(26% + 90px)' // Center in right half
                  : 'calc(26% - 90px)'  // Center in left half
                : activeTab === 'paid'
                  ? 'calc(26% + 90px)'
                  : 'calc(26% - 90px)',
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
              <span className={`flex justify-end font-helveticaneue font-[700] text-[12px] md:text-[16px] tracking-[0.05em] items-center gap-1 ${hoverTab === 'organic' || (!hoverTab && activeTab === 'organic') ? 'text-white' : 'text-[#a2ed56]'}`}>
                <FontAwesomeIcon icon={faGem} className=" w-[18px] h-[16.8px]" />
                SOCIAL STRATEGY CONSULTING
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
              <span className={`flex items-center font-helveticaneue font-[700] text-[12px] md:text-[16px] tracking-[0.05em] gap-2 ${hoverTab === 'paid' || (!hoverTab && activeTab === 'paid') ? 'text-white' : 'text-[#a2ed56]'}`}>
                <FontAwesomeIcon icon={faGem} className="w-[18px] h-[16.8px]" />
                ADVERTISING STRATEGY
              </span>
            </div>
          </button>
            </div>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
            <p className="text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-helveticaneue">
            {content[activeTab].text}
            </p>
        </div>
        <div className="space-y-4">
            <p className="text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-helveticaneue">
            {content[activeTab].extraText}
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