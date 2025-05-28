'use client'
import React, { useState } from 'react';
import { Award, Link, Layers, Shield } from 'lucide-react';
import Image from 'next/image';
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

const AIMLPage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Proven Expertise in AI & ML',
      description: "Our team consists of AI and ML professionals with a deep understanding of algorithms, data engineering, and real-world implementations. With a proven record of delivering AI-driven transformation, we ensure intelligent solutions tailored to your business needs.",
      image: '/images/a1.png'
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Data-Driven Efficiency & ROI',
      description: 'We help businesses unlock the full potential of their data through intelligent automation and predictive analytics. Our AI & ML solutions reduce operational costs, optimize workflows, and deliver measurable ROI by automating complex tasks and uncovering hidden insights.',
      image: '/images/Why.webp'
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Customized AI Solutions',
      description: 'We develop custom AI & ML models designed to solve specific business challenges. Whether it’s recommendation systems, natural language processing, or computer vision, our solutions are tailored for scalability, usability, and performance.',
      image: '/images/a1.png'
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Scalable Architecture ',
      description: 'Our AI platforms are built for scalability and continuous learning. As your data grows and business evolves, our models adapt, learn, and stay relevant—ensuring long-term success with evolving technological landscapes.',
      image: '/images/Why.webp'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}>
          Why Choose AlgorithmX as Your AI & ML Development Company?
        </h1>
        <p className={`text-[16px] leading-[20px] ${monsterfont1.className}  text-semi-white mb-4`}>
          As a trusted AI & ML development company, we have established ourselves as a leading provider of intelligent solutions by delivering data-driven, user-centric applications for top brands. As a premium AI & ML technology partner, we focus on bridging the gap between raw data and smart automation—empowering our clients with innovative, scalable, and efficient AI environments that drive business growth and decision-making excellence.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3 space-y-4  rounded-[20px] ">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-colors duration-300 ${
                  activeSection === key 
                    ? ' text-white ' 
                    : 'bg-transparent text-semi-white '
                }`}
              >
                {section.icon}
                <span className="font-semibold font-helveticaneue ">{section.title}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:grid md:w-2/3 rounded-lg p-8 grid-cols-2 gap-8">
            <div className="w-full h-[200px] relative">
              <Image 
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                fill
                className="object-cover rounded-lg w-full]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-2xl font-bold font-helveticaneue">
                  {sections[activeSection].title}
                </h2>
              </div>
              <p className="text-semi-white font-helveticaneue">
                {sections[activeSection].description}
              </p>
            </div>
          </div>

          <div className="md:hidden">
            <div className=" border-[1px]  rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-xl font-bold font-helveticaneue">{sections[activeSection].title}</h2>
              </div>
              <p className="text-semi-white font-helveticaneue">{sections[activeSection].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLPage;
