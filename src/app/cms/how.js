'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});
const monsterfont4 = Montserrat({
    subsets: ["latin"],
    weight: "400",
    fallback: ["sans-serif"],
  });

const CMSServices = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger animation when 50% of the component is in view
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

  const services = [
    {
      id: '01',
      title: 'Experienced Developers',
      description: 'Our team consists of expert CMS developers and adept professionals committed to fulfilling your unique requirements with skill and accuracy.',
      image: '/images/1.png',
    },
    {
      id: '02',
      title: 'Collaborative Approach',
      description: 'At our off shore CMS web development company, we embrace a cooperative and transparent approach when working with our clients, encouraging openness and involvement at every stage of the process.',
      image: '/images/2.png',
    },
    {
      id: '03',
      title: 'Decade long experience',
      description: 'AlgorithmX has been providing high-end solutions to various industries and sectors, addressing their unique requirements with relentless dedication and competence.',
      image: '/images/3.png',
    },
    {
      id: '04',
      title: 'Budget-friendly',
      description: 'Our top CMS website development company boasts of its premium and affordable CMS development services.',
      image: '/images/4.png',
    },
    {
      id: '05',
      title: 'We stick to Deadlines',
      description: 'We are known for successfully delivering projects on time and within the stipulated timelines to our clients.',
      image: '/images/5.png',
    },
    {
      id: '06',
      title: 'User Friendly',
      description: 'At our premier CMS development company, we specialize in creating highly user-friendly websites with sleek designs.',
      image: '/images/6.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
            <h1 className={`text-[18px] leading-[1.1]  ${monsterfont2.className} text-[#2775ff] text-center `}>HOW WE STAND OUT</h1>
          <h1 className={`text-white text-[38.4px] md:leading-[60px] md:tracking-[0.06em] md:text-[56px]  ${monsterfont1.className} mt-[20px]`}>
            PREFER ALGORITHMX & <span className={`${monsterfont4.className}`}><br/> BOOST EFFICIENCY</span>
          </h1>
          <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-[25px] mb-[32px]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
            key={service.id}
            className={`${styles["service-card1"]} relative group rounded-lg p-7 transition-all duration-700  ${styles["box-color"]} transform
              ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
              <div className={`absolute top-4 right-4 text-blue-500 ${styles["number"]} `} >
                {service.id}
              </div>

              <h3 className={`${styles["video-title"]} text-white  ${monsterfont3.className}  transition-colors duration-300`}>
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[50px] h-[50px] object-cover rounded-md"
                />
              </div>
              <p className={`text-semi-white font-helveticaneue ${styles["video-description"]}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CMSServices;
