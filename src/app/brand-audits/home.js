'use client'
import { useEffect, useState } from 'react';

export default function ExploreComponent() {
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const bgImages = [
    "/images/hero-14.jpg",
    "/images/hero-13.jpg",
    "/images/hero-14.jpg",
    "/images/hero-13.jpg",
  ];

  const panelImages = [
    "/images/hero-14.jpg",
    "/images/hero-13.jpg",
    "/images/hero-14.jpg",
    "/images/hero-13.jpg",
  ];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      // First, change image index
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  
      // Immediately trigger fade effect
      setFade(false);
      setTimeout(() => {
        setFade(true); // fade-in effect starts
      }, 10); // tiny delay to allow React to register the change
    }, 5000);
  
    return () => clearInterval(bgInterval);
  }, []);
  
  return (
    <div className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden">
      {/* Two background layers for crossfade */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          key={bgIndex}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${bgImages[bgIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full w-full px-4 md:px-8 lg:px-12 pt-20 md:pt-24 lg:pt-32">
        {/* Title for mobile */}
        <div className="lg:hidden text-white text-center w-full mb-8 z-50">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wider">EXPLORE</h1>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-wide mt-1">THE WORLD</h2>
        </div>

        {/* Left side - Image panels */}
        <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start w-full lg:w-auto py-6 md:py-10 lg:py-16">
          {panelImages.map((img, index) => (
            <div 
              key={index}
              className={`relative rounded-lg overflow-hidden w-16 sm:w-20 md:w-[218px] h-[100px] md:h-[440px] shadow-lg ${
                index % 2 === 0 ? 'animate-float-even' : 'animate-float-odd'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Right side - Text */}
        <div className="hidden lg:block text-white pr-4 md:pr-8 lg:pr-12 z-50 -ml-[180px]">
          <h1 className="text-[150px] text-left font-bold tracking-wider leading-[130px]">EXPLORE</h1>
          <h2 className="text-[70px] text-right font-medium tracking-wide">THE WORLD</h2>
        </div>
      </div>

      {/* Keyframes for panel floating */}
      <style jsx>{`
  @keyframes floatEven {
    0%, 100% { transform: translateY(55px); }
    50% { transform: translateY(-54px); }
  }

  @keyframes floatOdd {
    0%, 100% { transform: translateY(-50px); }
    50% { transform: translateY(50px); }
  }

  .animate-float-even {
    animation: floatEven 4s ease-in-out infinite;
  }

  .animate-float-odd {
    animation: floatOdd 4s ease-in-out infinite;
  }

  /* Mobile styles (max-width: 768px) */
  @media (max-width: 768px) {
    @keyframes floatEvenMobile {
      0%, 100% { transform: translateY(30px); }
      50% { transform: translateY(-30px); }
    }

    @keyframes floatOddMobile {
      0%, 100% { transform: translateY(-28px); }
      50% { transform: translateY(28px); }
    }

    .animate-float-even {
      animation: floatEvenMobile 3s ease-in-out infinite;
    }

    .animate-float-odd {
      animation: floatOddMobile 3s ease-in-out infinite;
    }
  }
`}</style>

    </div>
  );
}
