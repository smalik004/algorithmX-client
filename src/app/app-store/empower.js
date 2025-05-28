'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faClipboard, faCogs, faChartBar, faLaptop, faRocket, faMobileAlt, faWrench, faTasks, faLifeRing, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../crm/style.module.css'
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});

const crmServices = [
  {
    id: 1,
    title: 'ORGANIC GROWTH',
   icon: <FontAwesomeIcon icon={faTrophy} style={{ width: '14.4px', height: '12.8px' }} />,
    content: `The success of a business depends on cutting down needless expenses. AlgorithmX provides premium app store optimization services that boost your business’s visibility and attract customers organically without having to invest in paid advertising and acquisition expenses. ASO strategies improve your app’s chances of being discovered on platforms like the Google Play Store and the Apple App Store, ensuring that it shows up in search results. For users to connect effectively with your app, we optimize keywords, titles, and descriptions, leading to more organic downloads and engagements of the app. AlgorithmX's ASO strategies also include continuous monitoring and adjustments to stay ahead of evolving algorithms and market trends. This approach of our app store optimization agency aids in enhancing and maintaining your app’s position over time, ensuring maximum exposure to prospective users. Our ASO services expert focuses on effectiveness to empower brands to not rely too much on expensive ad campaigns in order to experience growth via improved user acquisition and app visibility.`
  },
  {
    id: 2,
    title: 'RELEVANT CUSTOMER',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: "Being one of the top app store optimization agencies, we offer high-quality App store optimization (ASO) that helps improve your app's visibility to users who are actively seeking products or solutions that resemble what you provide. ASO ensures that your app gets a higher ranking on the app store search results, where we enhance its features like app title, keywords, description, and visuals. It only increases the odds of users coming across your app but also enhances the quality of traffic that visits your app listing. Our successful ASO strategies involve understanding user behavior and preferences to align how your app is presented with what potential users are looking for. This results in higher conversion rates as users are more inclined to download and interact with an app that caters to their specific interests or needs. Moreover, ASO involves continuous monitoring and adjustments to stay ahead of evolving algorithms and market trends. This continuous process ensures that your app is highly visible and remains competitive in the ever-evolving, challenging app ecosystem. Furthermore, ASO proves to be a cost-effective way to increase app downloads and acquire users, delivering long-lasting benefits on app engagement and visibility."
  },
  {
    id: 3,
    title: 'MORE REVENUE',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'Optimizing your app store presence through app store optimization (ASO) plays a crucial role in increasing app users and downloads. AlgorithmX’s app store optimization packages include tuning various elements like keywords, app titles, descriptions, and graphics to boost your app’s visibility in search results within the app store. This heightened visibility helps more users discover and download your app, fostering a more engaged community of users which in turn extends your app’s reach, ultimately opening up new revenue opportunities across different channels. The optimized apps are more capable of attracting users in what they offer leading to increased app purchases and interactions with paid ads. Consequently, this significantly elevates the revenue for the app developer or owner. The effectiveness of ASO hinges on its ability to optimize and adapt strategies constantly based on user behavior, algorithmic changes, and market dynamics. Businesses can accelerate their growth by driving up their app downloads and bolstering revenue streams through regular optimization of their app’s visibility in app stores.'
  },
  {
    id: 4,
    title: 'CONSISTENCY AND STABILITY',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'With little effort and time investment, businesses can optimize their mobile apps in app stores, leading to significant advantages that ensure financial stability and revenue generation for them. Companies can leverage AlgorithmX’s top ASO campaign services and techniques to improve their app’s visibility in search results, which in turn draws users who are actively looking for relevant products or solutions resulting in higher user engagement and downloads. We consistently optimize keywords, app titles, visuals, and descriptions to help the app stay competitive within the changing app market and increase the app’s discoverability while boosting its performance metrics like user retention and conversion rates. With more users engaging and downloading the optimized app, businesses can take advantage of opportunities to improve monetization strategies, app purchases, and revenues. In essence, ASO serves as an affordable way for businesses to optimize the profitability of their apps.'
  },
  {
    id: 5,
    title: 'GLOBAL VISIBILITY',
    icon: <FontAwesomeIcon icon={faLifeRing} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'When we optimize an app for global app stores with our app store optimization services, it is reachable to an audience worldwide. By optimizing your apps across various regions and nations, we increase their chances of being discovered by users from around the world. To achieve this, our app store optimization agency localizes your app’s metadata like keywords, names, visuals, and descriptions to resonate with different cultures and languages. Adapting your app content to suit preferences helps bridge communication gaps and cultural differences, making it simple for users globally to discover your app thus improving user acquisition and retention on a global level. This makes you enter new markets, venture into international expansion prospects, and entrench yourself strongly across several geographical regions. Utilizing global ASO techniques, businesses unleash the complete potential of their apps, encouraging ongoing user engagement and ensuring long-term success in the competitive global app market.'
  },
  {
    id: 6,
    title: 'BRAND RECOGNITION',
    icon: <FontAwesomeIcon icon={faTasks} style={{ width: '14.4px', height: '12.8px' }} />,
    content: 'Our premier app store optimization agency harnesses the power of app store optimization (ASO) to provide you with desired digital reach ensuring broad visibility and brand recognition. We optimize your app’s presence in app stores to leave a lasting impression on customers making your brand memorable and immediately recognizable. As part of our ASO strategy, we optimize its primary aspects like titles, keywords, descriptions, and graphics to effectively resonate with your target audience, which results in boosting your app’s discoverability and strengthens your brand identity across different digital channels. This enables you to establish a strong reputation and credibility within your industry, nurturing trust, attracting more users, and building loyalty among the existing user base. We create an identifiable brand presence through ASO optimization to ensure your marketing efforts are streamlined and engagement is enhanced with your target audience, ultimately increasing user acquisition and app downloads. Including ASO among your digital strategies allows your brand to thrive in the online realm, gaining lasting success and visibility among global customers.'
  },
 
];

const AppServices = () => {
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
      <h1 className={`${styles["services-text"]} ${monsterfont.className} mb-8  text-center `}>
        Empower your Business <br/> with ASO
      </h1>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        <div className={`
          ${isMobile ? 'overflow-x-auto' : 'md:w-1/3 md:h-[300px] md:overflow-y-auto'}
          md:p-6 ${!isMobile && 'border-red-700'} pr-4 mt-2
          ${styles["crm-scrollbar"]}
        `}>
          <div className={`${isMobile ? 'flex space-x-0 min-w-max' : 'space-y-2'}  ${styles["crm-scrollbar"]}`}>
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
        <div className='md:px-[25px]'>
          <div className={`pt-6 md:px-10  mb-[40px] ${styles["box-border1"]}  w-full h-[800px] md:h-auto`}>
            <h2 className={`${styles["right-title"]} ${monsterfont2.className} px-[21px]`}>
              {isMobile ? activeService.title : hoveredService.title}
            </h2>
            <p className={`text-[15px]  mb-[20px] font-helveticaneue text-semi-white px-[21px]`}>
              {isMobile ? activeService.content : hoveredService.content}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppServices;