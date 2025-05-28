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
      title: 'dApps Development',
      description:
        'We specialize in the development of scalable and secure Decentralized Applications (dApps) that operate seamlessly on various blockchain networks. Our solutions prioritize transparency, automation through smart contracts, and user-centric designs to help businesses harness the full potential of Web3 technology.',
      image: 'images/User.png',
      alt: 'Consultation Icon',
    },
    {
      title: 'Smart Contract Development',
      description:
        'Our comprehensive Smart Contract development services cover everything from initial architecture and secure coding to testing, auditing, and continuous optimization. We ensure your blockchain-based agreements are tamper-proof, efficient, and tailored to support complex business logic and automation.',
      image: 'images/UX.png',
      alt: 'Design Icon',
    },
    {
      title: 'Decentralized Exchange & Liquidity Pool',
      description:
        'We provide full-cycle development of Decentralized Exchanges (DEXs) and liquidity pool platforms, enabling secure, permissionless, and trustless peer-to-peer trading. Our solutions empower users with automated market making, yield farming, and seamless integration across multiple blockchain ecosystems.',
      image: 'images/Front.png',
      alt: 'Custom Development Icon',
    },
  ];
  

const Web3ServicesGrid = () => {
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
              WEB3
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

export default Web3ServicesGrid;
