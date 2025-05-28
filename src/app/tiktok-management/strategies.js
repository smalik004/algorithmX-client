'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../erp/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});


    const carouselData = [
        {
            id: 'ideas',
            icon: "images/content-ideas.png",
            title: "Content Ideas",
            description: "We’re always on top of the latest TikTok trends and will provide ideas that keep your brand in the mix. All you have to do is film! We take your raw footage and turn it into polished, high-engagement TikTok videos, making sure every detail works to get attention."
        },
        {
            id: 'custom-erp',
            icon: "images/video-editing.png",
            title: "Video Editing",
            description:"You provide us with the video content you would like to use, and we will edit them to perform best on TikTok! We will use our top-notch video editing software to optimize your TikTok content!"      
        },
        {
            id: 'monitoring',
            icon: "images/monitoring.png",
            title: "Monitoring",
            description: "We manage the day-to-day, keeping up with comments, duets, and messages, so your audience feels seen and heard."
        },
        {
            id: 'erp-development',
            icon: "images/monthly-reports.png",
            title: "Monthly Reports",
            description: "Our experienced TikTok manager will keep you updated with easy-to-understand reports that show your progress—everything from growth rates to who’s watching your videos and how long they’re sticking around."
        },
        {
            id: 'custom-erp1',
            icon: "images/video-editing.png",
            title: "Video Editing",
            description:"You provide us with the video content you would like to use, and we will edit them to perform best on TikTok! We will use our top-notch video editing software to optimize your TikTok content!"      
        },
        {
            id: 'custom-erp2',
            icon: "images/video-editing.png",
            title: "Video Editing",
            description:"You provide us with the video content you would like to use, and we will edit them to perform best on TikTok! We will use our top-notch video editing software to optimize your TikTok content!"      
        },
    ];


const TiktokCarousel = () => {
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
        const totalVisible = Math.min(5, totalItems); // Adjust visible items based on total
        const start = currentIndex - Math.floor(totalVisible / 2);
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
            <h1 className={`${styles["erp-text"]} text-white ${monsterfont.className} mb-12`}>
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

                            <div className={`bg-black bg-opacity-50 p-6 md:p-14 ${styles["box-border"]} w-full h-auto`}>
                                <div className="flex flex-col items-center space-y-4">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-12 h-12 object-contain mt-6"
                                    />
                                    <h3 className={`${styles["erp-title"]} ${monsterfont.className} text-white text-center mt-6`}>
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
                <div className="inline-flex items-center gap-4 bg-black bg-opacity-50 px-4 py-2 rounded-full border border-white">
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
                        className="p-2 hover:bg-gray-700 rounded-full transition-colors text-white text-xl font-bold"
                        aria-label="Next slide"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TiktokCarousel;