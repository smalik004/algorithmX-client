'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css";
import { Montserrat } from 'next/font/google';
import style from './style.module.css'

const monsterfont = Montserrat({
subsets: ['latin'],
weight: '300',
});
const monsterfont1 = Montserrat({
subsets: ['latin'],
weight: '400',
});
const monsterfont2 = Montserrat({
subsets: ['latin'],
weight: '100',
});

const AppDevelopmentProcess = () => {
const [isInView, setIsInView] = useState(false);
const craftRef = useRef(null);

const steps = [
    {
    number: '01',
    title: 'Research & Analysis',
    description: 'Our experienced and affordable mobile app developers in San Francisco upgrade projects by performing competitive analysis and efficiently organizing tasks.',
    color: 'bg-green-400',
    },
    {
    number: '02',
    title: 'Wireframing & Prototyping',
    description: 'Our Custom mobile app development company designs monochrome wireframes and initial prototypes to depict user navigation through the system.',
    color: 'bg-cyan-400',
    },
    {
    number: '03',
    title: 'UI and UX Design',
    description: 'After the client approves the prototype, we meticulously design the project with attention to every detail.',
    color: 'bg-red-400',
    },
    {
    number: '04',
    title: 'Development & Review',
    description: 'Then, we delve into application development and code review at one of the best app development companies in California, AlgortihmX.',
    color: 'bg-orange-400',
    },
    {
    number: '05',
    title: 'Testing & Bug-fixing',
    description: 'Before launching, we conduct rigorous manual and automated testing to detect and fix as many bugs as we can in our custom mobile app development services.',
    color: 'bg-yellow-400',
    },
    {
    number: '06',
    title: 'Maintenance & support',
    description: 'We start including updates and incorporating real user feedback as soon as the project is launched.',
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
    <div className="min-h-screen bg-black p-8 ">
    <div className="max-w-[1150px] mx-auto mt-10">
        <div className="text-center mb-16 relative overflow-hidden">
        <div className="relative z-10">
        <h2 className={` text-[18px] leading-[1.1]  ${monsterfont.className}  text-[#2775ff] `}>
            HOW WE DEVELOP
            </h2>
            <h2 className={` text-[56px] leading-[60px] tracking-[0.06em] ${monsterfont2.className} mt-[20px] text-white `}>
            APP DESIGN & DEVELOPMENT
            </h2>
            <h2 className={`text-[56px] leading-[60px] tracking-[0.06em] ${monsterfont1.className}  text-white `}>
            PROCESS
            </h2>
            <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-5"></div>
            <h2 className={` text-[16px] leading-[1.1] ${monsterfont1.className} mt-5 text-semi-white tracking-[0.06em]`}>
            Simple, Seamless, Streamlined.
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
                className={`${step.color} absolute left-0 top-[290px] w-[30%] h-1`}
                style={{
                    transform: 'skew(50deg, 0deg)',
                    transformOrigin: 'left center',
                }}
                />
                {/* Middle straight section */}
                <div
                className={`${step.color} absolute left-[25%] top-[290px] w-[50%] h-1`}
                />
                {/* Right slanted section */}
                <div
                className={`${step.color} absolute right-0 top-[290px] w-[30%] h-1`}
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
                className={`text-xl font-medium mb-2 ${monsterfont1.className} ${styles["craft-title"]} ml-[30px] ${
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
                <p className={`text-white ${styles["craft-description"]} ml-[30px]`}>
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

export default AppDevelopmentProcess;