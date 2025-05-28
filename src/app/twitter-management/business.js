'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from '../graphics/styles.module.css';
import { Montserrat } from "next/font/google";
import style from '../app-store/style.module.css'


const monsterfont = Montserrat({
subsets: ["latin"],
weight: "700",
fallback : ["sans-serif"],
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "200",
fallback : ["sans-serif"],
});
const monsterfont2 = Montserrat({
subsets: ["latin"],
weight: "600",
fallback : ["sans-serif"],
});

const ServiceCard = ({ title, description }) => (
<div className={`relative  bg-black ${style["border-design"]} `}>
    <div className="absolute -top-4 left-20 bg-black md:px-4 p-[5px]">
    <h3 className={`text-[22.4px] font-helveticaneue leading-[24px] font-[400] text-white`}>{title}</h3>
    </div>
    <div className="mt-4">
    <p className={`text-[16px] font-helveticaneue leading-[28px] text-semi-white text-center`}>
        {description}
    </p>
    </div>
</div>
);

const TwitterServicesGrid = () => {
//const [isInView, setIsInView] = useState(false);
//const scalableRef = useRef(null);

const services = [
    {
    title: "Audience Reach",
    description: "Engage with over 100 million daily active users to connect with a diverse and global audience."
    },
    {
    title: "Brand Visibility",
    description: "Strengthen your brand with regular, strategically planned posts that attract attention and drive conversations."
    },
    {
    title: "Customer Engagement",
    description: "Foster relationships with your audience through direct conversations, polls, and interactions."
    },
    {
    title: "Industry Insights",
    description: "Stay up-to-date on industry trends and competitors by following key accounts and engaging in discussions."
    },
    {
    title: "Content Sharing",
    description: "Share informative articles, blog posts, and multimedia content that showcase your expertise and drive traffic to your website or other social media channels."
    },
    {
    title: "Networking Opportunitiest",
    description: "Build relationships with influencers, thought leaders, and potential business partners."
    },
];

/* Intersection Observer to detect if the text is in view
useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
        setIsInView(true);
        } else {
        setIsInView(false);
        }
    },
    { threshold: 0.5 }
    );
    if (scalableRef.current) {
    observer.observe(scalableRef.current);
    }
    return () => {
    if (scalableRef.current) {
        observer.unobserve(scalableRef.current);
    }
    };
}, []); */

return (
    <div className="min-h-screen bg-black p-4">
    <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16 relative overflow-hidden">
        {/* Background "SCALABLE" text 
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
            ref={scalableRef}
            className={`mb-8  ${styles["main-scalable"]} transform transition-transform duration-700 ${monsterfont.className} ${
                isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
            }`}
            
            >
            </span>
        </div>
        */}

        {/* Main titles */}
        <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-14 text-white`}>
            WHY TWITTER IS YOUR 
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
            BUSINESS'S SECRET WEAPON
            </h2>
        </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
            <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            />
        ))}
        </div>
    </div>
    </div>
);
};

export default TwitterServicesGrid;
