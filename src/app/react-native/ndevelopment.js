import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./style.module.css";

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"400",
  fallback: ["sans-serif"],
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"300",
  fallback: ["sans-serif"],
})

const services = [
  {
    title: "React Native App Ideation & Consulting",
    description: "Even though React Native app development has its benefits for SMEs and Enterprises, it might not fit every development scenario. We are reliable developers for custom React Native app development as we closely discuss your product idea to understand and provide solutions that best suit your business goals.",
    image: "/images/ai-img.svg", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "App Development with React Native",
    description: "Our expertise lies in providing a custom React Native development service to fulfill all your development needs from start to finish. As a leading React Native app development company, we manage every aspect, including design, coding, testing, and launch to ensure a seamless process of bringing your app idea to life.",
    image: "/images/IoT-img.svg", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "React Native Migration",
    description: "AlgorithmX offers off-shore React Native application development solutions with migration specialists who are experts in the seamless transition of an existing iOS or Android app to a cross-platform application. Our deployment experts who are experienced in leading projects, ensure a smooth user experience during your application’s expansion into mobile platforms, including web and smart devices.",
    image: "/images/blockchain-img.svg", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "Support & Maintenance",
    description: "Our team of dedicated React Native app developers recognizes the significance of continuous upgrades and gives full support and maintenance after the product is deployed. It involves resolving errors and bugs, improving performance, and making technological updates among others.",
    image: "/images/cloud-img.svg", // Replace with the actual path
    alt: "Testing Icon",
  },
];

const NativeServicesGrid = () => {
    return (
      <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className={` ${styles["and-title"]} ${monsterfont1.className} text-center `}>
            React-Native App
          </h1>
          <h2 className={`${styles["and-subtitle"]} ${monsterfont.className} text-center mb-12`}>
            Development Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index}
                className={`bg-black ${styles["box"]} `}
              >
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className={` object-contain rounded-lg  ${styles["indus-card-figure"]}  `}
                />
                <h3 className={`${styles["and-title2"]}  transition-colors duration-300 `}>
                  {service.title}
                </h3>
                <p className={`text-semi-white ${styles["and-description"]} transition-colors duration-300`}>
                  {service.description}
                </p>
              </div>
            ))}
  
            {/* Full-width box for the 4th item */}
            <div 
  className={`bg-black ${styles["box"]} col-span-1 md:col-span-2 lg:col-span-3 md:text-center`}>

<img 
  src={services[3].image} 
  alt={services[3].alt} 
  className={`object-contain rounded-lg mx-auto ${styles["indus-card-figure"]}`}
/>

              <h3 className={`${styles["and-title2"]}  transition-colors duration-300 `}>
                {services[3].title}
              </h3>
              <p className={`text-semi-white ${styles["and-description"]} transition-colors duration-300`}>
                {services[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NativeServicesGrid;
  