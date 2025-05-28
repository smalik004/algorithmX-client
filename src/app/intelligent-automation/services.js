import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});


const IntelligentServices = () => {
  const services = [
    {
      iconSrc: "images/bd_1.svg",
      title: "Process Discovery & Automation Roadmap",
      description: "We deep dive into enterprise-wide business processes to identify, observe, map, define the road map, prioritize processes to automate, & optimize operational efficiencies through intelligent automation.",
      borderColor: "border-red-500",
      glowColor: styles.shadowred,
    },
    {
      iconSrc: "images/bd_2.svg",
      title: "Digital Transformation Consulting",
      description: "Make smarter and faster decisions. With In-house SME, we provide end-to-end consulting for RPA with AI and analytics to automate complex processes, reduce errors, and accelerate turnaround times.",
      borderColor: "border-yellow-500",
      glowColor: styles.shadowyellow,
    },
    {
        iconSrc:  "images/bd_3.svg",
        title: "Scale to Hyper Automate with Citizen Development",
        description: "Democratize Citizen Development through your workforce. Build the ideation pipeline faster for your automation CoE with RBAC to ensure safe innovation.",
        borderColor: "border-white-500",
        glowColor: styles.shadowblue,
      },
    {
      iconSrc:  "images/bd_4.svg",
      title: "Intelligent Workflow Automation",
      description: "Break down data silos and work seamlessly. Intelligent workflow automation integrates systems, orchestrates processes, and ensures smooth data flow for unmatched efficiency and collaboration.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowgreen,
    },
    {
      iconSrc:  "images/bd_5.svg",
      title: "Intelligent Document Processing (IDP)",
      description: "Unlock the power of your documents. IDP extracts data from unstructured documents with exceptional accuracy, streamlining document management and analysis for significant time and resource savings.",
      borderColor: "border-green-500",
      glowColor: styles.shadowpink,
    },
    {
        iconSrc:  "images/bd_6.svg",
        title: "Rules-based Bots",
        description: "From customer support and sales to internal operations, finance, healthcare, manufacturing, supply chain, and beyond, rule-based bots automate tasks & optimize processes, empowering teams to focus on strategic initiatives.",
        borderColor: "border-pink-500",
        glowColor: styles.shadowlightgreen,
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
        <p className={`${styles["offering-text"]} ${monsterfont1.className} mb-2 `}> OFFERINGS</p>
          <h1 className={`text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] tracking-[0.06em] ${monsterfont2.className} text-white mb-2`}>INTELLIGENT AUTOMATION</h1>
          <h2 className={`${styles["development-text"]} ${monsterfont.className} mb-2`}>SERVICES</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-4 ${styles["pad"]}
                         border ${service.borderColor} rounded-2xl bg-black
                         shadow-lg ${service.glowColor}
                         transition-all duration-300`}
            >
              <div className="flex-shrink-0">
                <img 
                  src={service.iconSrc}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className={`${styles["development-title"]} font-helveticaneue text-white mb-3`}>
                  {service.title}
                </h3>
                <p className={`${styles["development-description"]} font-helveticaneue text-semi-white`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelligentServices;