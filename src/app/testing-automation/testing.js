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
    title: ' Quality Assurance',
    icon: <FontAwesomeIcon icon={faTrophy} style={{ width: '14.4px', height: '12.8px' }} />,
    content: `We harness artificial intelligence to enhance testing precision, reliability, and scalability. Advanced analytics and continuous learning models enable faster defect detection, while seamless integration ensures smooth implementation and minimal disruption. AI-powered automation delivers more efficient testing cycles and ensures your QA strategy is ready for the future.`
  },
  {
    id: 2,
    title: 'Automation Testing',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We utilize industry-leading frameworks such as Selenium, Appium, and JMeter to automate testing across platforms and layers. Automation accelerates feedback loops, ensures comprehensive test coverage, and eliminates redundancies in manual testing processes. Enhanced precision and efficiency empower teams to deliver high-quality digital solutions faster and with fewer resources.'
  },
  {
    id: 3,
    title: 'COE Setup',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We establish a dedicated Center of Excellence for Quality Assurance, tailored to your organization’s needs. This centralized approach ensures accountability, standardized processes, and consistent results across all QA efforts. By fostering a culture of continuous improvement, we enable scalable, high-quality testing outcomes that drive long-term operational excellence.'
  },
  {
    id: 4,
    title: 'API Testing',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We optimize your APIs for functionality, security, performance, and reliability to ensure seamless communication between systems. Rigorous testing methodologies detect critical issues early, enhancing software quality and reducing development costs. APIs are validated to perform flawlessly under real-world conditions, ensuring optimal user experiences.'
  },
  {
    id: 5,
    title: 'Performance Testing',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: "We ensure your applications perform reliably under varying workloads, using both manual and automated techniques to identify and resolve bottlenecks. Performance testing evaluates system scalability, stability, and speed, ensuring your platform can handle high traffic and peak usage without compromising user experience or functionality."
  },
  {
    id: 6,
    title: 'Accessibility Testing',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We ensure your applications are inclusive and compliant with global accessibility standards like WCAG and ADA. By identifying and addressing accessibility barriers, we help make your digital products usable for diverse audiences. Accessibility testing not only enhances user satisfaction but also ensures regulatory compliance and inclusivity.'
  },
  {
    id: 7,
    title: 'Sustenance & Support',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We provide round-the-clock sustenance and support to maintain application stability and reliability post-deployment. Regular updates and proactive issue resolution minimize vulnerabilities and downtime. By ensuring seamless operation, we help your systems deliver consistent and dependable performance over time.'
  },
  {
    id: 8,
    title: 'Unit Test Case Writing',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'We focus on building detailed unit test cases that ensure high code coverage and early detection of defects. Integrating test cases into the codebase accelerates issue resolution and improves application reliability. This structured approach enhances testing efficiency and contributes to faster development cycles.'
  },
];

const   TestingServices = () => {
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
      Testing & QA Solutions
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

export default TestingServices;