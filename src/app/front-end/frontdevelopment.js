'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
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
    title: 'User Interface (UI) Design',
    description:
      'We are a top front end web development company focused on designing the visual layout and aesthetics of a website or app in order to create a user-friendly and visually pleasing user interface.',
    image: 'images/User.png',
    alt: 'Consultation Icon',
  },
  {
    title: 'UX Testing and Optimization',
    description:
      'AlgorithmX’s UX services include creating unique digital experiences that involve grasping user requirements, crafting instinctive interfaces, and testing usability to enhance engagement and boost brand reputation.',
    image: 'images/UX.png',
    alt: 'Design Icon',
  },
  {
    title: 'Front-End Frameworks',
    description:
      'In our front end web development services, we use front end frameworks, such as Angular, React.js, or Vue.js, to simplify development, improve code organization and streamline building complex and advanced user interfaces with ease.',
    image: 'images/Front.png',
    alt: 'Custom Development Icon',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Our progressive web app development includes designing websites that adjust and operate seamlessly on various devices and all screen sizes to maintain a uniform user experience.',
    image: 'images/Responsive.png',
    alt: 'Testing Icon',
  },
  {
    title: 'HTML/CSS/JS Development',
    description:
      'We pride ourselves on our Xamarin app development services as we ensure your apps deliver the best performance possible by providing constant technical support and maintaining the software at all times according to industry trends and standards.',
    image: 'images/HTML.png',
    alt: 'Deployment Icon',
  },
  {
    title: 'Performance Optimization',
    description:
      'AlgorithmX’s front end development involves excellent optimization of assets and front end codes to enhance the website’s efficiency and speed by reducing file sizes, employing lazy load functionality for resources and leveraging caching methods.',
    image: 'images/Performance.png',
    alt: 'Support Icon',
  },
];

const FrontServicesGrid = () => {
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
              ALL-IN-ONE
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2 className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}>
              FRONT END
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

export default FrontServicesGrid;
