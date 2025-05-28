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

const IOTPage = () => {
  const [activeService, setActiveService] = useState(4);

  const services = [
    { id: 1, title: '01. IoT Consulting' },
    { id: 2, title: '02. IoT App Development' },
    { id: 3, title: '03. IoT Wearable Connectivity' },
    { id: 4, title: '04. IoT Testing' },
    { id: 5, title: '05. AIoT' },
    { id: 6, title: '06. IIoT' },

  ];

  const serviceDescriptions = {
    1: {
      title: 'Machine Learning Consulting',
      description: 'Our skilled ML consultants provide expert guidance in developing and implementing machine learning strategies tailored to your business needs. We help organizations leverage cutting-edge AI technologies to drive innovation and competitive advantage.'
    },
    2: {
      title: 'Machine Learning Development',
      description: 'We specialize in developing custom machine learning solutions that transform your data into powerful predictive models. Our team creates scalable, intelligent systems that adapt and learn from your unique business challenges.'
    },
    3: {
      title: 'Neural Network Development',
      description: 'Advanced neural network solutions designed to tackle complex computational problems. We build sophisticated deep learning architectures that can process and analyze intricate data patterns with unprecedented accuracy.'
    },
    4: {
      title: 'Machine Learning Engineering',
      description: 'Comprehensive machine learning engineering services that bridge the gap between theoretical models and practical implementation. We ensure your ML solutions are robust, efficient, and seamlessly integrated into your existing infrastructure.'
    },
    5: {
      title: 'Machine Learning Implementation',
      description: 'End-to-end machine learning implementation services that transform your data strategy. From model selection to deployment, we provide full-cycle support to ensure your AI initiatives deliver tangible business value.'
    },
    6: {
        title: 'MLOps',
        description: 'MLOps (Machine Learning Operations) is a set of practices that combines machine learning (ML), DevOps, and data engineering to automate and streamline the lifecycle of machine learning models. It focuses on deploying, monitoring, and maintaining ML models in production reliably and efficiently.'
      },
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Heading and Description */}
      <div className="max-w-[1200px] text-center mb-8 px-4">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}>
        IoT Development Services
        </h1>
        <p className={`text-[20px] leading-[24px] ${monsterfont1.className}  text-semi-white `}>
          Unlock the power of IoT with our comprehensive machine learning solutions. 
          From consulting to implementation, we help businesses harness the potential of advanced AI technologies.
        </p>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-2xl">
        <div className="w-full md:w-1/2  max-h-[480px]">
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:p-8 p-4 text-center overflow-x-auto">
            {services.map((service, index) => (
              <div key={service.id} className="relative">
                <button
                  onClick={() => setActiveService(service.id)}
                  className={`inline-block md:w-full p-4 rounded-lg transition-all duration-300 text-left text-[18px] font-helveticaneue font-[600] 
                    ${activeService === service.id
                      ? ' text-white '
                      : 'text-semi-white  hover:text-white/80'}`}
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
        <div className="w-full md:flex-1 bg-black p-6 md:p-12  md:rounded-bl-none flex flex-col justify-center items-center ">
  <div className="bg-black w-full">
    <div className="flex  space-x-4 mb-6">
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

export default IOTPage;