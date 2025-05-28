'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../front-end/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});

const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ["sans-serif"],
});

const services = [
  {
    title: 'Virtual World Development',
    description:
      'We create engaging, immersive digital experiences within virtual worlds, working across a range of industries including Gaming, Education, and Healthcare.',
    image: 'images/User.png',
    alt: 'Consultation Icon',
  },
  {
    title: 'NFT Integration',
    description:
      'Our NFT solutions help create, manage, and trade unique digital assets within virtual worlds, providing new ways for users to interact with your brand.',
    image: 'images/UX.png',
    alt: 'Design Icon',
  },
  {
    title: 'Blockchain-Based Identity Solutions',
    description:
      'Our Blockchain-based identity solutions offer a secure, decentralized way to verify and manage user identities within metaverse applications.',
    image: 'images/Front.png',
    alt: 'Custom Development Icon',
  },
  {
    title: 'Social VR',
    description:
      'Our customized social VR solutions allow your users to interact naturally and are ideal for hosting virtual events and building engaging customer experiences.',
    image: 'images/Responsive.png',
    alt: 'Testing Icon',
  },
  {
    title: 'Metaverse Integration Solutions',
    description:
      'As a leading Metaverse development company, we build Blockchain-powered monetary solutions that enable secure trading, ownership, and storage of various cryptocurrencies. Our offerings include secure Blockchain node-monitoring dashboards to track real-time status updates for all cryptocurrency transactions.',
    image: 'images/HTML.png',
    alt: 'Deployment Icon',
  },
  {
    title: 'Metaverse App Development',
    description:
      'As a provider of Metaverse development services, our offerings encompass integration solutions designed to enhance the capabilities and user experience of your Metaverse. We specialize in providing consultancy for system integration and offer integration services for APIs, data management, ecosystem tools, and service-oriented architecture, all aimed at elevating your virtual world.',
    image: 'images/Performance.png',
    alt: 'Support Icon',
  },
];

const MetaverseServicesGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const allInOneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (allInOneRef.current) {
      observer.observe(allInOneRef.current);
    }

    return () => {
      if (allInOneRef.current) {
        observer.unobserve(allInOneRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "ALL-IN-ONE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={allInOneRef}
              className={`mb-8 ${styles["main-allinone"]} transform transition-transform duration-700 ${monsterfont.className} ${
                isInView ? `${styles['scale-110']} ${styles['opacity-100']}` : `${styles['scale-75']} ${styles['opacity-0']}`
              }`}
            >
              SERVICES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2 className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}>
            METAVERSE
            </h2>
            <h3 className={` ${styles["multi-subtitle"]} ${monsterfont.className} text-white`}>
              DEVELOPMENT SERVICES
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles["card"]} hover:bg-[#1c1c1e]  hover:border-[#1c1c1e;] border border-zinc-800 group transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={service.image}
                alt={service.alt}
                className={`${styles["image1"]} object-contain `}
              />
              <h3 className={`${styles["card-title"]} font-helveticaneue mb-4 transition-colors duration-300 `}>
                {service.title}
              </h3>
              <p className={`${styles["card-description"]} font-helveticaneue transition-colors duration-300 `}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaverseServicesGrid;
