import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../graphics-services/styles.module.css";

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
      description:
        "We align your vision with technical feasibility—defining business objectives, user interaction models, preferred platforms (VR, AR, web), and core immersive elements.",
    },
    {
      number: 2,
      title: "Conceptualization & UI/UX Design",
      description:
        "Our design team crafts intuitive, spatially aware interfaces that prioritize usability, engagement, and continuity across devices and virtual environments.",
    },
    {
      number: 3,
      title: "Interactive Prototyping",
      description:
        "We create a functional prototype with core mechanics, avatar behavior, and navigation logic—allowing stakeholders to experience and validate key flows early.",
    },
    {
      number: 4,
      title: "Full-Stack Metaverse Development",
      description:
        "Leveraging engines like Unity, Unreal Engine, and WebXR, we build custom environments integrated with smart contracts, NFTs, and decentralized identity systems.",
    },
    {
      number: 5,
      title: "Quality Assurance & Testing",
      description:
        "We conduct performance, usability, and cross-platform testing—validating smart contract integrity, latency thresholds, and device compatibility.",
    },
    {
      number: 6,
      title: "Deployment & Launch",
      description:
        "We deploy your metaverse product on the targeted platform with DevOps pipelines and infrastructure automation, ensuring high availability and zero-friction rollout.",
    },
    {
      number: 7,
      title: "Continuous Support & Optimization",
      description:
        "Post-launch, we provide real-time monitoring, feature enhancements, load scaling, and analytics integration to support user growth and evolving functionality.",
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${styles["main-text"]} ${monsterfont1.className} `}>
            Metaverse Software Development Approach{" "}
          </h2>
          <h2
            className={`${styles["main-text"]} ${monsterfont.className}  text-white `}
          >
            Ensures End to End Efficiency
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-500"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative pl-16 pb-16">
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                <span className={`font-helveticaneue text-black`}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3
                  className={`${monsterfont.className} ${styles["sub-title"]}`}
                >
                  {step.title}
                </h3>
                <p
                  className={`${styles["sub-description"]} font-helveticaneue text-semi-white`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaverseProcess;
