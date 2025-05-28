'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from "next/font/google";
import Image from "next/image";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback : ["sans-serif"],
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback : ["sans-serif"],
});

const ContentMarketingCMS = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
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

  const impactData = [
    {
      title: "SHOPIFY DEVELOPMENT",
      description: "Our custom CMS development company offers dynamic solutions, such as setting up your store, creating unique themes, integrating applications, and providing continuous assistance on Shopify which serves a vast community of 1.7 million merchants spanning 175 countries.",
      accentColor: "rgb(239, 68, 68)", // red
      borderColor: " rgba(217,48,45,0.3)",
      imagePath: "/images/Shopify-dev.png", // Replace with your actual image path
    },
    {
      title: "MAGENTO DEVELOPMENT",
      description: "AlgorithmX provides personalized CMS development services which include setting up stores, customizing themes, integrating apps and constant support for Magento that caters to more than 250,000 merchants globally.",
      accentColor: "rgb(234, 179, 8)", // yellow
      borderColor: "rgba(255, 202, 0, 0.3)",
      imagePath: "/images/Magento-dev.png", // Replace with your actual image path
    },
    {
      title: "WORDPRESS DEVELOPMENT",
      description: "Our best CMS web developers offer top-notch CMS development services like developing websites, customizing themes, and integrating plugins, as well as providing E-commerce solutions and optimizing SEO for WordPress, a platform that fuels more than 40% of websites on the internet.",
      accentColor: "rgb(34, 197, 94)", // green
      borderColor: "rgba(0, 215, 72, 0.3)",
      imagePath: "/images/Wordpress.png", // Replace with your actual image path
    },
    {
      title: "HUBSPOT DEVELOPMENT",
      description: "At our custom CMS development agency, we specialize in configuring HubSpot portals and creating bespoke solutions, leveraging the power of sales and marketing strategies to boost growth and elevate buyer experience.",
      accentColor: "rgb(59, 130, 246)", // blue
      borderColor: "rgba(66, 133, 244, 0.4)",
      imagePath: "/images/HubSpot (1).png", // Replace with your actual image path
    },
    {
      title: "BIGCOMMERCE DEVELOPMENT",
      description: "From startups to enterprise-level businesses, our CMS development services serve all by utilizing the adaptable structure, powerful capabilities, and a broad suite of tools offered by the major ecommerce platform of BigCommerce.",
      accentColor: "rgb(236, 72, 153)", // pink
      borderColor: "rgba(234, 15, 180, 0.3)",
      imagePath: "/images/Bigcommerce.png", // Replace with your actual image path
    },
    {
      title: "DRUPAL DEVELOPMENT",
      description: "Being a leading CMS development company in USA, AlgorithmX develops, personalizes, and maintains websites and apps as per client's requirements using the unbeatable customization and scalability of Drupal that caters to more than 1.3 million websites globally.",
      accentColor: "rgb(88, 9, 134)", // purple
      borderColor: "rgba(88, 9, 134, 0.3)",
      imagePath: "/images/drupal.png", // Replace with your actual image path
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Header Section */}
        <div className="flex  items-start md:items-center justify-between mb-12 gap-10">
          <h1 className={`text-[44px] leading-[48px] ${monsterfont1.className}`}>
            Utilize our CMS<span className={`text-[44px] leading-[48px] ${monsterfont.className}`}><br/> Development Services </span>
          </h1>
        </div>

        {/* Impact Cards Grid */}
        <div 
          ref={scalableRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {impactData.map((item, index) => (
            <div
              key={index}
              className={`relative p-6 max-h-[270px] rounded-[21px] bg-black transition-all duration-700 transform
                ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{
                transitionDelay: `${index * 200}ms`,
                border: `1px solid ${item.borderColor}`,
              }}
            >
              {/* Accent Bar */}
              <div
                className="absolute w-[26px] h-[90px] right-[-2px] top-[calc(50%-45px)] rounded-l-2xl"
                style={{ backgroundColor: item.accentColor }}
              />
            
              {/* Content */}
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-[24px] leading-[28px] font-[500] font-helveticaneue text-white w-4/5 hover:text-blue-500`}>{item.title}</h3>
                <div className="relative w-[50px] h-[50px]">
                  {/* Using Next.js Image component for better performance */}
                  <Image 
                    src={item.imagePath}
                    alt={`${item.title} icon`}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className={`text-[15px] leading-[24px] font-[400] font-helveticaneue text-semi-white hover:text-white`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingCMS;