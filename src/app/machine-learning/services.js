'use client'
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
  preload: true,
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
    preload: true,
  });

const MachinePage = () => {
  const [activeService, setActiveService] = useState(4);

  const services = [
    { id: 1, title: '01. Machine Learning Consulting' },
    { id: 2, title: '02. Machine Learning Development' },
    { id: 3, title: '03. Neural Network Development' },
    { id: 4, title: '04. Machine Learning Engineering' },
    { id: 5, title: '05. Machine Learning Implementation' },
    { id: 6, title: '06. MLOps' },

  ];

  const serviceDescriptions = {
    1: {
      title: 'Machine Learning Consulting',
      description: 'Our ML experts offer strategic consulting to help you identify high-impact AI opportunities. We evaluate your data, infrastructure, and business goals to design machine learning roadmaps that deliver measurable results and drive innovation.'
    },
    2: {
      title: 'Machine Learning Development',
      description: 'We build tailored machine learning models that turn raw data into actionable insights. From supervised learning to reinforcement learning, our solutions are scalable, adaptable, and optimized for performance in real-world environments.'
    },
    3: {
      title: 'Neural Network Development',
      description: 'We design and train deep neural networks for tasks like image recognition, NLP, and time-series forecasting. Leveraging architectures like CNNs, RNNs, and transformers, we enable your systems to learn complex patterns with high accuracy.'
    },
    4: {
      title: 'Machine Learning Engineering',
      description: 'We bridge the gap between ML research and production with strong ML engineering practices. Our team ensures robust model training, versioning, testing, and integration into production pipelines with minimal downtime and high reliability.'
    },
    5: {
      title: 'Machine Learning Implementation',
      description: 'From model deployment to integration with existing systems, we provide end-to-end implementation services. We ensure your ML solutions are production-ready, secure, and aligned with your data and infrastructure workflows.'
    },
    6: {
      title: 'MLOps',
      description: 'MLOps combines machine learning, DevOps, and data engineering to automate and monitor the entire ML lifecycle. We implement CI/CD for models, ensure reproducibility, manage model drift, and enable scalable ML deployment and monitoring in production.'
    },
  };
  

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Heading and Description */}
      <div className="max-w-[1200px] text-center mb-8 px-4">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}>
          ML & AI Services
        </h1>
        <p className={`text-[20px] leading-[24px] ${monsterfont1.className}  text-semi-white `}>
          Unlock the power of artificial intelligence with our comprehensive machine learning solutions. 
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
                      : 'text-semi-white  hover:text-white/60'}`}
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

export default MachinePage;