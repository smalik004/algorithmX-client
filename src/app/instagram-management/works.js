'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../erp/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '400',
    fallback: ["sans-serif"],
  });
  

const carouselData = [
    {
        id: 'erp-consulting',
        icon: "images/advertisements.png",
        title: "Advertisements",
        description: "Paid Instagram ads can extend your reach to followers you haven’t interacted with yet. AlgorithmX Instagram marketing services can help your brand create a plan to make your money work for you."
    },
    {
        id: 'custom-erp',
        icon: "images/profile-optimization.png",
        title: "Profile Optimization",
        description:"A professional, optimized profile builds credibility. We craft a branded profile image, compelling bio, and cohesive highlights that showcase your brand’s personality, making your profile more attractive to new followers."
      
    },
    {
        id: 'erp-implementation',
        icon: "images/follower-optectics.png",
        title: "Followers Tactics",
        description: "We implement strategies to grow your audience organically, such as engaging with relevant accounts, responding to comments, and sharing user-generated content to foster a strong community around your brand."
    },
    {
        id: 'erp-development',
        icon: "images/keyword-research1.png",
        title: "Keyword Research",
        description: "With strategic hashtag and keyword research, we make it easier for potential followers to find you. We use targeted, high-impact Instagram hashtags to attract relevant followers and drive more engagement."
    },
    {
        id: 'managed-erp',
        icon: "images/a-regular-posting-scedule.png",
        title: "A Regular Posting Schedule",
        description:"Consistency is vital on Instagram. We develop a regular posting calendar to keep your brand top-of-mind, maintaining relevance and fostering an engaged community that looks forward to your content."
    },
    {
        id: 'staff-augmentation',
        icon: "images/story-integration.png",
        title: "Story Integration",
        description: "Stories and Reels are powerful tools for engagement on Instagram. We help you create eye-catching, timely content for Stories and Reels that highlights your brand, driving interaction and visibility."
    }
];

const InstagramCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const totalItems = carouselData.length;
    const carouselRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? totalItems - 1 : prevIndex - 1
        );
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(currentIndex);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        
        if (Math.abs(walk) > 100) {
            if (walk > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
        }
    };

    const getVisibleItems = () => {
        if (isMobile) {
            return [{ ...carouselData[currentIndex], index: currentIndex }];
        }
        const items = [];
        const totalVisible = 5;
        const start = currentIndex - 2;
        for (let i = 0; i < totalVisible; i++) {
            let index = (start + i + totalItems) % totalItems;
            items.push({ ...carouselData[index], index });
        }
        return items;
    };

    const getItemStyle = (position) => {
        if (isMobile) return 'opacity-100 scale-100 z-20';
        const isCenter = position === 0;
        const isAdjacent = Math.abs(position) === 1;
        const isOuter = Math.abs(position) === 2;

        return `${isCenter ? 'z-20 opacity-100 scale-100' : ''} 
                ${isAdjacent ? 'z-10 opacity-80 scale-90' : ''} 
                ${isOuter ? 'z-0 opacity-30 scale-70' : ''}`;
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="w-full mx-auto px-4 py-8 bg-black relative">
            <h1 className={`${styles["erp-text"]} ${monsterfont1.className} text-white mb-12`}>
                How It Works
            </h1>
            <div 
                ref={carouselRef}
                className="relative flex items-center justify-center w-full h-[500px] md:h-[600px] overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
            >
                {visibleItems.map((item, index) => {
                    const position = isMobile ? 0 : index - 2;

                    return (
                        <div
    key={item.id}
    className={`absolute transition-all duration-500 ease-in-out ${getItemStyle(position)}`}
    style={{
        transform: isMobile ? 'translateX(0)' : `translateX(${position * 400}px)`,
        width: isMobile ? "90%" : "350px",
        height: isMobile ? "auto" : "auto", // changed from "700px" to "auto"
    }}
>

<div className={`bg-black bg-opacity-50 p-6 md:p-14  w-full h-fit-content ${styles["box-border"]}`}>
                                <div className="flex flex-col items-center space-y-4">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-[50px] h-[50px] object-contain mt-6"
                                    />
                                    <h3 className={`${styles["erp-title"]} ${monsterfont.className} text-center text-white mt-6`}>
                                        {item.title.split(" ").map((word, idx) => (
                                            <span key={`${item.id}-word-${idx}`} className="block">{word}</span>
                                        ))}
                                    </h3>
                                    <p className={`text-semi-white ${styles["erp-description"]} font-helveticaneue text-center md:p-4 md:mb-2`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-8">
                <div className="inline-flex items-center gap-4 bg-black bg-opacity-50 px-4 py-2 rounded-full border border-gray-700">
                    <button
                        onClick={prevSlide}
                        className="p-2 hover:bg-gray-700 rounded-full transition-colors text-white text-xl font-bold"
                        aria-label="Previous slide"
                    >
                        &lt;
                    </button>
                    <div className="flex space-x-2">
                        {carouselData.map((item, idx) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === currentIndex ? 'bg-white w-4' : 'bg-gray-600'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="p-2  rounded-full transition-colors text-white text-xl font-bold"
                        aria-label="Next slide"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstagramCarousel;