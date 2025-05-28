    'use client';
    import React, { useState, useEffect, useRef } from 'react';
    import { Montserrat } from "next/font/google";
    import styles from '../seo/style.module.css'
    import style from '../graphics/styles.module.css'
  

    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "200",
    });
    const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "700",
    });


   

    const PPCServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0.1,
        }
        );

        if (sectionRef.current) {
        observer.observe(sectionRef.current);
        }

        return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
        };
    }, []);

    const services = [
        {
        title: 'PPC Campaigns',
        image: '/images/PPC-Campaigns.png',
        color: 'bg-gradient-to-br from-red-600 to-orange-500',
        description: 'AlgortihmX’s PPC campaign management services utilize advanced data analysis methods and collaborate closely with you to enhance the impact of paid search traffic and online advertising initiatives, guaranteeing the most positive results for your business.',
        },
        {
        title: 'Google Shopping Campaigns',
        image: '/images/Google-Shopping-Campaigns.png',
        color: 'bg-gradient-to-br from-orange-500 to-yellow-600',
        description: 'With our Google PPC management services, we work together to create and run highly optimized Google Shopping ads that target your desired new audience, boosting conversion rates and delivering powerful business results.',
        },
        {
        title: 'Display Advertising',
        image: '/images/Display-Advertising.png',
        color: 'bg-gradient-to-br from-teal-400 to-blue-500',
        description: 'AlgorithmX provides complete assistance for the successful running of display campaigns, including everything from the early designing stage to effective bid control and CRO ( Conversion rate Optimization) in order to achieve the best possible outcomes.',
        },
        {
        title: 'Social Media Advertising',
        image: '/images/Social-Media-Advertising1.png',
        color: 'bg-gradient-to-br from-purple-600 to-purple-900',
        description: 'Our PPC services involve collaborating with you across various social media channels to create a customized paid social strategy that effectively helps you achieve the results that reflect your business goals.',
        },
        {
        title: 'Campaign Results',
        image: '/images/Campaign-Results.png',
        color: 'bg-gradient-to-br from-purple-900 to-blue-600',
        description: 'At our PPC advertising company, we provide real-time PPC reporting that enables you to track your marketing budget and campaign performance offering you insights on revenue growth, and performance and comparing social different channels to drive business growth.',
        },
        {
        title: 'PPC Audits',
        image: '/images/PPC-Audits.png',
        color: 'bg-gradient-to-br from-green-500 to-green-600',
        description: 'We offer the best paid ads services in USA, where our search engine marketing consultants thoroughly analyze your PPC account to make you understand how well your paid advertisements are performing, helping you make informed business decisions.',
        },
    ];

    return (
        <div className="bg-black min-h-screen p-8" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative overflow-hidden">
            {/* Background "SERVICES" text with zoom animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                className={`mb-8 text-5xl md:text-8xl ${monsterfont.className} lg:text-8xl font-bold text-gray-600/20 transform transition-all duration-1000 select-none ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                >
                SERVICES
                </span>
            </div>

            {/* Main titles */}
            <div className="relative z-10">
                <h2 className={` ${style["description"]} ${monsterfont1.className}  text-white`}>
                OUR PPC
                </h2>
                <h3 className={` ${style["description"]}  ${monsterfont.className} font-semibold text-white`}>
                SERVICES
                </h3>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div
                key={index}
                className={`${service.color} rounded-2xl px-12 py-6 transform transition-all duration-300 `}
                >
                <div className="space-y-4">
                    <img
                    src={service.image}
                    alt={service.title}
                    className="w-[50px] h-[50px]"
                    />
                    <h3 className={`text-[24px] font-[700] mt-3 mb-3 font-helveticaneue text-white `}>
                    {service.title}
                    </h3>
                    <p className={`text-[15px] leading-[24px] font-helveticaneue`}>
                    {service.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default PPCServicesSection;
