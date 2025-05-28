'use client'
import { useState, useEffect, useRef } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right-to-left'); // Animation direction
  const timeoutRef = useRef(null);
  
  const slides = [
    {
      image: '/images/hero-2.jpg',
      title: "It's Time To",
      subtitle: "Travel"
    },
    {
      image: '/images/hero-3.jpg',
      title: "Discover The",
      subtitle: "World"
    },
    {
      image: '/images/hero-2.jpg',
      title: "Experience",
      subtitle: "Adventure"
    }
  ];

  // Function to handle automatic slide transition
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setPrevSlide(currentSlide);
    setDirection('right-to-left');
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  // Set up automatic slide transitions
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isAnimating]);

  // Function to manually change slides
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setIsAnimating(true);
    setPrevSlide(currentSlide);
    
    // Determine direction based on index
    if (index > currentSlide || (index === 0 && currentSlide === slides.length - 1)) {
      setDirection('right-to-left');
    } else {
      setDirection('left-to-right');
    }
    
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images - Show both previous and current during animation */}
      <div className="absolute inset-0">
        {/* Previous slide - only shown during animation */}
        {isAnimating && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slides[prevSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        )}
        
        {/* Current slide with animation */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out`}
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: isAnimating 
              ? direction === 'right-to-left' 
                ? 'translateX(0)' 
                : 'translateX(0)'
              : 'translateX(0)',
            animation: isAnimating 
              ? direction === 'right-to-left' 
                ? 'slideImageFromRight 1000ms forwards' 
                : 'slideImageFromLeft 1000ms forwards'
              : '',
            zIndex: 2
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white" style={{ zIndex: 3 }}>
        <div className="text-center">
          {/* Title with transparent outline text */}
          <div className="relative overflow-hidden mb-2">
            <div
              key={`title-${currentSlide}`} 
              className="text-6xl font-bold"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.5px white',
                animation: isAnimating 
                  ? direction === 'right-to-left'
                    ? 'slideInFromRight 1000ms forwards' 
                    : 'slideInFromLeft 1000ms forwards'
                  : '',
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateX(100%)' : 'translateX(0)'
              }}
            >
              {slides[currentSlide].title}
            </div>
          </div>
          
          {/* Subtitle */}
          <div className="relative overflow-hidden">
            <div
              key={`subtitle-${currentSlide}`} // Force re-render on slide change
              className="text-6xl md:text-8xl font-bold"
              style={{
                animation: isAnimating 
                  ? direction === 'right-to-left'
                    ? 'slideInFromRight 1000ms 300ms forwards' 
                    : 'slideInFromLeft 1000ms 300ms forwards'
                  : '',
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateX(100%)' : 'translateX(0)'
              }}
            >
              {slides[currentSlide].subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3" style={{ zIndex: 4 }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideImageFromRight {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes slideImageFromLeft {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;