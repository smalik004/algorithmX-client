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

const IoTDevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState("robustSecurity");

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: "Robust Security",
      description:
        "From device authentication to end-to-end encryption and OTA updates, we enforce industry-grade security and governance from edge to cloud.",
      image: "/images/a1.png",
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: "Reliable Connectivity",
      description:
        "We implement resilient protocols (MQTT, CoAP, LwM2M) and optimize network performance to ensure consistent device communication across diverse environments.",
      image: "/images/Why.webp",
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: "User-Centric Design",
      description:
        "Our interfaces abstract backend complexity, offering seamless UX for configuration, monitoring, and control across web, mobile, and embedded systems.",
      image: "/images/a1.png",
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: "Scalable Architecture",
      description:
        "Built on microservices and containerized infrastructure, our solutions scale effortlessly across devices, users, and data volumes.",
      image: "/images/Why.webp",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h2
          className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}
        >
          Why Choose AlgorithmX as Your IoT Development Company?
        </h2>
        <p
          className={`text-[16px] leading-[20px] ${monsterfont1.className}  text-semi-white mb-4`}
        >
          At AlgorithmX, we engineer IoT ecosystems that merge edge intelligence
          with cloud-native scalability. Our solutions are built for
          performance, interoperability, and future-readiness, enabling
          businesses to unlock real-time insight, automation, and control.
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
                width={300}
                height={200}
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="object-cover rounded-lg w-full]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h3 className="text-2xl font-bold font-helveticaneue">
                  {sections[activeSection].title}
                </h3>
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
                <h3 className="text-xl font-bold font-helveticaneue">
                  {sections[activeSection].title}
                </h3>
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

export default IoTDevelopmentPage;
