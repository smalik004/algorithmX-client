import React from 'react';
import { Montserrat } from "next/font/google";
import styles from "../graphics/styles.module.css";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const MetaverseProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Requirement Analysis",
      description: "We begin by understanding your vision for the Metaverse. This involves identifying business goals, key user interactions, preferred virtual environments, and immersive experiences that align with your brand and objectives.",
    },
    {
      number: 2,
      title: "Conceptualization & UI/UX Design",
      description: "Our creative team crafts intuitive and immersive user interfaces for virtual environments. This stage ensures the user journey is smooth, engaging, and designed to foster interaction within the Metaverse.",
    },
    {
      number: 3,
      title: "Interactive Prototype",
      description: "We develop a working prototype to demonstrate key features of your Metaverse solution. This helps you visualize the environment and interaction flow before full-scale development begins.",
    },
    {
      number: 4,
      title: "Metaverse Development",
      description: "Using cutting-edge tools like Unity, Unreal Engine, and WebXR, our developers build the Metaverse solution with blockchain integration, smart contracts, and 3D assets tailored to your needs.",
    },
    {
      number: 5,
      title: "Quality Testing",
      description: "Our QA experts rigorously test performance, security, usability, and cross-platform compatibility to ensure a seamless and bug-free Metaverse experience.",
    },
    {
      number: 6,
      title: "Deployment",
      description: "We deploy your Metaverse application on the desired platform—whether VR, AR, web, or mobile—ensuring smooth rollout with minimal downtime and optimal performance.",
    },
    {
      number: 7,
      title: "Ongoing Support & Optimization",
      description: "AlgorithmX provides continuous post-launch support, performance monitoring, and iterative improvements to keep your Metaverse experience engaging, scalable, and future-ready.",
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`${styles["main-text"]} ${monsterfont1.className} `}>Metaverse Software Development Approach  </h1>
          <h2 className={`${styles["main-text"]} ${monsterfont.className}  text-white `}>
            Ensures End to End  Efficiency
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-500"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative pl-16 pb-16">
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                <span className={`font-helveticaneue text-black`}>{step.number}</span>
              </div>
              
              {/* Content */}
              <div>
                <h3 className= {`${monsterfont.className} ${styles["sub-title"]}`}>{step.title}</h3>
                <p className={`${styles["sub-description"]} font-helveticaneue text-semi-white`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaverseProcess;
