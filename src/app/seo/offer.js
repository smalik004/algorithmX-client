    'use client';
    import React, { useState, useEffect, useRef } from 'react';
    import styles from './style.module.css'
    import style from '../graphics/styles.module.css'
    import { Montserrat } from "next/font/google";
 
    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "200",
    });
    const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "700",
    });

    const SEOServicesSection = () => {
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
        title: 'SEO Audits & Consultancy',
        image: '/images/SEO-Audits-and-Consultancy.png',
        color: 'bg-gradient-to-br from-red-600 to-orange-500',
        description: 'With our professional SEO services, boost your website’s search engine ranking potential by conducting a thorough SEO audit, uncovering improvements required for your website to perform better on search engines, guaranteeing visibility and overall success.',
        },
        {
        title: 'Local SEO',
        image: '/images/Local-SEO.png',
        color: 'bg-gradient-to-br from-orange-500 to-yellow-600',
        description: 'AlgorithmX’s enterprise SEO services focus on helping businesses with offline stores grow their clientele and set their brand apart in online searches, improving visibility to boost customer reach and ensuring the business prospers locally and internationally.',
        },
        {
        title: 'Technical SEO',
        image: '/images/Technical-SEO.png',
        color: 'bg-gradient-to-br from-teal-400 to-blue-500',
        description: 'Our team of the best SEO experts in California specializes in overcoming challenges to improve your business’s indexing and conversions by ensuring that your website is fast, tailored for relevant audiences, and seamlessly indexable on the search engine succeeding in achieving your business objectives.',
        },
        {
        title: 'Google Analytics',
        image: '/images/Google-Analytics1.png',
        color: 'bg-gradient-to-br from-purple-600 to-purple-900',
        description: 'By working closely with you we will fully comprehend the dynamics of your website, analyzing how users interact with it. We will examine patterns, identify trends and potential new audiences, setting goals and objectives for effective comparisons.',
        },
        {
        title: 'Keyword Research',
        image: '/images/Keyword-Research.png',
        color: 'bg-gradient-to-br from-purple-900 to-blue-600',
        description: 'AlgorithmX offers top-notch search engine optimization services where we find out what your customers want and improve your rankings on search engines by using content optimized with keywords. Our meticulous research helps create an effective strategy, excelling at on-page SEO techniques.',
        },
        {
        title: 'SEO Training',
        image: '/images/SEO-Training.png',
        color: 'bg-gradient-to-br from-green-500 to-green-600',
        description: 'AlgorithmX is dedicated to achieving standards and helping others improve their SEO skills by offering excellent training as part of our SEO services. As a leading SEO company, we take pride in sharing knowledge and fostering growth in this area.',
        },
    ];

    return (
        <div className="bg-black min-h-screen p-8" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 relative overflow-hidden">
            {/* Background "SERVICES" text with zoom animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                className={`mb-8 text-5xl md:text-8xl ${monsterfont.className} text-gray-600/20 transform transition-all duration-1000 select-none ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                >
                SERVICES
                </span>
            </div>

            {/* Main titles */}
            <div className="relative z-10">
            <h2 className={`${monsterfont1.className} text-[40px] mt-12 text-white`}>
                SEO Services
                </h2>
                <h3 className={`text-[40px]  ${monsterfont.className}  text-white`}>
                WE OFFER
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
                    className="w-[50px] h-[50px"
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

    export default SEOServicesSection;
