'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faClipboard, faCogs, faChartBar, faLaptop, faRocket, faMobileAlt, faWrench, faTasks, faLifeRing, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../crm/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '200',
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
    title: 'SOFTWARE CONSULTING  ',
    subtitle :'SOFTWARE CONSULTING SERVICES',
    icon: <FontAwesomeIcon icon={faTrophy} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'As a leading custom software development company, we carefully evaluate your business needs, design software structures and guarantee maximum development benefits to you. Our dedicated software developers in USA use their technical knowledge and skills to deliver tailored software solutions that improve operational efficiency and increase productivity.'
  },
  {
    id: 2,
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    subtitle :'CUSTOM SOFTWARE DEVELOPMENT SERVICES',
    icon:<FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: ' Achieve the expected level of business competence in the current competitive market landscape, custom software development plays a crucial role in achieving optimal business efficiency. AlgorithmX offers the best custom software development service in USA, delivering custom software solutions designed for your particular business needs.'
  },
  {
    id: 3,
    title: 'ENTERPRISE SOFTWARE DEVELOPMENT ',
    subtitle :'ENTERPRISE SOFTWARE DEVELOPMENT SERVICES',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'As a notable agency in custom software development, we focus on helping companies achieve lasting success by using our bespoke enterprise software development services and solutions ranging from simple to complex ones. Our software development consulting services aim to expand your business infrastructure simultaneously improving other critical areas of your organization.'
  },
  {
    id: 4,
    title: 'SOFTWARE PRODUCT DEVELOPMENT ',
    subtitle :'SOFTWARE PRODUCT DEVELOPMENT SERVICES',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'Our software product development company provides a range of services to assist you in all aspects of custom software application development, including everything from market research and business analysis to overseeing development, deployment, and post-launch maintenance. We deliver our clients secure, compliant, and high-end solutions that precisely meet their needs as we are experts in development consulting, architecture and product design, and compliance management.'
  },
  {
    id: 5,
    title: 'SOFTWARE INTEGRATION  ',
    subtitle :'SOFTWARE INTEGRATION SERVICES',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'When a company adopts a new technology it may face obstacles with its current systems. Our specialized team of software developers utilizes advanced methods and technologies to tackle any issues related to implementation and integration of software covering optimization, testing and design.'
  },
  {
    id: 6,
    title: 'CUSTOM CRM DEVELOPMENT ',
    subtitle :'CUSTOM CRM DEVELOPMENTT SERVICES',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'At our custom software development company, we offer outstanding CRM software development for streamlining your business processes, improving customer relationships, and boosting the effectiveness of your business operations.'
  },
  {
    id: 7,
    title: 'API DEVELOPMENT',
    subtitle :'API DEVELOPMENT SERVICES',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'In our offshore software development services, our team provides API development and integration solutions to enhance the connectivity of your software applications with your customers and vendor partners, increasing revenue generation.'
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
      <h1 className={`text-[38.4px] leading-[42px] md:text-[64px] md:leading-[68px] ${monsterfont.className} mb-8 md:mb-16 text-center text-3xl`}>
      Discover our End-to-End <br/> <span className={`${monsterfont1.className}`}>Software Development <br/> Services</span>
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
                  <span className={`md:mr-6 transition-colors  w-[14.4px] ${isIconGreen(service.id) ? 'text-green-500' : 'text-white'}`}>
                    {service.icon}
                  </span>
                  <span className={`${styles["left-text"]} ${monsterfont2.className}`}>
                {service.title}
                <span className={`ml-1 transition-colors mb-[4px]  w-[6.4px] ${isIconGreen(service.id) ? 'text-green-500' : 'text-white'}`}>
                    <FontAwesomeIcon icon={faAngleRight} style={{ width: '6.4px', height: '12.8px' }} />
                  </span>
              </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`md:w-2/3 ${!isMobile && 'md:pl-[100px]'} mt-6 md:mt-0`}>
          <div className={`md:pt-6 pt-2 pr-2 pl-2 md:pr-10 md:pl-10  ${styles["box-border1"]} rounded w-full h-[450px] md:h-[300px]`}>
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