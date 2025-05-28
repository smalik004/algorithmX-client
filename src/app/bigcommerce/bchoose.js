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

const BigcommerceFeatures = () => {
  const features = [
    {
      title: 'Accessiblity',
      subtitle: '& Reliability',
      description: 'Achieve dependability with our BigCommerce web development services, ensuring a 99.99% uptime even during high sales volumes.'
    },
    {
      title: 'Speed',
      subtitle: 'Redefined',
      description: 'Our BigCommerce development will provide you with extremely fast page load times, resulting in remarkably fast browsing experience with speeds of less than 10ms.'
    },
    {
      title: 'Smart',
      subtitle: 'Cost-Efficiency',
      description: 'When it comes to the cost of cloud-based ecommerce solutions, it’s worth noting that they typically need 75% less investment than on-premises options while still delivering high-end performance within your budget.'
    },
    {
      title: 'Efficient',
      subtitle: 'Deployment',
      description: 'Utilizing a cloud-based deployment is faster than using on-premises solutions, cutting implementation time in half or even a quarter, accelerating project schedules leading to quicker e-commerce platform benefits.'
    },
    {
        title: 'High',
        subtitle: 'Security',
        description: 'BigCommerce ensures the security of your ecommerce store by conforming to PCI Compliance standards implementing HTTPS encryption and safeguarding against DDOS attacks, thus enhancing trust in your business operations.'
      },
    {
      title: 'Enhancing',
      subtitle: 'Experience',
      description: 'From faceted search to one-page checkout and instant shipping quotes, BigCommerce’s functions boost overall customer satisfaction and drive conversions by making the shopping experience more interesting.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
         <div className="max-w-[1200px] mx-auto  mb-16">
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} `}>
        Why should you
      </h1>
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} `}>
        Choose
      </h1>
      <h1 className={`text-[40px] md:text-[48px] md:leading-[68px] ${monsterfont.className} mb-16`}>
        BigCommerce?
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
                <h2 className={`${styles["choose-title"]}  font-helveticaneue text-start`}>
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
                <p className={`${styles["choose-description"]}  font-helveticaneue text-semi-white`}>
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
                <h2 className={`${styles["choose-title"]}  font-helveticaneue text-start`}>
                  {feature.title}
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="">
                    <LineSVG />
                  </div>
                  <p className={`${styles["choose-title"]}  font-helveticaneue `}>
                    {feature.subtitle}
                  </p>
                </div>
                <p className={`${styles["choose-description"]}  font-helveticaneue text-semi-white`}>
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

export default BigcommerceFeatures;