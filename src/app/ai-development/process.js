import React from "react";
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

const AIDesignProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Business Analysis",
      description:
        "We start by understanding your pain points, objectives, and data landscape. Together, we identify practical AI use cases, prioritize initiatives, and build a roadmap that’s aligned with outcomes.",
    },
    {
      number: 2,
      title: "Design & Prototype",
      description:
        "We define features, choose the right models, and create interactive prototypes. Early feedback loops ensure the system looks and behaves the way you need, long before you go live.",
    },
    {
      number: 3,
      title: "Proof of Concept (PoC)",
      description:
        "We train initial models, test assumptions, and prove value early. Our focus: performance, scalability, and confidence before you commit to full development.",
    },
    {
      number: 4,
      title: "Implementation and Deployment",
      description:
        "We build the full application and integrate it into your environment—cloud, on-prem, or hybrid. Testing is rigorous. Deployment is seamless.",
    },
    {
      number: 5,
      title: "Monitoring & Optimization",
      description:
        "Live systems need constant calibration. We track performance in real-time, optimize continuously, and make sure your AI stays aligned with evolving business goals.",
    },
    {
      number: 6,
      title: "Maintenance and Support",
      description:
        "Post-launch, we don’t disappear. From updates to troubleshooting to enhancement, we support your AI stack like a long-term partner—not a vendor.",
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${styles["main-text"]} ${monsterfont1.className} `}>
            Our Comprehensive AI
          </h2>
          <h2
            className={`${styles["main-text"]} ${monsterfont.className}  text-white `}
          >
            Software Development Process
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

export default AIDesignProcess;
