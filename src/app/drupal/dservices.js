import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});

const DrupalServices = () => {
  const services = [
    {
      iconSrc: "images/shopify-development-services-icon1.png",
      title: "Website Development",
      description: "To meet the specific requirements of businesses, our Drupal development company utilizes Drupal CMS to build SEO-friendly and responsive websites with attractive designs.",
      borderColor: "border-red-500",
      glowColor: styles.shadowred,
    },
    {
      iconSrc: "images/shopify-development-services-icon1.png",
      title: "Theme Development",
      description: "AlgorithmX offers custom Drupal theme development where we create personalized themes that are not just aesthetic but also focus on adaptability, enhanced performance, and accessibility.",
      borderColor: "border-yellow-500",
      glowColor: styles.shadowyellow,
    },
    {
      iconSrc: "images/shopify-development-services-icon1.png",
        title: "E-Commerce Development",
        description: "Being a top Drupal web development company, we harness the capabilities of Drupal ecommerce development features such as shipping functionality, third-party integrations, and payment gateways to succeed in a competitive online marketplace.",
        borderColor: "border-white-500",
        glowColor: styles.shadowblue,
      },
    {
      iconSrc: "images/shopify-development-services-icon1.png",
      title: "Module Development",
      description: "Enhance the growth, security, and creativity in the digital space by using sustainable and personalized modules to amplify the features of Drupal websites as part of our custom Drupal website development services.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowgreen,
    },
    {
      iconSrc: "images/shopify-development-services-icon1.png",
      title: "Extension Development",
      description: "Our Drupal web development services include Drupal extension development that improves security, optimizes performance, and enhances efficiency ensuring growth.",
      borderColor: "border-green-500",
      glowColor: styles.shadowpink,
    },
    {
      iconSrc: "images/shopify-development-services-icon1.png",
        title: "API Integration",
        description: "AlgorithmX’s Drupal development services offer Drupal API integration to increase a website's functionality and usability, smoothly connecting apps, services or platforms.",
        borderColor: "border-pink-500",
        glowColor: styles.shadowlightgreen,
      },
      {
        iconSrc: "images/shopify-development-services-icon1.png",
        title: "Migration and Upgradation",
        description: "As a leading Drupal development agency in USA, we are experts at transferring your CMS from other platforms to Drupal or updating the older Drupal version to a newer one. Using our exceptional Drupal migration and upgrading services, it is extremely to achieve this.",
        borderColor: "border-orange-500",
        glowColor: styles.shadoworange,
      },
      {
        iconSrc: "images/shopify-development-services-icon1.png",
        title: "Support & Maintenance",
        description: "With our advanced Drupal development services, we provide consistent support and maintenance to boost your website performance and keep it up to date with the most recent security updates.",
        borderColor: "border-blue-500",
        glowColor: styles.shadowwhite,
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] tracking-[0.06em] text-white ${monsterfont2.className} mb-2`}>DRUPAL DEVELOPMENT</h1>
          <h2 className={`${styles["development-text"]} ${monsterfont.className} mb-2`}>SERVICES</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-4 ${styles["pad"]}
                         border ${service.borderColor} rounded-2xl bg-black
                         shadow-lg ${service.glowColor}
                         transition-all duration-300`}
            >
              <div className="flex-shrink-0">
                <img 
                  src={service.iconSrc}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className={`${styles["development-title"]} font-helveticaneue text-white mb-3`}>
                  {service.title}
                </h3>
                <p className={`${styles["development-description"]} font-helveticaneue  text-semi-white`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrupalServices;