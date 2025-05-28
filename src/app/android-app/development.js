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
    title: "Android App Development Consultation",
    description: "Android applications cater to a unique user base with specific expectations. Our Android application development company assists businesses in aligning their concerns with the distinct preferences of Android users. Our experienced app developers and consultants guide you in choosing the optimal Android platform and strategy.",
    image: "/images/ai-img.svg", // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "Android UX/UI Design",
    description: "As an Android app development agency, AlgorithmX delivers exceptional Android UX/UI design services where we create visually stunning app interfaces that function seamlessly on a variety of devices. Our Android app developers and designers use their expertise to create memorable user experiences.",
    image: "/images/IoT-img.svg", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "Custom Android App Development",
    description: "At our custom Android app development company, we specialize in developing exclusive Android mobile applications that are personalized, user-centric, and scalable by utilizing the latest technologies. Our affordable app developers focus on productivity, flexibility, and customer satisfaction from conceptualization to deployment.",
    image: "/images/blockchain-img.svg", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "Android Software Testing",
    description: "Our process of Android application development focuses on reliability and performance first. To develop apps for Android and iOS, we perform manual and automated testing ranging from unit and integration testing to UI and performance testing. This ensures lag-free functioning and maintains app stability.",
    image:  "/images/cloud-img.svg",  // Replace with the actual path
    alt: "Testing Icon",
  },
  {
    title: "Multi-platform Deployment",
    description: "As an Android mobile app development company, we use tools and frameworks like Flutter and React Native to facilitate multi-platform deployment. Regardless of which platform you choose to use, our talented Android app developers offer efficient Android app development services to meet your desired goals.",
    image: "/images/AR.svg",  // Replace with the actual path
    alt: "Deployment Icon",
  },
  {
    title: "Support & Maintenance",
    description: "Our app development team offers continuous support to address any issues or implement updates, ensuring the smooth functioning of the Android app. With our reliable and prompt actions, your app remains relevant over time and provides exceptional user satisfaction.",
    image:"/images/metaverse.svg", // Replace with the actual path
    alt: "Support Icon",
  },
];

const ServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className={` ${styles["and-title"]} ${monsterfont1.className} text-center`}>
          Android App
        </h1>
        <h2 className={` ${styles["and-subtitle"]} v ${monsterfont.className} text-center mb-12`}>
          Development Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
          <div
          key={index}
          className={`bg-black ${styles["box"]} `}>
              <img 
                src={service.image} 
                alt={service.alt} 
                className={` object-contain rounded-lg  ${styles["indus-card-figure"]}  `}
              />
              <h3 className={` ${styles["and-title2"]} font-helveticaneue  transition-colors duration-300 `}>
                {service.title}
              </h3>
              <p className={` text-semi-white  ${styles["and-description"]} font-helveticaneue  transition-colors duration-300 `}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
