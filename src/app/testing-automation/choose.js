"use client";
import React, { useState } from "react";
import { Award, Link, Layers, Shield } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});

const TestingChoosePage = () => {
  const [activeSection, setActiveSection] = useState("robustSecurity");

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: "Cutting-Edge Technology",
      description:
        "We use leading tools like Selenium, Cypress, JMeter, and AI-enhanced test analytics to deliver accurate, scalable, and efficient QA pipelines, ensuring your software is future-ready and high performing.",
      image: "/images/a1.png",
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: "Dedicated QA Centers of Excellence",
      description:
        "Our QA COEs manage testing end-to-end from planning and execution to optimization and reporting, so your teams can focus on building, while we safeguard quality.",
      image: "/images/Why.webp",
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: "Transparent, Ongoing Support",
      description:
        "We offer full lifecycle QA support with clear reporting, proactive maintenance, and continuous alignment to product evolution, ensuring long-term success and minimal regression risk.",
      image: "/images/a1.png",
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: "Tailored QA Strategies",
      description:
        "Every test plan is custom-fit to your product stack, use cases, and goals. We adapt our frameworks to your development ecosystem to ensure coverage is precise, not generic.",
      image: "/images/Why.webp",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1
          className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}
        >
          Why Choose AlgorithmX as Your Testing and Automation Company?
        </h1>
        <p
          className={`text-[16px] leading-[20px] ${monsterfont1.className}  text-semi-white mb-4`}
        >
          AlgorithmX is a proven QA partner for enterprises seeking speed,
          reliability, and scale. We engineer automation frameworks and QA
          strategies tailored to your architecture, development velocity, and
          business risk profile, enabling faster releases, fewer defects, and
          seamless user experiences.
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
                    ? " text-white "
                    : "bg-transparent text-semi-white "
                }`}
              >
                {section.icon}
                <span className="font-semibold font-helveticaneue ">
                  {section.title}
                </span>
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

export default TestingChoosePage;
