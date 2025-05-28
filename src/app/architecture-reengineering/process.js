'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
  });

const StackCardAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  const cards = [
    { 
      id: 1, 
      title: "Legacy System Assessment", 
      description: "We begin by thoroughly analyzing your existing architecture—evaluating outdated components, performance issues, security risks, and integration gaps that hinder scalability and innovation."
    },
    { 
      id: 2, 
      title: "Goal Definition & Requirement Mapping", 
      description: "Clear re-engineering goals are set in alignment with your business objectives. We map requirements based on performance, modularity, maintainability, and cost-effectiveness."
    },
    { 
      id: 3, 
      title: "Architecture Blueprinting", 
      description: "Our architects craft a detailed blueprint of the new architecture, leveraging modern principles such as microservices, containerization, cloud-native strategies, and domain-driven design."
    },
    { 
      id: 4, 
      title: "Technology Stack Modernization", 
      description: "We replace or upgrade legacy technologies with modern frameworks, APIs, and platforms that align with your long-term scalability, performance, and security goals."
    },
    { 
      id: 5, 
      title: "Modular Redesign & Refactoring", 
      description: "Applications are broken into modular, decoupled components. Redundant or monolithic codebases are refactored to ensure clean separation of concerns and easy maintainability."
    },
    { 
      id: 6, 
      title: "Cloud & DevOps Integration", 
      description: "To support CI/CD and elastic scalability, we integrate cloud-native environments (AWS, Azure, GCP) with DevOps pipelines, ensuring automated testing, deployment, and monitoring."
    },
    { 
      id: 7, 
      title: "Validation, Testing & Performance Tuning", 
      description: "The re-engineered system undergoes rigorous testing—from load and integration testing to code validation and real-world simulation—to ensure it meets performance and quality benchmarks."
    },
    { 
      id: 8, 
      title: "Sustained Evolution & Governance", 
      description: "Post-deployment, we establish governance policies, performance dashboards, and feedback loops to support continuous evolution and adherence to architecture best practices."
    },
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateCardPosition = (index) => {
    if (isMobile) return {}; // No sticky positioning on mobile

    const baseOffset = 150; // Starting position for cards
    const cardHeight = 200; // Approximate height of a card
    const cardGap = 300; // Consistent gap between cards (reduced from 500)
    const scrollThreshold = baseOffset + (index * (cardHeight + cardGap));
    
    // Distance to move up before becoming sticky
    const visibilityThreshold = 150;
    
    if (scrollPosition < scrollThreshold - visibilityThreshold) {
      // Card is still below viewport, maintain full offset
      return { transform: `translateY(${scrollThreshold - scrollPosition}px)` };
    } else if (scrollPosition < scrollThreshold) {
      // Card is entering viewport but not yet sticky - gradually move up
      const progress = (scrollThreshold - scrollPosition) / visibilityThreshold;
      return { transform: `translateY(${progress * visibilityThreshold}px)` };
    } else {
      // Card is sticky
      return { transform: 'translateY(0)' };
    }
  };

  const calculateFirstCardOffset = () => {
    if (isMobile) return {}; // No animation on mobile
    
    const maxOffset = 80; // Maximum amount the first card moves up
    const startOffset = 600; // When first card starts moving up
    const endOffset = 1400; // When first card reaches maximum up position
    
    if (scrollPosition < startOffset) {
      return { transform: 'translateY(0)' };
    } else if (scrollPosition > endOffset) {
      return { transform: `translateY(-${maxOffset}px)` };
    } else {
      const progress = (scrollPosition - startOffset) / (endOffset - startOffset);
      return { transform: `translateY(-${progress * maxOffset}px)` };
    }
  };

  return (
    <div className="bg-black text-white min-h-screen w-full" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6 pt-16">
        {/* Left side content - becomes sticky only on desktop */}
        <div className={`md:w-1/2 ${!isMobile ? 'sticky top-32' : ''} h-[calc(100vh-8rem)] md:pr-12 mb-12 md:mb-0 flex items-center`}>
  <div className="max-w-lg">

  <h2 className={`text-[28px] leading-[32px] ${monsterfont.className}  text-white `}>
  Our Comprehensive
    </h2>
    <h2 className={`text-[28px] leading-[32px] ${monsterfont.className}  text-white `}>
   Approach To 
    </h2>
    
    <h2 className={`text-[30px] leading-[32px] ${monsterfont.className}  text-white mb-4`}>
    Architecture Re-engineering
    </h2>
    <p className="text-[16px] leading-[24px] font-[500] font-helveticaneue text-semi-white">
    Our Architecture Re-engineering process transforms legacy systems into modern, scalable, and modular solutions.
    We analyze existing architectures, identify limitations, and implement modern patterns like microservices, cloud integration, and API-driven design. This ensures better performance, agility, and future-readiness—aligned with your evolving business needs.
    </p>
  </div>
</div>

        
        {/* Right side with stacking cards */}
        <div className="md:w-1/2 relative md:pt-32 pb-32">
          <div className="pt-16">
          {cards.map((card, index) => (
  <div
  key={card.id}
  className={`relative backdrop-blur-md bg-[#2a0e61]/70 border border-green-400/30 rounded-3xl p-8 shadow-xl w-full h-[340px] 
    ${index !== cards.length - 1 ? 'mb-[40px]' : ''} 
    overflow-hidden flex flex-col justify-center transition-transform duration-300 hover:scale-[1.02]
    ${!isMobile ? 'sticky top-[150px]' : ''}`}
  style={calculateCardPosition(index)}
>
  {/* Enhanced green glow overlay */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00ffcc]/25 via-[#00ffcc]/15 to-transparent opacity-80 pointer-events-none z-0" />

  {/* Brighter green grid texture */}
  <div className="absolute inset-0 bg-[radial-gradient(#00ffcc55_1px,transparent_1px)] bg-[size:22px_22px] opacity-20 pointer-events-none rounded-3xl z-0" />

  <h2 className="text-[24px] leading-[28px]  font-[700] text-white font-helveticaneue mb-4 z-10 relative">{card.title}</h2>
  <p className="text-[16px] leading-[20px]  font-[500]  font-helveticaneue text-semi-white z-10 relative">{card.description}</p>
</div>


))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCardAnimation;