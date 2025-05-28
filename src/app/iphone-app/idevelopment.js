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
    title: "App Development Consultation",
    description: "Our team of skilled iOS app developers is here to assist businesses in evaluating if iOS really fits their specific requirements, guide them on the best technical stack suitable for iOS app development, and recommend certain businesses based on their unique aspects to go for iOS apps.",
    image: "/images/ai-img.svg", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "iOS UX/UI Design",
    description: "iOS mobile applications are known for their engaging and memorable designs that are tailored to match user expectations in the Apple ecosystem. As a committed iOS app development company, we focus on designing long-lasting and impactful user experiences that are unique to your brand.",
    image: "/images/IoT-img.svg", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "Custom iOS App Development",
    description: "Our iOS app developers specialize in creating personalized, futuristic, and user-friendly iOS applications that are scalable, and cater to entrepreneurs and businesses across various industries.",
    image: "/images/blockchain-img.svg", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "iOS Software Testing",
    description: "As a dedicated iOS app development company, we put security, reliability, and performance first in our iOS app development process, creating glitch-free and hack-proof applications by combining manual and AI-driven automated testing mechanisms.",
    image: "/images/cloud-img.svg", // Replace with the actual path
    alt: "Testing Icon",
  },
  {
    title: "Multi-platform Deployment",
    description: "At AlgorithmX, we design custom mobile iOS apps that can be used on any Apple device, ensuring your product or service touches all platforms your customers are active at, and your brand reaches its potential clients.",
    image: "/images/AR.svg", // Replace with the actual path
    alt: "Deployment Icon",
  },
  {
    title: "Support & Maintenance",
    description: "Our iOS mobile app development team is available 24*7 to promptly address issues and ensure smooth functioning of your business. We focus on keeping the iOS application stable and reliable at all times providing ultimate customer satisfaction.",
    image: "/images/metaverse.svg", // Replace with the actual path
    alt: "Support Icon",
  },
];

const IosServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className={` ${styles["and-title"]} ${monsterfont1.className} text-center `}>
          iOS App
        </h1>
        <h2 className={`${styles["and-subtitle"]} ${monsterfont.className} text-center mb-12`}>
          Development Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default IosServicesGrid;
