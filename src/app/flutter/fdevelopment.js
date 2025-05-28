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
    title: "Flutter App Ideation & Consulting",
    description: "Our Flutter app development company assists you in validating your project idea and implementing an optimal technical solution that conforms with the concept behind your product, keeping your Flutter app development cost low. Through extensive research and analysis, we assess the viability and opportunities of your idea amidst the market competition. Trust us to make sure your Flutter project succeeds.",
    image: "/images/ai-img.svg", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "Flutter App Development",
    description: "Our Flutter mobile app development services help businesses create a strong multi-platform presence. Our expert Flutter app developers are committed to assisting you at every step, from identifying the right product-market fit to smoothly launching your Flutter app on different platforms. We excel in supporting you with the development, testing, and release of Flutter apps.",
    image: "/images/IoT-img.svg", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "Flutter App Migration",
    description: "At AlgorithmX, we have expertise in transferring your Android and iOS apps to Flutter. With our expert Flutter Android app development team, we are skilled at moving your current apps across different platforms and operating systems. As a premier Flutter app development company in USA, we guarantee the development of applications that cater to your requirements.",
    image: "/images/blockchain-img.svg", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  
];

const FlutterServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className={` ${styles["and-title"]} ${monsterfont1.className} text-center `}>
          Flutter App
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

export default FlutterServicesGrid;
