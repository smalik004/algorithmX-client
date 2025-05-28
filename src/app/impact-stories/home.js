'use client'
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ShortsHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const videoRefs = useRef([]);
  
  // Sample data for carousel items - reduced to 2 items
  const carouselItems = [
    {
      id: 1,
      videoUrl: "/images/rr.mp4",
      category: "Design, Development",
      title: "Success is something of which we all want more."
    },
    {
      id: 2,
      videoUrl: "/images/rr.mp4",
      category: "Marketing, Strategy",
      title: "Innovation drives progress and shapes our future."
    }
  ];

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    // Set up video event listeners for the current video
    const currentVideo = videoRefs.current[currentIndex];
    
    if (currentVideo) {
      // Reset and play the current video
      currentVideo.currentTime = 0;
      
      const playPromise = currentVideo.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video play error:", error);
        });
      }

      // Set up listener to advance to next slide when video ends
      const handleVideoEnd = () => {
        setDirection("right");
        nextSlide();
      };
      
      currentVideo.addEventListener('ended', handleVideoEnd);
      
      // Clean up
      return () => {
        currentVideo.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden w-full h-screen ">
      <Head>
        <title>Video Carousel</title>
        <meta name="description" content="Animated video carousel with text overlays" />
      </Head>
      
      {/* Videos */}
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentIndex ? 'z-10' : 'z-0'
            } ${
              index === currentIndex ? 'translate-x-0' : 
              (direction === "right" && index < currentIndex) || (direction === "left" && index > currentIndex) 
                ? '-translate-x-full' 
                : 'translate-x-full'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <video
              ref={el => videoRefs.current[index] = el}
              className="w-full h-full object-cover"
              src={item.videoUrl}
              muted
              playsInline
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24">
        <AnimatePresence mode="wait">
          <div key={currentIndex} className="w-full max-w-3xl ">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl font-medium text-white mb-4"
            >
              {carouselItems[currentIndex].category}
            </motion.div>
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {carouselItems[currentIndex].title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center mt-8"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src="/avatar.jpg" alt="Author" className="w-full h-full object-cover" />
                </div>
                <span className="ml-3 text-white">Post by - Paul Flavius</span>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Navigation dots - moved to bottom center with square shape */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex justify-center">
        <div className="grid grid-cols-2 gap-1">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`w-4 h-4 transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows - adjusted for mobile */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-[70%] md:top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors md:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-[70%] md:top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors md:right-6"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}