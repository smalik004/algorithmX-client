    'use client';
import React, { useEffect, useRef, useState } from 'react';
    import { Montserrat } from 'next/font/google';
    import styles from "../iphone-app/style.module.css";
    import style from "../graphics/styles.module.css"

    const monsterfont1 = Montserrat ({
    subsets : ["latin"],
    weight :"400",
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
        title: "CONTENT MARKETING STRATEGY DEVELOPMENT",
        description: "First, we’ll complete a competitive content marketing analysis to see how your current website content stacks up against your top three competitors. We then identify the top content keywords in your market area and industry. We can then create a content marketing strategy to help you increase sales and differentiate your brand.",
        image: "/images/ai-img.svg", // Replace with the actual path
        alt: "Consultation Icon",
    },
    {
        title: "CONTENT AUDIENCE DEEP-DIVE",
        description: "Different audiences prefer to consume different types of content, so our next step is to perform a deep-dive into your audience to discover what type of content they prefer. After we know who your audience is, we can start to craft remarkable content they’ll love to engage with.",
        image: "/images/IoT-img.svg", // Replace with the actual path
        alt: "Design Icon",
    },
    {
        title: "CONTENT CREATION",
        description: "The third step is to roll up our sleeves and get to work. We’ll publish targeted, well-written website content optimized for search engines. This includes: 1)Improvements on existing pages 2)Site health and technical structure monitoring and optimizations 3)Blogs 4)Infographics and visual content 5)Email newsletters 6)Social posts And more!",
        image: "/images/blockchain-img.svg", // Replace with the actual path
        alt: "Custom Development Icon",
    },
    {
        title: "CONTENT DISTRIBUTION",
        description: "Having amazing content won’t do your company any good unless prospects can find and engage with it. Every piece of content we create for you will be optimized for search engines so it will be found for related search terms. We also recommend combining your content marketing services with email marketing and social media so it takes up as much online real estate as possible.",
        image: "/images/cloud-img.svg", // Replace with the actual path
        alt: "Testing Icon",
    },
    {
        title: "CONTENT MEASUREMENT AND ANALYTICS REPORTING",
        description: "We provide you with content that drives results, and we do that by tracking and measuring its performance over time. You’ll get easy-to-understand monthly reports on the status and results of all your content campaigns and how they’re affecting your bottom line and branding efforts.",
        image: "/images/AR.svg", // Replace with the actual path
        alt: "Deployment Icon",
    },
    {
        title: "CAMPAIGN OPTIMIZATION & ADJUSTMENT",
        description: "The final step is to take the results and tracking data and use it to tweak your campaigns. With each report, we’ll learn something new about how your audience is receiving your content and then make adjustments to improve visibility. The end result is a continual wheel of sales-driving content that will improve both your brand visibility and the overall effectiveness of your marketing campaigns.",
        image: "/images/metaverse.svg", // Replace with the actual path
        alt: "Support Icon",
    },
    ];

    const CreationServicesGrid = () => {
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
                <h3 className={` text-white text-[24px] leading-[1.1] my-[20px] font-[600] font-helveticaneue  transition-colors duration-300 `}>
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

    export default CreationServicesGrid;
