'use client'
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
  });

const BiConsultingPage = () => {
  const [activeService, setActiveService] = useState(4);

  const services = [
    { id: 1, title: '01. BI Consulting' },
    { id: 2, title: '02. Enterprise Business Intelligence' },
    { id: 3, title: '03. Implementation of BI Applications' },
    { id: 4, title: '04. BI Support & Maintenance' }
  ];

  const serviceDescriptions = {
    1: {
      title: 'BI Consulting',
      description: 'Our skilled BI consultants have the ability to maintain as well as enhance an organization\'s existing BI solutions, including analytics, reporting, ETL, database development & administration, and more. We support a myriad of BI platforms and databases and provide a comprehensive business intelligence services tailor-made to an organization\'s business needs, driving results including low incident occurrence and reduced total cost of ownership.'
    },
    2: {
      title: 'Enterprise Business Intelligence',
      description: 'At AlgorithmX, our Enterprise Business Intelligence solutions empower organizations with AI-driven analytics, real-time insights, and data-driven decision-making. We enhance scalability, efficiency, and performance, transforming complex data into strategic growth opportunities.'
    },
    3: {
      title: 'Implementation of BI Applications',
      description: 'At AlgorithmX, we specialize in the implementation of Business Intelligence (BI) applications, integrating AI-driven analytics, real-time reporting, and data visualization. Our solutions enhance decision-making, efficiency, and business growth, ensuring seamless data transformation.'
    },
    4: {
      title: 'BI Support & Maintenance',
      description: 'Our skilled BI consultants have the ability to maintain as well as enhance an organization\'s existing BI solutions, including analytics, reporting, ETL, database development & administration, and more. We support a myriad of BI platforms and databases and provide a comprehensive business intelligence services tailor-made to an organization\'s business needs, driving results including low incident occurrence and reduced total cost of ownership.'
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Heading and Description */}
      <div className="max-w-[1200px] text-center mb-8 px-4">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}>Business Intelligence Services</h1>
        <p className={`text-[20px] leading-[24px] ${monsterfont1.className}  text-semi-white `}>
          Unlock the power of data-driven decision-making with our comprehensive BI solutions. 
          From consulting to implementation and ongoing support, we help businesses gain insights 
          that drive success.
        </p>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-2xl">
        {/* Services Navigation - Inline on Mobile, Full Width on Desktop */}
        <div className="w-full md:w-1/2  overflow-x-auto">
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:p-8 p-4 text-center overflow-x-auto">
            {services.map((service,index) => (
              <div key={service.id} className="relative">
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`inline-block md:w-full p-4 rounded-lg transition-all duration-300 text-left text-[18px] font-helveticaneue font-[600] 
                  ${activeService === service.id
                    ? ' text-white '
                    : 'text-semi-white hover:text-white/60'}`}
              >
                {service.title}
              </button>
              {/* Dividing line - hidden on mobile */}
              {index < services.length - 1 && (
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[1px] bg-green-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area with Blue Border */}
        <div className="w-full md:flex-1 bg-black p-6 md:p-12  md:rounded-bl-none">
          <div className="bg-black w-full">
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <h2 className="text-[24px] leading-[26px] font-helveticaneue text-white">
                  {serviceDescriptions[activeService].title}
                </h2>
              </div>
            </div>
            <p className="text-semii-white text-[16px] font-helveticaneue leading-relaxed">
              {serviceDescriptions[activeService].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiConsultingPage;
