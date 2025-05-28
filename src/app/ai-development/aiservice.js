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
    title: 'AI Strategy & Consulting',
    description:
      'Unlock the transformative potential of AI with our expert consulting services. At Copper Digital, we guide you through the AI landscape, helping you integrate cutting-edge AI models into your business to streamline workflow, automate processes, and enhance productivity. Partner with the leaders in AI consulting to drive long-term growth and operational efficiency.',
    image: 'images/User.png',
    alt: 'Consultation Icon',
  },
  {
    title: 'Generative AI Development',
    description:
      'Leverage the power of Generative AI to elevate customer experiences, create dynamic content, and analyze vast datasets. As a pioneer in generative AI, we help you use advanced models to generate meaningful insights that drive smarter decisions and foster innovation. Maximize business value through the intelligent application of generative AI solutions.',
    image: 'images/UX.png',
    alt: 'Design Icon',
  },
  {
    title: 'AI-Powered Prompt Engineering',
    description:
      'Supercharge your AI models with our expert Prompt Engineering services. Our team of skilled developers ensure your AI models are primed for success, crafting prompts that deliver optimized and precise outcomes to meet your business objectives. Maximize AI potential and unlock high-value insights and results.',
    image: 'images/Front.png',
    alt: 'Custom Development Icon',
  },
  {
    title: 'Adaptive AI Solutions',
    description:
      'Stay ahead of change with Adaptive AI—models that evolve and optimize themselves in response to new data and shifting business environments. By harnessing deep learning, NLP, and computer vision, our adaptive AI solutions enable your business to adapt and thrive, unlocking new opportunities for growth in a rapidly changing world.',
    image: 'images/Responsive.png',
    alt: 'Testing Icon',
  },
  {
    title: 'Machine Learning',
    description:
      'Accelerate your business with Machine Learning (ML) solutions designed to extract valuable insights from complex data. We build scalable ML models that continuously improve over time, enabling predictive analytics, automation, and decision-making capabilities to give your business a competitive edge. Leverage the power of data with ML-driven innovation.',
    image: 'images/HTML.png',
    alt: 'Deployment Icon',
  },
  {
    title: 'Conversational AI Development',
    description:
      'Transform customer engagement with AI-powered chatbots built to think, understand, and respond like humans. From speech recognition to text generation, image production, and multilingual support, our ChatGPT development services create dynamic, intelligent solutions to meet your unique business needs, enhancing customer interactions and operational efficiency.',
    image: 'images/Performance.png',
    alt: 'Support Icon',
  },
];

const AIServicesGrid = () => {
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
              AI
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

export default AIServicesGrid;
