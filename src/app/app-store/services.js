'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from '../graphics/styles.module.css';
import { Montserrat } from "next/font/google";
import style from './style.module.css'

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const ServiceCard = ({ title, description }) => (
  <div className={`relative bg-black ${style["border-design"]} `}>
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-center ">
      <h3 className={`text-[22.4px] p-[5px] leading-[1.1] text-white ${monsterfont2.className}`}>
        {title}
      </h3>
    </div>

    <div className="mt-4">
      <p className={`text-[16px] font-helveticaneue leading-[28px] text-semi-white text-center pt-[22px] mt-[25px]`}>
        {description}
      </p>
    </div>
  </div>
);

const ServicesGrid = () => {
  // Changed this to track if animation has played already
  const [hasAnimated, setHasAnimated] = useState(false);
  const scalableRef = useRef(null);

  const services = [
    {
      title: "Keyword research",
      description: "Our app store optimization agency performs keyword research to identify the keywords by conducting category searches on app store. We leverage ASO tools to keep track of search rankings, keyword analysis and competitor performance to enhance app ranking."
    },
    {
      title: "Tracking & monitoring",
      description: "AlgorithmX's ASO optimization services in California provide constant support by optimizing the app, evaluating its performance, meeting compliance requirements, implementing updates and managing essential elements, ensuring proper management of the performance and reputation of the app on store."
    },
    {
      title: "Product page optimization",
      description: "Just being visible on the app store does not suffice. The key to success lies in getting ample app downloads. We enhance your chances of better app downloads by effective communication using A/B testing to gauge what icons or text perform best."
    },
    {
      title: "Creative services",
      description: "At AlgorithmX, we offer top-notch app store optimization services that involve providing you with app icons, screenshots, copywriting, feature graphics, and value proposition development along with App Store or Google Play preview videos and display assets for monetized Ad campaigns to attract users."
    },
    {
      title: "Conversion optimization",
      description: "Optimizing conversions plays an important role in App Store Optimization. When executed effectively, it has the potential to boost keyword rankings and reduce user acquisition expenses across all platforms. Our top ASO services company in USA, AlgorithmX conducts detailed research and A/B testing to improve your app's position to the pinnacle of ranking charts."
    },
    {
      title: "Paid management",
      description: "Our app store optimization agency specializes in Google Play ASO optimization services for Google Play store ads and App store ads so that your app garners the highest engagement at a minimal cost per tap/install."
    },
    {
      title: "App Store Audit",
      description: "AlgorithmX's app store optimization services offer constant assistance by enhancing your app's design and evaluating user feedback including reviews and ratings. We also lay emphasis on headings, icons, screenshots, application size, update intervals, categories, crash percentage, adherence to guidelines as well as competitor strategies and download data."
    },
    {
      title: "Review Management",
      description: "We deliver the best app store optimization in USA as we efficiently handle app reviews and ratings by immediately responding to user feedback, encouraging positive reviews, and addressing any concerns raised. Moreover, we develop tactics that uphold a high app rating and enhance its credibility on the app store."
    },
    {
      title: "Reporting",
      description: "Our dedicated app store optimization specialists provide comprehensive reports to keep you updated on how your app is performing on the Apple App Store as well as the Google Play Store. In addition to analyzing the primary ASO factors, these reports also offer comparisons with other apps in the market."
    },
  ];

  // Modified Intersection Observer to only trigger animation once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          // Only set to true if it hasn't animated yet
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (scalableRef.current) {
      observer.observe(scalableRef.current);
    }
    
    return () => {
      if (scalableRef.current) {
        observer.unobserve(scalableRef.current);
      }
    };
  }, [hasAnimated]); // Add hasAnimated as a dependency

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SERVICES" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={scalableRef}
              className={`mb-8 ${styles["main-scalable"]} transform transition-transform duration-700 ${monsterfont.className} ${
                hasAnimated ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
            >
              SERVICES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={`${styles["description"]} ${monsterfont1.className} mt-6 md:mt-14 text-white`}>
              APP STORE
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
              OPTIMIZATION SERVICES
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;