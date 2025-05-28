import React from 'react';
import styles from './style.module.css';
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


const ShopifyServices = () => {
  const services = [
    {
      iconSrc: "images/Store-Setup.png",
      title: "Shopify Store Setup",
      description: "The team at our custom Shopify development company is well experienced in characteristics of Shopify. They understand the specific needs of your business and create an online Shopify store that aligns perfectly with your brand’s objectives.",
      borderColor: "border-red-500",
      glowColor: styles.shadowred,
    },
    {
      iconSrc: "images/Apps-Integration.png",
      title: "Shopify Apps Integration & Configuration",
      description: "AlgorithmX’s off shore Shopify web development services cover everything, from setting up payment gateways to implementing custom features, integrating third-party apps or connecting APIs.",
      borderColor: "border-yellow-500",
      glowColor: styles.shadowyellow,
    },
    {
      iconSrc: "images/Store-Design.png",
      title: "Shopify Store Design and Development",
      description: "We provide extraordinary Shopify development services for businesses by partnering with your company behind the scenes, configuring your store, and getting it market-ready without any hitches.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowblue,
    },
    {
      iconSrc: "images/Payment-and-shipping.png",
      title: "Payment & Shipping Zones Set-Up",
      description: "Our premier Shopify development company assists in reducing logistics expenses and ensuring efficient order fulfillment with our shipping zones set-up service. Also, our payment system is designed to make transactions smooth and easy for customers.",
      borderColor: "border-green-500",
      glowColor: styles.shadowgreen,
    },
    {
        iconSrc: "images/Theme-Development.png",
        title: "Theme Development",
        description: "Our team of UI/UX designers and certified Shopify developers work together to offer top-notch Shopify development services with a goal of creating user-friendly, dynamic, and responsive Shopify themes tailored for your store.",
        borderColor: "border-pink-500",
        glowColor: styles.shadowpink,
      },
      {
        iconSrc: "images/Product-and-inventory.png",
        title: "Product & Inventory Set-Up",
        description: "At our custom Shopify development agency, AlgorithmX, we provide product and inventory set-up service that grants you the ability to easily showcase your desired items in your store, seamlessly control your inventory, and effortlessly tweak and make your stock levels.",
        borderColor: "border-orange-500",
        glowColor: styles.shadowlightgreen,
      },
      {
        iconSrc: "images/Shopify-SEO.png",
        title: "Shopify SEO Implementation",
        description: "With our amazing Shopify SEO service, capture your audience’s attention and stand out from competitors while attracting a steady flow of customers.",
        borderColor: "border-white-500",
        glowColor: styles.shadoworange,
      },
      {
        iconSrc: "images/Shopify-Migrations.png",
        title: "Shopify Migrations",
        description: "The expert professionals at our leading Shopify development company in USA ensure that your store migrates smoothly from old systems to Shopify without downtime (minimum) disruptions.",
        borderColor: "border-blue-500",
        glowColor: styles.shadowwhite,
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={` text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] tracking-[0.06em] ${monsterfont2.className} mb-2 text-white`}>SHOPIFY DEVELOPMENT</h1>
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
                <h3 className={`${styles["development-title"]} font-helveticaneue  mb-[18px] text-white`}>
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

export default ShopifyServices;