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

const DAppDevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Blockchain Expertise',
      description: 'Our team leverages deep expertise in blockchain to develop secure, transparent, and decentralized applications that ensure data integrity and trust across all operations.',
      image: '/images/a1.png'
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Development Team',
      description: 'Our skilled development team brings your ideas to life with precision, delivering high-performance solutions using modern tech stacks and agile methodologies.',
      image: '/images/Why.webp'
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Project-Based Model',
      description: 'We offer a flexible project-based engagement model tailored to your goals, ensuring timely delivery, clear milestones, and efficient resource utilization.',
      image: '/images/a1.png'
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Intutive UI/UX',
      description: 'We craft intuitive UI/UX designs that prioritize user engagement, making complex processes simple, seamless, and visually appealing for every user.',
      image: '/images/Why.webp'
    }
  };
  

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}>
          Why Choose AlgorithmX as Your dApp Development Company?
        </h1>
        <p className={`text-[16px] leading-[20px] ${monsterfont1.className}  text-semi-white mb-4`}>
  As a trusted DApp development company, we have established ourselves as a leading provider by delivering decentralized, user-centric applications for top brands. Being a premium DApp software development company, we focus on bridging the gap between innovation and usability, offering secure and scalable blockchain solutions.
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

export default DAppDevelopmentPage;