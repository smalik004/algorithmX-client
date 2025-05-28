'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from '../graphics/styles.module.css';
import { Montserrat } from "next/font/google";
import style from '../app-store/style.module.css'


const monsterfont = Montserrat({
subsets: ["latin"],
weight: "700",
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "200",
});
const monsterfont2 = Montserrat({
subsets: ["latin"],
weight: "400",
});

const ServiceCard = ({ title, description }) => (
<div className={`relative  bg-black ${style["border-design"]} `}>
    <div className="absolute -top-4 left-20 bg-black md:px-4 p-[5px]">
    <h3 className={`text-[22.4px] leading-[24px] ${monsterfont2.className} text-white`}>{title}</h3>
    </div>
    <div className="mt-4">
    <p className={`${style["description"]} text-semi-white text-center`}>
        {description}
    </p>
    </div>
</div>
);

const YoutubeServicesGrid = () => {
//const [isInView, setIsInView] = useState(false);
//const scalableRef = useRef(null);

const services = [
    {
    title: "YouTube Channel setup",
    description: "We create and optimize your YouTube channel for growth."
    },
    {
    title: "Upload Your Videos",
    description: "Leave the technical aspects to us while you focus on content creation."
    },
    {
    title: "Optimize Videos",
    description: "We enhance video titles, descriptions, and tags to improve rankings and visibility."
    },
    {
    title: "Increase Viewership",
    description: "Maximize watch time, subscriber growth, and overall engagement."
    },
    {
    title: "Audience Engagement",
    description: "Build a loyal community through regular updates, comments, and interactions."
    },
    {
    title: "Copyright infringement",
    description: "We track and manage piracy issues, ensuring your content remains protected."
    },
    {
        title: "Analytics and Reports",
        description: "Comprehensive performance reports, providing insights to refine strategies."
        },
        {
        title: "Video Advertising",
        description: "Run targeted ad campaigns to increase views and attract the right audience."
        },
        {
        title: "Channel Strategy",
        description: "Get expert guidance from certified YouTube professionals on how to grow your channel."
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
            HOW DO WE
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
            HELP YOU?
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

export default YoutubeServicesGrid;
