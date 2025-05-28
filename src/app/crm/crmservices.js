'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faClipboard, faCogs, faChartBar, faLaptop, faRocket, faMobileAlt, faWrench, faTasks, faLifeRing, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});

const crmServices = [
  {
    id: 1,
    title: 'CRM CONSULTING',
    icon: <FontAwesomeIcon icon={faTrophy} style={{ width: '14.4px', height: '12.8px' }} />,
    content: `Our expert CRM developers and consultants assist you every step of the way 
              during the CRM implementation process. Our team works closely with you from 
              choosing the right platform to developing systems and optimizing performance. 
              In order to develop a tailored approach, our professionals examine your 
              business's processes, environment, and obstacles as part of our CRM system 
              development services.`
  },
  {
    id: 2,
    title: 'CRM MIGRATION',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'As a leading CRM software development company, we handle all stages of the CRM migration process, including risk assessment, testing, and customizing data import methodologies. Using our CRM development services, we upgrade your customer experience and replace high-maintenance software, improving overall business performance.'
  },
  {
    id: 3,
    title: 'CRM DESIGN',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We are aware of the significance of developing a system that is user-friendly, engaging and helps drive business goals. AlgorithmX’s system design CRM development services are dedicated to assisting businesses develop a visually appealing CRM system that improves user satisfaction and enhances productivity.'
  },
  {
    id: 4,
    title: 'CRM INTEGRATION',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'At our premier CRM development company, we boost your business with our CRM integration services, which allow seamless communication between other business tools and your CRM software fully utilizing their functionalities. Our dedicated CRM developers ensure safe integration of internal and external systems with your CRM system to facilitate smooth information flow. Moreover, we also offer automatic data updates to merge your data sources into one solution.'
  },
  {
    id: 5,
    title: 'CRM SOFTWARE DEVELOPMENT',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'AlgorithmX’s CRM software development services provide personalized and accurate solutions to meet our diverse business needs, creating custom CRM software using powerful analytical tools enabling you to study customer data and uncover valuable information. We make businesses prosper by furnishing resources for intelligent decision-making and enhanced progress.'
  },
  {
    id: 6,
    title: 'CRM IMPLEMENTATION',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'Experts at our custom CRM development agency offer perfect CRM implementation solutions. Our customized CRM implementation services help achieve your business goals, improve efficiency, and boost customer interaction. Whether it’s on-premises or cloud deployments, we excel at providing a smooth implementation service.'
  },
  {
    id: 7,
    title: 'Mobile CRM Solutions',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'Being the best CRM development company in USA, our mobile CRM tools enable businesses to manage customer interactions, tasks, and sales on the go. Our representatives are available 24/7 on their mobile phones to view customer information, carry out CRM tasks, and make updates. No matter the location, businesses can stay efficient and connected through our tailored mobile CRM services.'
  },
  {
    id: 8,
    title: 'CRM Customization',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'AlgorithmX focuses on business development with CRM systems personalized to align with your business needs. Our CRM developers perform modifications in reporting, data gathering, and other key areas to elevate your business operations with custom CRM solutions that come with several features helping in boosting sales and attaining customer loyalty.'
  },
];

const CRMServices = () => {
  const [hoveredService, setHoveredService] = useState(crmServices[0]);
  const [activeService, setActiveService] = useState(crmServices[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentHoveredId, setCurrentHoveredId] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceInteraction = (service) => {
    if (isMobile) {
      setActiveService(service);
      setHoveredService(service);
    } else {
      setHoveredService(service);
      setActiveService(service);
      setCurrentHoveredId(service.id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setCurrentHoveredId(null);
    }
  };

  const isIconGreen = (serviceId) => {
    if (isMobile) {
      return activeService.id === serviceId;
    }
    return currentHoveredId === serviceId || (!currentHoveredId && activeService.id === serviceId);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className={`${styles["services-text"]} ${monsterfont.className} mb-8 md:mb-16 text-center text-3xl`}>
        CRM Services
      </h1>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        <div className={`
          ${isMobile ? 'overflow-x-auto' : 'md:w-1/3 md:h-[300px] md:overflow-y-auto'}
          md:p-6 ${!isMobile && 'border-red-700'} pr-4 mt-2
          ${styles["crm-scrollbar"]}
        `}>
          <div className={`${isMobile ? 'flex space-x-0 min-w-max' : 'space-y-2'} ${styles["crm-scrollbar"]}`}>
            {crmServices.map((service) => (
              <div
              key={service.id}
              className={`cursor-pointer
                ${isMobile ? 'flex-shrink-0 min-w-[100px]' : 'w-full'}
                ${
                  isMobile
                    ? activeService.id === service.id
                      ? 'border-b border-green-500 shadow-[ -1px_1px_5px_7px_rgba(19,169,135,0.1)]'
                      : ''
                    : hoveredService.id === service.id
                    ? styles["box-border"]
                    : "border-black"
                }
                rounded`}
              onClick={() => isMobile && handleServiceInteraction(service)}
              onMouseEnter={() => !isMobile && handleServiceInteraction(service)}
              onMouseLeave={handleMouseLeave}
            >
                <div className={`flex items-center md:pl-8 inline-block ${isMobile ? 'flex-col items-start' : 'w-full relative'}`}>
                  <span className={`md:mr-6 transition-colors duration-300 w-[14.4px] ${isIconGreen(service.id) ? 'text-green-500' : 'text-white'}`}>
                    {service.icon}
                  </span>
                  <span className={`${styles["left-text"]} font-opensans font-[700] leading-[48px] ${!isMobile && 'whitespace-nowrap'}`}>
                    {service.title}
                  </span>
                  <span className={`ml-1 transition-colors duration-300 w-[6.4px] flex items-center justify-center mb-[1px] ${isIconGreen(service.id) ? 'text-green-500' : 'text-white'}`}>
  <FontAwesomeIcon icon={faAngleRight} style={{ width: '6.4px', height: '12.8px' }} />
</span>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`md:w-2/3 ${!isMobile && 'md:pl-[100px]'} mt-6 md:mt-0`}>
          <div className={`pt-6 pr-10 pl-10 ${styles["box-border1"]} rounded w-full h-[480px] md:h-[300px]`}>
            <h2 className={`${styles["right-title"]} ${monsterfont.className}`}>
              {isMobile ? activeService.title : hoveredService.title}
            </h2>
            <p className={`${styles["right-description"]} font-helveticaneue text-semi-white`}>
              {isMobile ? activeService.content : hoveredService.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMServices;