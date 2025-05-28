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

const Web3DevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Smart Contracts',
      description: 'Our blockchain experts craft secure, efficient, and thoroughly audited smart contracts to ensure transparency and prevent vulnerabilities in your decentralized applications.',
      image: '/images/a1.png'
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Seamless Decentralized Integration',
      description: 'We build interoperable systems that connect decentralized networks with legacy platforms, enabling smooth data flow, enhanced performance, and robust connectivity across Web3 ecosystems.',
      image: '/images/Why.webp'
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Intuitive Web3 UX',
      description: 'We design blockchain-based interfaces that are user-centric, ensuring mass adoption by simplifying wallet connections, transaction signing, and Web3 onboarding flows.',
      image: '/images/a1.png'
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Scalable Blockchain Solutions',
      description: 'Our team builds scalable dApps using Layer-2 solutions, modular blockchain frameworks, and optimized architecture to support millions of users without compromising speed or security.',
      image: '/images/Why.webp'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className} text-white mb-4`}>
          Why Choose AlgorithmX as Your Web3 Development Partner?
        </h1>
        <p className={`text-[16px] leading-[20px] ${monsterfont1.className} text-semi-white mb-4`}>
          AlgorithmX brings deep expertise in blockchain, DeFi, NFTs, and DAOs to deliver cutting-edge decentralized solutions. Our Web3 developers focus on building secure, scalable, and user-friendly dApps that empower the future of the internet.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3 space-y-4 rounded-[20px] ">
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
            <div className="border-[1px] rounded-lg p-6">
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

export default Web3DevelopmentPage;
