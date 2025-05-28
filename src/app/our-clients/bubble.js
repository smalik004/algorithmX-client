'use client';
import React, { useEffect, useState } from 'react';

// Component for the video popup
const VideoPopup = ({ isOpen, onClose, videoSrc, caseStudyLink, title, stats }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with semi-transparent background */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-80" 
        onClick={onClose}
      ></div>
      
      {/* Video popup content */}
      <div className="relative z-10 w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-white text-2xl z-20 hover:text-gray-300"
          onClick={onClose}
        >
          ×
        </button>
        
        {/* Video as background */}
        <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc} 
            autoPlay 
            muted
            loop
          ></video>
          
          {/* Content overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
            <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
            
            {/* Stats display similar to the image */}
            <div className="flex flex-wrap gap-8 text-white mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span className="text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <a 
  href="/blogs-internal" 
  target="_blank" 
  className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0.5 active:shadow-md active:shadow-blue-500/20 active:duration-75 w-fit"
>
  <span className="relative z-10">Case Study</span>
  

  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
    />
  </svg>
  

  <span 
    className="absolute inset-0 z-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    aria-hidden="true"
  ></span>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingBubbles = ({ bubbleConfig = [] }) => {
  const [bubbles, setBubbles] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hoveredBubble, setHoveredBubble] = useState(null);
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth === 0) return;

    const baseSpeed = 0.3;

    const initialBubbles = bubbleConfig.map((bubble, index) => {
      const logo = bubble.logo;
      const size = bubble.size;
      const x = bubble.x;
      const y = bubble.y;

      return {
        id: index,
        x,
        y,
        size,
        verticalSpeed: 0.15 + Math.random() * 0.5,
        verticalAmplitude: 5 + Math.random() * 5,
        horizontalSpeed: baseSpeed,
        delay: Math.random() * 6,
        logo,
        opacity: bubble.opacity || 1,
        zIndex: bubble.zIndex || Math.floor(index % 5),
        caseStudyLink: bubble.caseStudyLink || "#",
        videoSrc: bubble.videoSrc || "/videos/default-case-study.mp4",
        title: bubble.title || "Case Study",
        stats: bubble.stats || [
          { value: "22%", label: "Higher Conversion Rate" },
          { value: "4.5", label: "Average Rating on Stores" },
          { value: "30K+", label: "Orders per Day via App" }
        ]
      };
    });

    setBubbles(initialBubbles);

    let animationFrameId;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
      lastTimestamp = timestamp;

      setBubbles(prev =>
        prev.map(bubble => {
          const time = timestamp / 1000 + bubble.delay;
          const verticalOffset = Math.sin(time * bubble.verticalSpeed) * bubble.verticalAmplitude;
          let newX = bubble.x - bubble.horizontalSpeed * deltaTime * 60;

          if (newX < -bubble.size) {
            newX = windowWidth + Math.random() * 100;
          }

          return { ...bubble, x: newX, verticalOffset };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [bubbleConfig, windowWidth]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: `translateY(${bubble.verticalOffset || 0}px)`,
            opacity: bubble.opacity,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease',
            zIndex: bubble.zIndex,
          }}
          onMouseEnter={() => setHoveredBubble(bubble.id)}
          onMouseLeave={() => setHoveredBubble(null)}
          onClick={() => setActivePopup(bubble)}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <img
              src={bubble.logo.img}
              alt={bubble.logo.name}
              className="w-full h-full object-cover rounded-full"
            />
            
            {/* Play icon on hover */}
            {hoveredBubble === bubble.id && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full ">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  className="w-12 h-12"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Video Popup */}
      {activePopup && (
        <VideoPopup 
          isOpen={!!activePopup}
          onClose={() => setActivePopup(null)}
          videoSrc={activePopup.videoSrc}
          caseStudyLink={activePopup.caseStudyLink}
          title={activePopup.title}
          stats={activePopup.stats}
        />
      )}
    </div>
  );
};

const FloatingBubblesPage = () => {
  // Sample data for demonstration
  const logoList = [
    { name: 'Bitcoin', img: '/images/bitcoin.png' },
    { name: 'YouTube', img: '/images/YouTube.png' },
    { name: 'Vue.js', img: '/images/Vuejs.png' },
    { name: 'Firebase', img: '/images/firebase.png' },
    { name: 'Jest', img: '/images/jest.png' },
    { name: 'Cypress', img: '/images/cypress.png' },
    { name: 'TypeScript', img: '/images/typescript.png' },
  ];
  
  const customBubbles = [
    { 
      x: 20, 
      y: 16, 
      size: 110, 
      logo: logoList[0], 
      opacity: 0.95, 
      zIndex: 5,
      caseStudyLink: "https://example.com/case-study-1",
      videoSrc: "/videos/bitcoin-case-study.mp4",
      title: "Bitcoin Payment Integration",
      stats: [
        { value: "35%", label: "Increased Transaction Volume" },
        { value: "4.8", label: "Customer Satisfaction Score" },
        { value: "50K+", label: "Daily Transactions" }
      ]
    },
    { 
      x: 100, 
      y: 35, 
      size: 100, 
      logo: logoList[1], 
      opacity: 0.95, 
      zIndex: 4,
      caseStudyLink: "https://example.com/case-study-2",
      videoSrc: "/videos/youtube-case-study.mp4",
      title: "YouTube Marketing Campaign",
      stats: [
        { value: "2M+", label: "Total Views" },
        { value: "22%", label: "Conversion Rate" },
        { value: "15K", label: "New Customers" }
      ]
    },
    { 
      x: 200, 
      y: 55, 
      size: 100, 
      logo: logoList[2], 
      opacity: 0.95, 
      zIndex: 4,
      caseStudyLink: "https://example.com/case-study-3",
      videoSrc: "/images/rr.mp4",
      title: "Vue.js Application Development",
      stats: [
        { value: "40%", label: "Faster Load Times" },
        { value: "65%", label: "Code Reduction" },
        { value: "3x", label: "Developer Productivity" }
      ]
    },
    { 
      x: 800, 
      y: 55, 
      size: 100, 
      logo: logoList[3], 
      opacity: 0.95, 
      zIndex: 4,
      caseStudyLink: "https://example.com/case-study-3",
      videoSrc: "/images/rr.mp4",
      title: "Vue.js Application Development",
      stats: [
        { value: "40%", label: "Faster Load Times" },
        { value: "65%", label: "Code Reduction" },
        { value: "3x", label: "Developer Productivity" }
      ]
    },
    { 
      x: 600, 
      y: 25, 
      size: 100, 
      logo: logoList[4], 
      opacity: 0.95, 
      zIndex: 4,
      caseStudyLink: "https://example.com/case-study-3",
      videoSrc: "/images/rr.mp4",
      title: "Vue.js Application Development",
      stats: [
        { value: "40%", label: "Faster Load Times" },
        { value: "65%", label: "Code Reduction" },
        { value: "3x", label: "Developer Productivity" }
      ]
    },
    { 
      x: 400, 
      y: 55, 
      size: 100, 
      logo: logoList[5], 
      opacity: 0.95, 
      zIndex: 4,
      caseStudyLink: "https://example.com/case-study-3",
      videoSrc: "/images/rr.mp4",
      title: "Vue.js Application Development",
      stats: [
        { value: "40%", label: "Faster Load Times" },
        { value: "65%", label: "Code Reduction" },
        { value: "3x", label: "Developer Productivity" }
      ]
    },
    
  ];
  
  return (
    <div className="w-full h-screen bg-gray-950">
      <FloatingBubbles bubbleConfig={customBubbles} />
    </div>
  );
};

export default FloatingBubblesPage;