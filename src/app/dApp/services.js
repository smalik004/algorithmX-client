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
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});

const crmServices = [
  {
    id: 1,
    title: 'Tokenization Platform',
    icon: <FontAwesomeIcon icon={faTrophy} style={{ width: '14.4px', height: '12.8px' }} />,
    content: `We offer a robust Tokenization Platform as a Service, enabling businesses to seamlessly create, manage, and deploy digital tokens for assets, utilities, or securities with enterprise-grade security and compliance.Our platform simplifies the tokenization process, providing customizable solutions with smart contract integration, real-time analytics, and seamless blockchain interoperability.`
  },
  {
    id: 2,
    title: 'DAO Development',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We specialize in DAO development services, empowering communities to build decentralized, transparent, and self-governed ecosystems.Our solutions include smart contract creation, governance frameworks, and seamless integration with blockchain networks.'
  },
  {
    id: 3,
    title: 'DeFi Development',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We offer comprehensive Decentralized Finance (DeFi) development services to build secure, scalable, and user-centric financial platforms on the blockchain.From lending and staking protocols to Decentralized Exchanges (DEXs) and yield farming solutions, we deliver innovative DeFi applications tailored to your goals.'
  },
  {
    id: 4,
    title: 'NFT Development',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We provide end-to-end Non-Fungible Token (NFT) development services to help you create, manage, and launch unique digital assets on leading blockchain networks.Our services include smart contract development, NFT marketplace creation, and integration of minting, trading, and royalty features.'
  },
  
];

const DAppServices = () => {
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
      <h1 className={`md:text-[64px] leading-[68px] text-[50px]  ${monsterfont.className} mb-[20px] text-center text-3xl`}>
        dApp Development Services
      </h1>
      <p className='text-[18px] font-helveticaneue leading-[18px] text-center mb-10 text-semi-white'>
      We provide end-to-end DApp development services, delivering secure and scalable decentralized applications tailored to your business needs.
      </p>

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
                  ${(isMobile ? activeService.id === service.id : hoveredService.id === service.id)
                    ? styles["box-border"]
                    : "border-black"}
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

export default DAppServices;