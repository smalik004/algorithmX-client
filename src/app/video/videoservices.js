'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});

const VideoServices = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger animation when 50% of the component is in view
    );

    if (scalableRef.current) {
      observer.observe(scalableRef.current);
    }

    return () => {
      if (scalableRef.current) {
        observer.unobserve(scalableRef.current);
      }
    };
  }, [isInView]);

  const services = [
    {
      id: '01',
      title: 'Corporate Films',
      description: 'AlgorithmX is considered reliable in offering exceptional corporate film production services among brands. We offer personalized corporate video production services to meet our client\'s specific requirements.',
      image: '/images/Corporate.png',
    },
    {
      id: '02',
      title: 'TVC/Digital Ad Films',
      description: 'Our digital video solutions and commercial video production services are a class apart as we hold a competitive advantage due to our connections in the mainstream film industry which enables us to produce high-quality TVCs at affordable prices.',
      image: '/images/TVC.png',
    },
    {
      id: '03',
      title: 'Music Video/Web Series',
      description: 'AlgorithmX goes beyond being a creative agency, working as a full-service video production house whose portfolio goes beyond conventional limits, covering music video and web series production services.',
      image: '/images/Music-.png',
    },
    {
      id: '04',
      title: 'Infographic Animation',
      description: 'In our professional video production services, we merge quality videos with animations to make informative content more interesting, helping the audience grasp data better.',
      image: '/images/Infographic.png',
    },
    {
      id: '05',
      title: 'Product Video',
      description: 'Our product video services demonstrate a product\'s functionality, while demo videos show how it addresses issues. They usually tell tales that customers resonate with, making it easier for customers to understand and connect with the product.',
      image: '/images/Product.png',
    },
    {
      id: '06',
      title: 'Testimonial Video',
      description: 'Being the best video production company, we create client testimonial videos featuring customers\' thoughts about your brand, establishing trust and pointing out best features of the product to your audiences. Our team prepares customized video scripts to meet your brand\'s needs.',
      image: '/images/Testimonial.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1 className={`text-white ${styles["video"]} ${monsterfont1.className} mb-4`}>
            OUR VIDEO SERVICES
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className={`text-semi-white ${styles["video-subtitle"]} ${monsterfont2.className} max-w-4xl mx-auto`}>
            Professional video production services that engage audiences and elevate your brand&apos;s narrative effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
            key={service.id}
            className={`${styles["service-card1"]} relative group rounded-lg p-7 transition-all duration-700  ${styles["box-color"]} transform
              ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
              <div className={`absolute top-4 right-4 text-blue-500 ${styles["number"]} `} >
                {service.id}
              </div>

              <h3 className={`${styles["video-title"]} text-white  ${monsterfont3.className}  transition-colors duration-300`}>
                {service.title}
              </h3>
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p className={`text-semi-white font-helveticaneue ${styles["video-description"]}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoServices;
