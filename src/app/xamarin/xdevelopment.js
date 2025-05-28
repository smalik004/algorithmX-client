import React from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

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
    title: "Xamarin App  Consultation",
    description: "At our Xamarin application development company, we offer a comprehensive consultation service where we assess your business needs, highlight key requirements, and provide personalized guidance on building an effective and scalable Xamarin app.",
    image:  "/images/ai-img.svg",  // Replace with the actual path
    alt: "Consultation Icon",
  },
  {
    title: "Custom App Development",
    description: "Our experienced Xamarin developers are committed to developing affordable Xamarin applications that support your business’ success in the realm of mobile apps by offering integration with current systems, improved user experiences, and advanced features.",
    image: "/images/IoT-img.svg", // Replace with the actual path
    alt: "Design Icon",
  },
  {
    title: "App Migration",
    description: "At AlgorithmX, we specialize in providing seamless and low-cost end-to-end migration to Xamarin. We guarantee a high-performance, compatible, and data-integrated transition from your app’s current platform, delivering a well-functioning and low-maintenance app.",
    image: "/images/blockchain-img.svg", // Replace with the actual path
    alt: "Custom Development Icon",
  },
  {
    title: "Xamarin Team Augmentation",
    description: "With our skilled Xamarin developers by your side, you can accelerate your project timelines as they provide you with complete and flexible support by integrating with your existing team or sharing the required knowledge. You gain access to top-tier talent in Xamarin app development offering high standards of work.",
    image: "/images/cloud-img.svg",  // Replace with the actual path
    alt: "Testing Icon",
  },
  {
    title: "Multi-Platform App Development",
    description: "We pride ourselves on our Xamarin app development services as we ensure your apps deliver the best performance possible by providing constant technical support and maintaining the software at all times according to industry trends and standards. You can depend on us for your app’s smooth and reliable functioning.",
    image: "/images/AR.svg", // Replace with the actual path
    alt: "Deployment Icon",
  },
  {
    title: "Support & Maintenance",
    description: "We're committed to ensuring the robust performance of your Xamarin apps. Our reliable support and maintenance services guarantee comprehensive updates that adhere to industry standards. Count on us to keep your apps running smoothly and up-to-date, providing uninterrupted service to your users.",
    image: "/images/metaverse.svg", // Replace with the actual path
    alt: "Support Icon",
  },
];

const XamarinServicesGrid = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className={`${styles['and-title']} ${monsterfont1.className} text-center`}>
          Xamarin App
        </h1>
        <h2 className={`${styles['and-subtitle']} ${monsterfont.className} text-center mb-12`}>
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
              <h3 className={`${styles['and-title2']} transition-colors duration-300`}>
                {service.title}
              </h3>
              <p className={`${styles['and-description']} text-semi-white transition-colors duration-300`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XamarinServicesGrid;
