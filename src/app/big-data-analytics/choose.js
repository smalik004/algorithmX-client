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

const BigDataChoosePage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Data-Driven Decision-Making',
      description: 'We excel at harnessing AI and Big Data to uncover hidden patterns in customer behavior, market trends, and operational performance. By transforming complex datasets into clear, actionable insights, we enable you to make smarter, data-driven decisions that optimize operations and fuel strategic growth.',
      image: '/images/a1.png'
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the curve with our cutting-edge data expertise. By leveraging the latest AI-powered tools and Big Data analytics solutions, we extract key insights from large, complex datasets, giving you a distinct competitive edge. This empowers you to make proactive decisions that drive growth and position your business as a leader in your industry.',
      image: '/images/Why.webp'
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Enhanced Efficiency​',
      description: 'Maximize efficiency and streamline operations with our data-driven approach. Using AI and Big Data, we identify areas for automation, eliminate redundancies, and optimize workflows. By reallocating resources effectively, we help you achieve higher productivity levels, ultimately boosting your bottom line.',
      image: '/images/a1.png'
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Transparency & Ongoing Support',
      description: 'At AlgoritmX, we value transparent communication and long-term collaboration. Our commitment extends beyond implementation, offering continuous support to ensure your AI automation tools continue to deliver optimal performance. We work alongside you to maximize the value of your investment and drive sustained success.',
     image: '/images/Why.webp'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}>
          Why Choose AlgorithmX as Your Big Data Analysis  Company?
        </h1>
        <p className={`text-[16px] leading-[20px] ${monsterfont1.className}  text-semi-white mb-4`}>
          As a trusted development company, we have proven ourselves as the leading Big Data  Analytics development company by providing user-centric applications for top brands. Being a premium IoT software development company, we focus on bridging the gap between the real and digital world and providing our clients with the most innovative and usable IoT environment.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* Mobile & Desktop Left Section - Clickable Items */}
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

          {/* Desktop Right Section - Description with Image */}
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

          {/* Mobile Description Section */}
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

export default BigDataChoosePage;