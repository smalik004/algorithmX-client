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
    title: 'Cloud Transformation​​​​',
    description:
      'Experience seamless cloud transformation with our cloud consulting services, enabling your business to optimize operations, enhance scalability, and accelerate innovation.',
    image: 'images/cloud-.gif',
    alt: 'Consultation Icon',
  },
  {
    title: 'Data Security',
    description:
      'Ensure rock-solid data protection with our cutting-edge data security services, safeguarding your valuable information from cyber threats and ensuring compliance with industry regulations.',
    image: 'images/UX.png',
    alt: 'Design Icon',
  },
  {
    title: 'Cloud Architecture Design',
    description:
      'Streamline and accelerate your cloud infrastructure with our expert cloud architecture design and deployment services, ensuring flawless integration and optimal performance for your business.',
    image: 'images/Front.png',
    alt: 'Custom Development Icon',
  },
  {
    title: 'Cloud Migration',
    description:
      'Effortlessly transition your business to the cloud and experience the power of scalability, unparalleled flexibility, and optimized cost-efficiency with our transformative cloud migration services.',
    image: 'images/Responsive.png',
    alt: 'Testing Icon',
  },
  {
    title: 'Cloud Capacity Planning and TCO Calculation',
    description:
      'Optimize your cloud resources precisely through our expert capacity planning while gaining clarity on total cost of ownership (TCO) for informed budgeting and resource management decisions.',
    image: 'images/HTML.png',
    alt: 'Deployment Icon',
  },
  {
    title: 'Managed Cloud Services',
    description:
      "We're your trusted cloud partner, providing end-to-end solutions from IT infrastructure optimization to disaster recovery, application management, and unified analytics platform integration.",
    image: 'images/Performance.png',
    alt: 'Support Icon',
  },
];

const CloudGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const allInOneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
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
              SOLUTIONS
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2 className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}>
            Reduce Downtimes &
            </h2>
            <h3 className={` ${styles["multi-subtitle"]} ${monsterfont.className} text-white`}>
            Streamline Workflows
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

export default CloudGrid;
