    'use client';
    import React, { useEffect, useRef, useState } from 'react';
    import styles from '../graphics/styles.module.css';
    import style from './style.module.css'
    import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '700',
    fallback: ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
    });

    const ServicesSection = () => {
    const [activeBox, setActiveBox] = useState(1); // Default to the middle box
    const [isInView, setIsInView] = useState(false);
    const scalableRef = useRef(null);

    const services = [
        {
        title: 'BRAND STORY',
        description:
            "Offering content as a service, AlgorithmX's skilled writers seamlessly integrate with your team, ensuring that the brand messaging is on-point by adopting your style of writing, persona, and brand voice.",
        position: 'right',
        image: 'images/Brand-Story.png',
        },
        {
        title: 'SEO',
        description:
            'Each content piece smoothly blends the most competitive keywords and addresses user needs to meet their expectations and enhance the overall user experience.',
        position: 'top-border',
        image: 'images/SEO1.png',
        },
        {
        title: 'CONVERSION',
        description:
            'Our strategy is driven by data which guarantees the creation of optimized content tailored for KPIs. Our finest content marketing services also involve examining our competitors and finding out areas of improvement we aim to dominate the conversion process.',
        position: 'left',
        image: 'images/Conversion (1).png',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            }
        },
        { threshold: 0.5 } // Trigger animation when 50% in view
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

    const handleMouseEnter = (index) => {
        setActiveBox(index);
    };

    const handleMouseLeave = () => {
        if (activeBox !== 1) {
        setActiveBox(1);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-6xl mx-auto">
            {/* Zoom-In Effect for "SERVICES" */}
            <div className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                ref={scalableRef}
                className={`mb-8 ${styles['main-scalable']} transform transition-transform duration-700 ${monsterfont.className} ${
                    isInView
                    ? `${styles['scale-110']} ${styles['opacity-100']}`
                    : `${styles['scale-75']} ${styles['opacity-0']}`
                }`}
                >
                SERVICES
                </span>
            </div>
            <div className="relative z-10">
                <h2 className={`${styles['description']} ${monsterfont1.className} mt-6 md:mt-14 text-white`}>
                DRIVING BUSINESS GROWTH
                </h2>
                <h2 className={`${styles['description']} ${monsterfont.className} text-white -mt-2`}>
                THROUGH CONTENT
                </h2>
            </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 ">
            {services.map((service, index) => (
                <div
                key={service.title}
                className={`relative p-4 rounded-[20px] text-center transition-all duration-300 ${
                    activeBox === index || (index === 1 && activeBox === null) ? 'bg-[#131313]' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                    <div className="flex flex-col items-center">
                    <div className="bg-[#2775ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <img src={service.image} alt={service.title} className="w-8 h-8 object-cover" />
                    </div>
                    <h3 className={`${style['growth-title']} ${monsterfont1.className} mt-4`}>{service.title}</h3>
                    <p className={`${style['growth-description']} text-semi-white mt-4`}>{service.description}</p>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    {service.position === 'right' && (
                    <div className="flex flex-col items-start">
                        <div className="flex w-full items-center">
                        <div className="w-2/3">
                            <h3 className={`${style['growth-title']} ${monsterfont1.className} text-left`}>
                            {service.title}
                            </h3>
                        </div>
                        <div className="w-1/3">
                            <div className="bg-[#2775ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                            <img src={service.image} alt={service.title} className="w-8 h-8 object-cover" />
                            </div>
                        </div>
                        </div>
                        <div className="mt-4 text-right">
                        <p className={`${style['growth-description']} text-semi-white`}>{service.description}</p>
                        </div>
                    </div>
                    )}

                    {service.position === 'top-border' && (
                    <div className="flex flex-col items-center text-center relative">
                        <div className="absolute -top-12 bg-[#2775ff] rounded-full w-16 h-16 flex items-center justify-center">
                        <img src={service.image} alt={service.title} className="w-8 h-8" />
                        </div>
                        <h3 className={`${style['growth-title']} ${monsterfont1.className} mt-12`}>{service.title}</h3>
                        <p className={`${style['growth-description']} text-semi-white`}>{service.description}</p>
                    </div>
                    )}

                    {service.position === 'left' && (
                    <div className="flex flex-col items-end">
                        <div className="flex w-full items-center">
                        <div className="w-1/3">
                            <div className="bg-[#2775ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                            <img src={service.image} alt={service.title} className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <h3 className={`${style['growth-title']} ${monsterfont1.className} text-left`}>
                            {service.title}
                            </h3>
                        </div>
                        </div>
                        <div className="mt-4 text-left">
                        <p className={`${style['growth-description']} font-opensans font-[500] text-semi-white`}>{service.description}</p>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default ServicesSection;
