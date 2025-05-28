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

const HubSpotFeatures = () => {
  const features = [
    {
      title: 'All-in-One',
      subtitle: 'Platform',
      description: 'Get access to all your website development, hosting, and maintenance needs in one place.'
    },
    {
      title: 'User-Friendly',
      subtitle: 'CMS',
      description: 'A user-friendly interface for creating and editing content without technical expertise.'
    },
    {
      title: 'Responsive',
      subtitle: 'Design',
      description: 'Websites automatically adapt to suit different devices for a seamless user experience.'
    },
    {
        title: 'SEO',
        subtitle: 'Optimization',
        description: 'Use built-in tools that optimize website content to improve visibility on search engines.'
      },
    {
      title: 'Analytics',
      subtitle: '& Reporting',
      description: 'Monitor website performance and visitor behavior to allow informed decisions based on data.'
    },
    {
      title: 'Integration',
      subtitle: 'Capabilities',
      description: 'Creating more streamlined workflows by integrating with other marketing tools.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
         <div className="max-w-[1200px] mx-auto  mb-16">
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} `}>
        Why should you
      </h1>
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} mb-16`}>
        Choose HubSpot?
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
                  <p className={`${styles["choose-title"]} font-helveticaneue transition-all duration-500 group-hover:-translate-x-14`}>
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

export default HubSpotFeatures;