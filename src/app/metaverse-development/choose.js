'use client'
import React, { useState } from 'react';
import { Award, Link, Layers, Shield } from 'lucide-react';
import Image from 'next/image';

const MetaverseDevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Immersive Experience Design',
      description: 'We create highly engaging and interactive virtual environments using cutting-edge AR/VR tools to deliver a fully immersive metaverse experience tailored to your brand.',
      image: '/images/a1.png'
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Seamless Cross-Platform Integration',
      description: 'Our team ensures your metaverse solutions are integrated seamlessly across web, mobile, and VR devices, offering users a consistent and accessible experience.',
      image: '/images/Why.webp'
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Custom Avatars & Virtual Assets',
      description: 'We develop custom avatars, digital assets, and tokenized economies (NFTs) to help your brand stand out and enable meaningful engagement in virtual spaces.',
      image: '/images/a1.png'
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Scalable & Secure Metaverse Solutions',
      description: 'From initial prototype to global deployment, we build scalable metaverse platforms with enterprise-grade security, ready to grow with your vision.',
      image: '/images/Why.webp'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose AlgorithmX for Metaverse Development?
        </h1>
        <p className="text-gray-300 mb-8">
          At AlgorithmX, we are passionate about shaping the future of digital interaction. Our Metaverse development team combines creativity, technical expertise, and innovation to help businesses build virtual ecosystems that drive engagement, collaboration, and new revenue opportunities.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* Mobile & Desktop Left Section - Clickable Items */}
          <div className="md:w-1/3 space-y-4 rounded-[20px]">
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
                <span className="font-semibold">{section.title}</span>
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
                <h2 className="text-2xl font-bold">
                  {sections[activeSection].title}
                </h2>
              </div>
              <p className="text-gray-300">
                {sections[activeSection].description}
              </p>
            </div>
          </div>

          {/* Mobile Description Section */}
          <div className="md:hidden">
            <div className=" border-[1px] border-blue-700 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-xl font-bold">{sections[activeSection].title}</h2>
              </div>
              <p className="text-gray-300">{sections[activeSection].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaverseDevelopmentPage;
