'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from "../video/styles.module.css";
import style from '../graphics/styles.module.css'
import { Montserrat } from "next/font/google";


const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const FranchiseServices = () => {
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
      title: 'SEO',
      description: 'A customized SEO strategy allows you to gain visibility for the keywords necessary for your brand’s success. Regardless of whether you are aiming for locally specific, branded or non-branded products, our franchise SEO marketing services enhance your web pages to draw in the highest possible number of visitors. Our franchise marketing agency focuses on targeting relevant service keywords for both your local and international companies, answering questions about your services/products, and directing pertinent traffic to your website with our local franchise marketing.',
      image: '/images/SEO-.png',
    },
    {
      id: '02',
      title: 'SOCIAL MEDIA',
      description: 'Social media goes beyond just sharing random posts on platforms. AlgorithmX’s franchise social media marketing service involves formulating a strategic approach focused on establishing a solid online presence that resonates with both franchise owners and customers. We create compelling content that plays an important role in shaping a brand image. Whether its utilizing celebrity endorsements or sharing customer stories, our franchise marketing agency is committed to maintaining consistency across all outlets at different locations this way, ensuring that your social media remains dynamic and cohesive, giving customers a sense of what to anticipate.',
      image: '/images/SOCIAL-MEDIA-.png',
    },
    {
      id: '03',
      title: 'PAID SEARCH',
      description: 'Being the best franchise digital marketing agency, our paid marketing strategies have two major goals: establishing your brand and acquiring new customers. Regardless of location, our paid ads constantly enhance brand recognition, drive searches and attract customers at the top of the sales funnel. This helps national brands locate their franchisees and recruit employees while assisting local franchises in drawing quality leads and fresh customers.',
      image: '/images/PAID-SEARCH.png',
    },
    {
      id: '04',
      title: 'EMAIL MARKETING',
      description: 'AlgorithmX’s franchise digital marketing toolkit contains several tools, but email marketing is the best one, ranking high among our other methods for building relationships with potential customers and franchisees. From nurturing leads to brand awareness, retaining franchisees and sharing promotions, our top franchise marketing services in USA provide customized campaigns to increase click-through and open rates to drive success.',
      image: '/images/EMAIL-MARKETING.png',
    },
    {
      id: '05',
      title: 'CRO',
      description: 'Advertisements become ineffective if potential customers do not convert. We use our franchise CRO service to consistently experiment with new strategies that can improve websites or landing pages for more conversions. We assess your customer journey 1-5 times a month to figure out areas of improvement while adhering to CRO practices. Through the enhancement of your pages and website, we convert your website traffic more efficiently, ultimately increasing your ROI.',
      image: '/images/CRO.png',
    },
    {
      id: '06',
      title: 'CREATIVE SERVICES',
      description: 'Trust in our adeptly creative online franchise marketing team to design stunning graphics that truly embody your brand. By incorporating captivating visuals and compelling writing, we craft each blog, social media post, and email to attract new customers. Our expert and cohesive content ensures that your brand message remains consistent across all franchise chains, instilling confidence in your audience about the superior experience they can expect at any of your locations.',
      image: '/images/CREATIVE-SERVICES.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto" ref={scalableRef}>
      <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SCALABLE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={scalableRef}
              className={`mb-8 md:text-[100px] text-[40px] transform transition-transform duration-700 ${monsterfont3.className} text-[#151515] ${
                isInView ? `${style["scale-110"]} ${style["opacity-100"]}` : `${style["scale-75"]} ${style["opacity-0"]}`
              }`}
              
            >
              SCALABLE
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={` ${style["description"]} ${monsterfont1.className} mt-14 text-white`}>
              FRANCHISE MARKETING
            </h2>
            <h2 className={`${style["description"]} ${monsterfont3.className} text-white -mt-2`}>
              SERVICES
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div
            key={service.id}
            className={`${styles["service-card1"]} h-fit relative group rounded-lg p-7 transition-all duration-700  ${styles["box-color"]} transform
              ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0' }
            `}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
              <div className={`absolute top-4 right-4 text-blue-500 font-helveticaneue ${styles["number"]} `} >
                {service.id}
              </div>

              <h3 className={`${styles["video-title"]} text-white font-helveticaneue font-[500]  transition-colors duration-300`}>
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

export default FranchiseServices;
