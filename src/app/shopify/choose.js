import React from 'react';
import styles from './style.module.css';
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

const ShopifyFeatures = () => {
  const features = [
    {
      title: 'Secured',
      subtitle: 'website',
      description: 'Shopify uses SSL certificates in order to encrypt data that is stored and transmit it securely through connections to ensure compliance with PCI standards.'
    },
    {
      title: 'Quick',
      subtitle: 'loading',
      description: 'With the crucial responsibility of server maintenance, Shopify makes sure that your store and shopping cart are always up and accessible while focusing on quick page loading speeds.'
    },
    {
      title: 'Mobile',
      subtitle: 'responsive',
      description: 'Shopify themes work extremely well on smartphones making it easy to manage your store and provide a smooth shopping experiences across all mobile devices.'
    },
    {
      title: 'SEO',
      subtitle: 'features',
      description: 'Shopify provides sturdy SEO features to boost your brand\'s visibility and rankings on search engines as well as offers tools to monitor the progress of your business.'
    },
    {
      title: 'Cart',
      subtitle: 'recovery',
      description: 'To tackle the problem of abandoned carts, Shopify has developed a sophisticated recovery mechanism that prompts customers to complete their purchases. This function has resulted in businesses choosing Shopify and increasing their profit margin.'
    },
    {
      title: 'Free marketing',
      subtitle: 'tools',
      description: 'Shopify provides free marketing resources and tools such as social media integration, email marketing and SEO optimization that come in handy in promoting your store online and increasing its visibility, allowing your brand to reach broader audience.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
         <div className="max-w-[1200px] mx-auto  mb-16">
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} `}>
        Why should you
      </h1>
      <h1 className={`${styles["choose-text"]} ${monsterfont.className} mb-16`}>
        Choose Shopify?
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

export default ShopifyFeatures;