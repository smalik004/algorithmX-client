'use client'
import React, { useState } from 'react';
import { Award, Link, Layers, Shield } from 'lucide-react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ['sans-serif'],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '200',
  fallback: ['sans-serif'],
});

const IntelligentChoosePage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Strategic Automation Expertise',
      description: 'We specialize in implementing intelligent automation strategies that align with your business goals. Our team brings a deep understanding of industry-specific workflows to deliver scalable, efficient automation solutions that optimize operations and drive performance.',
      image: '/images/a1.png',
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Advanced AI & RPA Integration',
      description: 'Leveraging cutting-edge technologies like AI, RPA, and machine learning, we design automation ecosystems that deliver real-time insights and autonomous decision-making. Our solutions reduce manual effort and unlock new levels of productivity.',
      image: '/images/Why.webp',
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Seamless User Experience',
      description: 'Intelligent automation is only effective when it’s adopted by your team. That’s why we build solutions with user-centric design, ensuring simple interfaces and smooth transitions that encourage adoption and reduce training time.',
      image: '/images/a1.png',
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Continuous Improvement & Support',
      description: 'Our partnership doesn’t end at deployment. We offer ongoing optimization, monitoring, and support to refine your automation workflows, ensuring they evolve with your business and deliver sustained value over time.',
      image: '/images/Why.webp',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className} text-white mb-4`}>
          Why Choose AlgorithmX for Intelligent Automation?
        </h1>
        <p className={`text-[16px] leading-[20px] ${monsterfont1.className} text-semi-white mb-4`}>
          At AlgorithmX, we empower businesses through transformative intelligent automation solutions. Our AI-driven approach integrates seamlessly into your workflows, accelerating digital transformation while maintaining a human-first experience.
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
            <div className="border-[1px] rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-xl font-bold font-helveticaneue">
                  {sections[activeSection].title}
                </h2>
              </div>
              <p className="text-semi-white font-helveticaneue">
                {sections[activeSection].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentChoosePage;
