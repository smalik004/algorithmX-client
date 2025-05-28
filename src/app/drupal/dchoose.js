import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});

const LineSVG = () => (
  <svg width="48" height="2" viewBox="0 0 48 2" className="transition-opacity duration-300">
    <line 
      x1="0" 
      y1="1" 
      x2="48" 
      y2="1" 
      stroke="#EF4444" 
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const DrupalFeatures = () => {
  const features = [
    {
      title: 'Scalability',
      subtitle: '& Reliability',
      description: 'Drupal effortlessly manages the amount of content and growing traffic volume on your website to ensure its seamless functioning.'
    },
    {
      title: 'Flexibility',
      subtitle: '& Accessibility',
      description: 'Drupal naturally adjusts and tailors to a variety of project requirements making it extremely flexible for changing needs.'
    },
    {
      title: 'Theme',
      subtitle: 'Cost-Efficiency',
      description: 'Drupal enables personalized solutions like custom themes to cater to unique website expectations.'
    },
    {
      title: 'High',
      subtitle: 'Security',
      description: 'Utilizing a cloud-based deployment is faster than using on-premises solutions, cutting implementation time in half or even a quarter, accelerating project schedules leading to quicker e-commerce platform benefits.'
    },
    {
        title: 'Community',
        subtitle: 'Support',
        description: 'Drupal boasts of a strong support network and a wealth of resources which are crucial for providing consistent support to your website.'
      },
    {
      title: 'Integration',
      subtitle: 'Capablities',
      description: 'Drupal offers seamless integration and compatibility with other services and third-party systems.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
         <div className="max-w-[1200px] mx-auto  mb-16">
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} `}>
        Why should you
      </h1>
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} mb-16`}>
        Choose Drupal?
      </h1>
      
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3">
          {/* Vertical Borders */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gray-700"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gray-700"></div>
          
          {/* Horizontal Border */}
          <div className="absolute top-1/2 w-full h-px bg-gray-700"></div>
          
          {/* Content */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 relative"
            >
              <div className="flex flex-col space-y-0">
                <h2 className={`${styles["choose-title"]} font-helveticaneue text-start`}>
                  {feature.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x">
                    <LineSVG />
                  </div>
                  <p className={`${styles["choose-title"]}  font-helveticaneue transition-all duration-500 group-hover:-translate-x-14`}>
                    {feature.subtitle}
                  </p>
                </div>
                <p className={`${styles["choose-description"]} font-helveticaneue text-semi-white`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-1 divide-y divide-gray-700">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group py-8 relative"
            >
              <div className="flex flex-col space-y-4">
                <h2 className={`${styles["choose-title"]} font-helveticaneue text-start`}>
                  {feature.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="">
                    <LineSVG />
                  </div>
                  <p className={`${styles["choose-title"]} font-helveticaneue `}>
                    {feature.subtitle}
                  </p>
                </div>
                <p className={`${styles["choose-description"]} font-helveticaneue text-semi-white`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default DrupalFeatures;