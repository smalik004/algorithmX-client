'use client'
import { useState, useEffect, useRef } from 'react';

const MobileUISwitcher = () => {
  const [mouseX, setMouseX] = useState(0.5);
  const containerRef = useRef(null);

  // Define image pairs (dark and light versions for each screen)
  const screenPairs = [
    {
      dark: "/images/bscreen1.webp", // Edit profile dark
      light: "/images/wscreen.webp", // Edit profile light
      width: 230
    },
    {
        dark: "/images/bscreen2.webp", // Edit profile dark
        light: "/images/wscreen1.webp", // Edit profile light
      width: 230
    },
    {
        dark: "/images/bscreen3.webp", // Edit profile dark
        light: "/images/wscreen2.webp", // Edit profile light
      width: 230
    },
    {
        dark: "/images/bscreen4.webp", // Edit profile dark
        light: "/images/wscreen3.webp", // Edit profile light
      width: 230
    },
    {
        dark: "/images/bscreen3.webp", // Edit profile dark
        light: "/images/wscreen2.webp", // Edit profile light
      width: 230
    },
  ];

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const relativeX = (e.clientX - containerRect.left) / containerRect.width;
      
      setMouseX(Math.max(0, Math.min(1, relativeX))); // Clamp between 0 and 1
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate background gradient based on mouse position
  const leftColor = '#4c1d95'; // Deep purple
  const rightColor = '#1e40af'; // Deep blue
  const backgroundStyle = {
    background: `linear-gradient(to right, ${leftColor} ${mouseX * 100}%, ${rightColor} ${mouseX * 100}%)`,
    height: '100vh',
    width: '100%',
    transition: 'background 0.05s ease',
  };

  return (
    <div ref={containerRef} style={backgroundStyle} className="relative overflow-hidden">
      <div className="flex justify-center items-center h-full">
      <div className="overflow-x-auto max-w-full px-4 md:overflow-visible">
  <div className="flex space-x-4 relative w-max">
    {screenPairs.map((screen, index) => {
  const totalWidth = containerRef.current ? containerRef.current.clientWidth : 1200;
  const screenTotalWidth = screenPairs.length * screen.width + (screenPairs.length - 1) * 16;
  const startX = (totalWidth - screenTotalWidth) / 2;

  const screenStartX = startX + index * (screen.width + 16);
  const screenEndX = screenStartX + screen.width;

  let darkClipPercentage = 0;

  // Only calculate clip if the mouse is within the screen bounds
  if (containerRef.current) {
    const mouseAbsX = mouseX * totalWidth;
    if (mouseAbsX >= screenStartX && mouseAbsX <= screenEndX) {
      const localX = mouseAbsX - screenStartX;
      darkClipPercentage = (localX / screen.width) * 100;
    } else if (mouseAbsX > screenEndX) {
      darkClipPercentage = 100;
    }
  }

  return (
    <div
      key={index}
      className="phone-frame relative"
      style={{ width: `${screen.width}px` }}
    >
      <div className="rounded-3xl overflow-hidden relative">
        <img
          src={screen.light}
          alt={`Mobile UI light theme ${index + 1}`}
          className="w-full h-auto"
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: `polygon(0 0, ${darkClipPercentage}% 0, ${darkClipPercentage}% 100%, 0 100%)`,
            pointerEvents: "none",
          }}
        >
          <img
            src={screen.dark}
            alt={`Mobile UI dark theme ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
})}
</div>
</div>
      </div>
    </div>
  );
};

export default MobileUISwitcher;