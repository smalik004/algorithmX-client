'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
import { Plus, Minus } from 'lucide-react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback : ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback : ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback : ["sans-serif"],
});


const AccordionItem = ({ title, content, isActive, onClick, isInView }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center py-4 text-left text-white hover:text-blue-500 transition-colors duration-300 border-t border-b border-white transform transition-transform duration-500
        }`}
      >
        <span className={`text-[21px] leading-[22px] ${monsterfont2.className} `}>{title}</span>
        {isActive ? (
          <Minus className="transition-transform duration-300" size={24} />
        ) : (
          <Plus className="transition-transform duration-300" size={24} />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="py-10 text-[15px] leading-[22px] text-semi-white font-helveticaneue">{content}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Promoted Tweets",
      content: "Expand your reach beyond your followers with Promoted Tweets. Your content appears in users' timelines, boosting visibility and engagement."
    },
    {
      title: "Promoted Trends",
      content: "Position your brand at the forefront of conversations with Promoted Trends. Be the top trending topic and drive massive attention."
    },
    {
      title: "Promoted Accounts",
      content: "Build a following that matters. Our Promoted Accounts service targets users likely to engage with your content, growing your audience and solidifying your presence on the platform."
    },
    {
      title: "In Depth Competition Research",
      content: "We research your competition and your industry to learn what makes your business unique, and develop a strategy to reach your business goals."
    },
    {
      title: "Profile Optimization",
      content: "Your Twitter profile is the first impression you make on potential followers. That's why it's important to optimize it for maximum impact. We provide Twitter profile optimization services that ensure your profile is fully optimized and engaging to your target audience."
    },
    {
        title: "Twitter Cards",
        content: "Enhance your tweets with media-rich content like images, videos, or links, driving higher engagement rates and more clicks."
    },
    {
        title: "Lead Generation Cards",
        content: "Capture leads directly on Twitter without disrupting user experience. Our Lead Generation Cards simplify the process of collecting user information, making conversions seamless."
    },
  ];

  return (
    <div  className="min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto p-4">
      <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SCALABLE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={ref}
              className={` ${styles["main-scalable"]} transform transition-transform duration-700 ${monsterfont.className} ${
                isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
              
            >
            SERVICES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-16 text-white`}>
            OUR TWITTER
            </h2>
            <h2 className={` ${styles["description"]} ${monsterfont.className}  text-white`}>
            ADVERTISING SERVICES
            </h2>
          </div>
        </div>
        {services.map((service, index) => (
          <AccordionItem
            key={index}
            title={service.title}
            content={service.content}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesAccordion;
