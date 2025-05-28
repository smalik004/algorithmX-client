'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "500",
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"], // Explicit fallback
});

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Brand Strategy',
      image: '/images/brand.png',
      gradient: 'linear-gradient(30deg, #ff5000 0%, #cd0055 100%)',
      items: [
        'BRAND STORY',
        'BRAND NAMING',
        'BRAND DNA',
        'TAGLINE DEVELOPMENT',
        'BRAND POSITIONING',
        'TONE OF VOICE',
        'UNIQUE VALUE PROPOSITION',
        'TARGET AUDIENCE'
      ]
    },
    {
      title: 'Packaging Design',
      image: '/images/packaging-design.png',
      gradient: 'linear-gradient(30deg, #ff9900 0%, #ff6600 100%)',
      items: [
        'CREATIVE IDEATION',
        'COLOUR PAIRINGS & COMBINATIONS',
        'CRAFTING INNER & OUTER PACKAGING',
        'PRODUCT INFORMATION GUIDES',
        'LEAFLETS/INSERTS',
        'ADAPTING APPROVED DESIGNS TO VARIOUS LAYOUTS'
      ]
    },
    {
      title: 'Brand Identity',
      image: '/images/brand-identity.png',
      gradient: 'linear-gradient(30deg, #00b4db 0%, #0083b0 100%)',
      items: [
        'LOGO DESIGN',
        'BRAND COLOUR PALETTE',
        'TYPOGRAPHY',
        'GRAPHICAL ASSETS',
        'SIGNAGE & WAYFINDING',
        'BRAND BOOK',
        'BROCHURE DESIGN',
        'MENU DESIGN'
      ]
    },
    {
      title: 'Brand Naming & Tagline',
      image: '/images/Brand-name-and-tagline.png',
      gradient: 'linear-gradient(150deg, #553388 0%, #cd0055 100%)',
      items: [
        'CREATIVE TERRITORIES',
        'BRAND NAMES',
        'RATIONALES',
        'DUE DILIGENCE'
      ]
    },
    {
      title: 'Illustration',
      image: '/images/illustration.png',
      gradient: 'linear-gradient(150deg, #553388 0%, #2299dd 100%)',
      items: [
        'DIGITAL WALL ART',
        'WEBSITE GRAPHICS',
        'CHARACTER DESIGN',
        'INFOGRAPHICS',
        'ICON DESIGN'
      ]
    },
    {
      title: 'Brand Videos',
      image: '/images/brand-video.png',
      gradient: 'linear-gradient(90deg, #05a234 0%, #069552 100%)',
      items: [
        'LOGO ANIMATION',
        'BRAND EXPLAINER VIDEOS',
        'MOTION GRAPHICS',
        'SOCIAL MEDIA SHORTS',
        'CAMPAIGN VIDEOS'
      ]
    }
  ];
  

  return (
    <div className="bg-black min-h-screen p-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SERVICES" text with zoom animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className={`mb-8 text-5xl md:text-8xl ${monsterfont.className} lg:text-8xl font-bold text-gray-600/20 transform transition-all duration-1000 select-none ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            >
              SERVICES
            </span>
          </div>
          
          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={`${monsterfont1.className} text-4xl mt-12 text-white`}>
              BRANDING SERVICES
            </h2>
            <h3 className={`text-3xl md:text-4xl ${monsterfont.className} font-semibold text-white`}>
              WE OFFER
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
            key={index}
            className="rounded-[10px] px-12 py-6 transform transition-all duration-300"
            style={{ background: service.gradient }}
          >
              <div className="space-y-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16"
                />
                <h3 className={`text-[24px]  leading-[1.1] font-helveticaneue font-[700] text-white`}>
                  {service.title}
                </h3>
                <ul>
                  {service.items.map((item, idx) => (
                    <li key={idx} className={`text-white text-[15px] leading-[1.5rem] font-helveticaneue font-[500]`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;