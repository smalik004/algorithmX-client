    'use client'
    import React, { useEffect, useRef, useState } from 'react';
    import styles from "../video/styles.module.css";
    import { Montserrat } from 'next/font/google';
    import style from './style.module.css'

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '700',
    fallback: ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '300',
    fallback: ["sans-serif"],
    });
    const monsterfont2 = Montserrat({
    subsets: ['latin'],
    weight: '100',
    fallback: ["sans-serif"],
    });

    const ContentDevelopmentProcess = () => {
    const [isInView, setIsInView] = useState(false);
    const craftRef = useRef(null);

    const steps = [
        {
        number: '01',
        title: 'Research and Planning',
        description: 'Conducting in-depth research for understanding the preferences and needs of target audiences. Crafting a content strategy that resonates with the goals of the business and recognizes primary themes and subjects.',
        color: 'bg-green-400',
        },
        {
        number: '02',
        title: 'Content Ideation',
        description: 'We provide customizable content services where we formulate novel ideas and concepts for content based on insights drawn from research results and strategic objectives, involving format, topic, and angle generation that appeal to the target audience.',
        color: 'bg-cyan-400',
        },
        {
        number: '03',
        title: 'Content Creation',
        description: 'AlgorithmX is known as an affordable content services company as we create top-notch content like blogs, articles, infographics or videos at reasonable cost, crafting content that mirrors the brand tone and captivates audience successfully.',
        color: 'bg-red-400',
        },
        {
        number: '04',
        title: 'Editing and Review',
        description: 'Our professional team examines content to ensure it is accurate, consistent and clear by editing it for tone, style and grammar so that it meets the quality expectations and fits the content strategy.',
        color: 'bg-orange-400',
        },
        {
        number: '05',
        title: 'Optimization',
        description: 'AlgorithmX’s content marketing services deliver content that is search engine optimized (SEO) using right meta tags, keywords and structured data to ensure the content is responsive across all mobile devices, user-friendly with smooth navigation.',
        color: 'bg-yellow-400',
        },
        {
        number: '06',
        title: 'Publishing',
        description: 'As one of the top content management companies, we publish content on multiple platforms such as social media channels, websites and blogs utilizing social media campaigns, email newsletters, and partnerships to promote content, ultimately boosting brand interaction and visibility.',
        color: 'bg-blue-400',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            }
        },
        { threshold: 0.5 }
        );

        if (craftRef.current) {
        observer.observe(craftRef.current);
        }

        return () => {
        if (craftRef.current) {
            observer.unobserve(craftRef.current);
        }
        };
    }, [isInView]);

    return (
        <div className="bg-black p-8">
        <div className="max-w-[1150px] mx-auto mt-10">
            <div className="text-center mb-16 relative overflow-hidden">
            <div className="relative z-10">
                <h2 className={`${style["crafting-title"]} ${monsterfont2.className} mt-14 text-white tracking-[0.06em]`}>
                CRAFTING COMPELLING CONTENT 
                </h2>
                <div className="mx-auto w-12 h-1 bg-blue-600 mt-5"></div>
                <h2 className={`${style["crafting-subtitle"]} ${monsterfont1.className} mt-5 text-semi-white tracking-[0.06em]`}>
                A Strategic Approach
                </h2>
            </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between relative">
            {steps.map((step, index) => (
                <div key={step.number} className="relative flex-1">
                {/* Desktop slanted line container */}
                <div className="absolute top-0 right-0 h-full w-2 md:block hidden">
                    {/* Top slanted section */}
                    <div
                    className={`${step.color} absolute top-0 right-0 w-full h-[30%]`}
                    style={{
                        transform: 'skew(0deg, 50deg)',
                        transformOrigin: 'top right',
                    }}
                    />
                    {/* Middle straight section */}
                    <div
                    className={`${step.color} absolute top-[25%] right-0 w-full h-[50%]`}
                    />
                    {/* Bottom slanted section */}
                    <div
                    className={`${step.color} absolute bottom-0 right-0 w-full h-[30%]`}
                    style={{
                        transform: 'skew(0deg, -50deg)',
                        transformOrigin: 'bottom right',
                    }}
                    />
                </div>
                
                {/* Mobile slanted line */}
                <div className="md:hidden block relative h-16 ">
                    {/* Left slanted section */}
                    <div
                    className={`${step.color} absolute left-0 top-[365px] w-[30%] h-1`}
                    style={{
                        transform: 'skew(50deg, 0deg)',
                        transformOrigin: 'left center',
                    }}
                    />
                    {/* Middle straight section */}
                    <div
                    className={`${step.color} absolute left-[25%] top-[365px] w-[50%] h-1`}
                    />
                    {/* Right slanted section */}
                    <div
                    className={`${step.color} absolute right-0 top-[365px] w-[30%] h-1`}
                    style={{
                        transform: 'skew(-50deg, 0deg)',
                        transformOrigin: 'right center',
                    }}
                    />
                </div>
                
                <div className="p-4 mt-2 md:mt-0">
                    <div className="flex items-center mb-2">
                    <span className={`transform rotate-90 ${monsterfont1.className} ${styles["step"]} mr-2`}>
                        STEP
                    </span>
                    <span className={`${styles["number1"]} ${monsterfont.className} text-white`}>
                        {step.number}
                    </span>
                    </div>
                    <h3
                    className={`text-xl font-medium mb-2 ${monsterfont1.className} ${styles["craft-title"]} ${
                        index === 0
                        ? 'text-green-400'
                        : index === 1
                        ? 'text-cyan-400'
                        : index === 2
                        ? 'text-red-400'
                        : index === 3
                        ? 'text-orange-400'
                        : index === 4
                        ? 'text-yellow-400'
                        : 'text-blue-400'
                    }`}
                    >
                    {step.title}
                    </h3>
                    <p className={`text-white ${styles["craft-description"]}`}>
                    {step.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default ContentDevelopmentProcess;