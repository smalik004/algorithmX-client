'use client';
import React, { useEffect, useRef, useState } from 'react';
    import { Montserrat } from 'next/font/google';
    import styles from "../iphone-app/style.module.css";
    import style from "../graphics/styles.module.css"

    const monsterfont1 = Montserrat ({
    subsets : ["latin"],
    weight :"400",
    fallback : ["sans-serif"],
    })
    const monsterfont = Montserrat ({
    subsets : ["latin"],
    weight :"300",
    fallback : ["sans-serif"],
    })
    const monsterfont4 = Montserrat ({
        subsets : ["latin"],
        weight :"700",
        fallback : ["sans-serif"],
        })

    const services = [
    {
        title: "Keyword Research and Integration",
        description: "Conduct thorough keyword research to identify high-traffic, relevant keywords. Integrate these keywords seamlessly into your content to enhance search engine visibility and attract targeted traffic.",
        image: "/images/ai-img.svg", // Replace with the actual path
        alt: "Consultation Icon",
    },
    {
        title: "On-Page SEO Optimization",
        description: "Optimize content elements such as meta titles, descriptions, headers, and internal links. Ensure content is well-structured and follows best practices for SEO, improving overall search engine rankings.",
        image: "/images/IoT-img.svg", // Replace with the actual path
        alt: "Design Icon",
    },
    {
        title: "Content Creation and Optimization",
        description: "Produce high-quality, engaging content that meets SEO standards. Continuously refine and update existing content to maintain relevance, freshness, and alignment with evolving SEO trends and algorithms.",
        image: "/images/blockchain-img.svg", // Replace with the actual path
        alt: "Custom Development Icon",
    },
    ];


    const CopywritingServicesGrid = () => {
        const [isInView, setIsInView] = useState(false);
          const scalableRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !isInView) {
              setIsInView(true);
            }
          },
          { threshold: 0.5 } // Trigger animation when 50% of the component is in view
        );
    
        if (scalableRef.current) {
          observer.observe(scalableRef.current);
        }
    
        return () => {
          if (scalableRef.current) {
            observer.unobserve(scalableRef.current);
          }
        };
      }, [isInView]);
        
    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={scalableRef}
              className={`${style["main-scalable"]} transform transition-transform duration-700 ${monsterfont4.className} ${
                isInView ? `${style["scale-110"]} ${style["opacity-100"]}` : `${style["scale-75"]} ${style["opacity-0"]}`
              }`}
              
            >
              SERVICES
            </span>
          </div>
          <div className="relative z-10">
            <h2 className={` text-[40px] leading-[48px] ${monsterfont.className} mt-6 md:mt-16 text-white`}>
              SERVICES
            </h2>
            <h2 className={`text-[40px] leading-[48px] ${monsterfont4.className} text-white -mt-2`}>
              FOR EVERYONE
            </h2>
          </div>
        </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <div 
                key={index}
                className="bg-black p-6 rounded-lg hover:bg-zinc-800 border border-zinc-800 group transition-colors duration-1000 ease-in-out"
                >
                <img 
                    src={service.image} 
                    alt={service.alt} 
                    className={` object-contain rounded-lg  ${styles["indus-card-figure"]}  `}
                />
                <h3 className={` text-[24px] leading-[1.1] my-[20px] font-[600] font-helveticaneue  transition-colors duration-300 `}>
                    {service.title}
                </h3>
                <p className={`text-semi-white text-[14px] leading-[24px] font-helveticaneue transition-colors duration-300`}>
                    {service.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default CopywritingServicesGrid;
