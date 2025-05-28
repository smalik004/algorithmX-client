'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
import { Plus, Minus } from 'lucide-react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
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
      title: "Sponsored Products",
      content: "Promote your products directly in search results and on product detail pages. Sponsored Product ads give your listings prime placement, ensuring your products are seen by customers ready to buy."
    },
    {
      title: "Sponsored Brands",
      content: "Sponsored brand ads feature your brand logo, a custom headline, and multiple products—appearing right at the top of search results. Drive traffic to your brand store or product listings and elevate your brand's presence."
    },
    {
      title: "Sponsored Display",
      content: "Stay visible and relevant with Sponsored Display ads. These ads target shoppers based on their interests and behaviors, appearing on Amazon and across other websites. Engage potential buyers and bring them back to your listings for increased conversions."
    },
    {
      title: "Custom A dvertising Solutions",
      content: "Have unique needs? As your Amazon Ads Agency, we tailor your Amazon ads to your unique goals. Whether you're launching a new product or running a targeted campaign, we create custom strategies that drive impactful results."
    },
    {
      title: "Amazon Attribution for Video",
      content: "Amazon Attribution for Video gives you insights into how video content drives traffic and influences purchase behavior. We use this data to fine-tune your video ads and maximize their effectiveness."
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
            SERVICES
            </h2>
            <h2 className={` ${styles["description"]} ${monsterfont.className}  text-white`}>
            FOR EVERYONE
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
