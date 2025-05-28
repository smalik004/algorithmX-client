    'use client';
    import React, { useState, useEffect, useRef } from 'react';
    import Link from 'next/link';
    import styles from '../seo/style.module.css'
    import { Montserrat } from "next/font/google";
    


    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "200",
    });
    const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "800",
    });

    const SocialServicesSection = () => {
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
        title: 'Facebook',
        image: '/images/Facebook.png',
        color: 'bg-gradient-to-br from-red-600 to-orange-500',
        link: '/facebook-management',
        description: 'Facebook remains the leading social media platform, with 3 billion active users across the globe. Facebook’s extensive reach and sophisticated audience targeting capabilities have made it the prime choice for businesses looking to increase their visibility, connect with their audience, and optimize advertising budgets. Leverage our social media marketing services to boost your Facebook advertising strategies.',
        },
        {
        title: 'Instagram',
        image: '/images/Instagram.png',
        color: 'bg-gradient-to-br from-orange-500 to-yellow-600',
        link: '/instagram-management',
        description: 'Instagram holds the power to boost interaction significantly through engaging posts without spending on ads. In the United Kingdom alone, this platform garners an estimated following of 23.82 million people, 32.3% of whom fall within the critical age group of 25-34 years. an important demographic for most businesses. Our social media marketing agency believes Instagram advertisements could be highly beneficial for online retail businesses.',
        },
        {
        title: 'TikTok',
        image: '/images/TikTok.png',
        color: 'bg-gradient-to-br from-teal-400 to-blue-500',
        link: '/tiktok-management',
        description: 'AlgorithmX’s social media marketing services involve TikTok marketing. As Generation Z grows older and starts buying homes, joining millennials who already own homes, it is essential to connect with them on platforms they like. TikTok known for its focus on visuals, provides opportunities for home retailers to display their products better.',
        },
        {
        title: 'Twitter',
        image: '/images/Twitter.png',
        color: 'bg-gradient-to-br from-purple-600 to-purple-900',
        link: '/twitter-management',
        description: 'Twitter provides a great platform for sharing updates and engaging with your customers. When compared to other networks, Twitter users spend 26% more time watching ads, enabling you to reach your target audience through options such as demographics and interests.',
        },
        {
        title: 'Pinterest',
        image: '/images/Pinterest.png',
        color: 'bg-gradient-to-br from-purple-900 to-blue-600',
        link: '#',
        description: 'Pinterest, a social media platform often criticized for its low value, serves as a prospective home commerce and e-commerce medium and has a follower count of 335 million people globally. Despite its understated reputation, our social media marketing agency recognizes its extensive reach which presents prospects for businesses looking to increase their online visibility and target prospective buyers.',
        },
        {
        title: 'YouTube',
        image: '/images/YouTube.png',
        color: 'bg-gradient-to-br from-green-500 to-green-600',
        link: '/youtube-management',
        description: 'YouTube has grown to become an influential platform for sharing content and marketing brands with over 2.5 billion collective users watching 1 billion hours of video every day. You can effectively engage your audience by utilizing both organic and paid approaches on the platform and boost your brand visibility among its large user community with our social media marketing services.',
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
                <h2 className={`${monsterfont1.className} text-[40px] mt-12 text-white`}>
                OUR DIVERSE
                </h2>
                <h3 className={`text-[40px]  ${monsterfont.className}  text-white`}>
                Social Media Services
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
                    <Link href={service.link}>
                    <span className="hover:text-blue-600 cursor-pointer">{service.title}</span>
                  </Link>
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

    export default SocialServicesSection;
