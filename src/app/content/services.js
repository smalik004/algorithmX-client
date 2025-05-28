    'use client';
    import React, { useEffect, useRef, useState } from 'react';
    import styles from "../graphics/styles.module.css";
    import { Montserrat } from "next/font/google";

    const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "700",
    fallback: ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "200",
    fallback: ["sans-serif"],
    });
    const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "600",
    fallback: ["sans-serif"],
    });

    export default function Services() {
    const [isInView, setIsInView] = useState(false);
    const scalableRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            }
        },
        { threshold: 0.5 } // Trigger animation when 50% of the component is in view
        );

        if (scalableRef.current) {
        observer.observe(scalableRef.current);
        }

        return () => {
        if (scalableRef.current) {
            observer.unobserve(scalableRef.current);
        }
        };
    }, [isInView]);

    const features = [
        {
        imageSrc: "./images/Content-Strategy-Development.png",
        title: 'Content Strategy Development',
        description:
            'Our premier content strategy agency develops a customized strategy for creating content that aligns with the objectives of your business.',
        mobileOrder: 1,
        },
        {
        imageSrc: "./images/Content-Creation.png",
        title: 'Content Creation',
        description: 'We offer digital content services, where we generate captivating content like blogs, articles, infographics and videos.',
        mobileOrder: 2,
        },
        {
        imageSrc: "./images/Content-Optimization.png",
        title: 'Content Optimization',
        description: 'AlgorithmX’s content optimization services enhance the performance and visibility of content by leveraging SEO and improving user experience.',
        mobileOrder: 3,
        },
        {
        imageSrc: "./images/Content-Distribution.png",
        title: 'Content Distribution',
        description:
            'Being the best content marketing company in USA, we tactically share content across different platforms such as email, websites, and social media.',
        mobileOrder: 4,
        },
        {
        imageSrc: "./images/Content-Marketing-Consulting.png",
        title: 'Content Marketing Consulting',
        description: "Our digital content marketing services offer support and recommendations regarding development and execution of the content strategies.",
        mobileOrder: 5,
        },
        {
        imageSrc: "./images/Content-Calendar-Management.png",
        title: 'Content Calendar Management',
        description:
            'Scheduling and planning content so it is published consistently and promptly across various platforms.',
        mobileOrder: 6,
        },
    ];

    return (
        <div className="bg-black min-h-screen max-w-full py-16 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16 relative overflow-hidden">
            {/* Background "SCALABLE" text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                ref={scalableRef}
                className={`mb-8 ${styles["main-scalable"]} transform transition-transform duration-700 ${monsterfont.className} ${
                    isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
                }`}
                
                >
                SERVICES
                </span>
            </div>

            {/* Main titles */}
            <div className="relative z-10">
                <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-14 text-white`}>
                CONTENT SERVICES
                </h2>
            </div>
            </div>

            {/* Features Grid */}
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-6xl w-full">
                {features
                .sort((a, b) => a.mobileOrder - b.mobileOrder)
                .map((feature, index) => (
                    <div
                    key={feature.title}
                    className={`flex-1 ${
                        isInView
                        ? feature.mobileOrder === 1 || feature.mobileOrder === 4
                            ? styles['animate-slide-in-left1']
                            : feature.mobileOrder === 3 || feature.mobileOrder === 6
                            ? styles['animate-slide-in-right1']
                            : ''
                        : ''
                    }`}
                    >
                    <FeatureCard
                        imageSrc={feature.imageSrc}
                        title={feature.title}
                        description={feature.description}
                        isHighlighted={index % 2 === 0}
                        className={`md:${
                        feature.mobileOrder === 1
                            ? 'col-start-1'
                            : feature.mobileOrder === 2
                            ? 'col-start-2'
                            : feature.mobileOrder === 3
                            ? 'col-start-3'
                            : feature.mobileOrder === 4
                            ? 'col-start-1'
                            : feature.mobileOrder === 5
                            ? 'col-start-2'
                            : 'col-start-3'
                        }`}
                    />
                    </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    }

    const FeatureCard = ({ imageSrc, title, description, isHighlighted, className }) => (
    <div
        className={`p-8 transition-transform duration-300 hover:-translate-y-2 text-center h-full flex flex-col justify-between ${
        isHighlighted ? `bg-black ${styles['box-border']}` : `bg-[#0f0f0f] ${styles['black-box']}`}
        ${className}`}
    >
        <div className="flex justify-center mb-4">
        <img src={imageSrc} alt={title} className="w-[50px] h-[50px]" />
        </div>
        <div>
        <h3 className={`text-white text=[16px] leading-[24px] tracking-[0.1em] ${monsterfont2.className} mb-4`}>{title}</h3>
        <p className={`text-semi-white ${styles["scale-description"]} `}>{description}</p>
        </div>
    </div>
    );

