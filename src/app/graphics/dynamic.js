import React from 'react';
import { Montserrat } from "next/font/google";
import styles from "./styles.module.css";

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

const DesignProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Briefing",
      description: "Given that AlgorithmX is a premier graphic design company in USA that emphasizes process-oriented work, clear communication appeals to us. Initially, we review all project details, including your requirements sent via email, message, or call. Our team of graphic designers engages in conversation to understand and meet your needs providing budget quotes and timelines to align with your expectations."
    },
    {
      number: 2,
      title: "Wireframing",
      description: "In this planning stage of our graphic design services, we present customized wireframes to suit your requirements. These wireframes act as a roadmap assisting us in deciding the layout, strategy, and aesthetic of the design."
    },
    {
      number: 3,
      title: "Designing",
      description: "After our team at AlgorithmX gets all the specifications and finalizes the wireframe, our graphic designers in USA begin design work. Further requirements, suggestions, or last-minute changes are discussed to ensure smooth collaboration leading to the handover from the designers to the project managers offering best web design services for small businesses."
    },
    {
      number: 4,
      title: "Delivery",
      description: "It's time, the delivery is finally arriving! In this phase, we unveil the design draft for your review and input. As part of our amazing graphic design services, we follow a unique cyclic approach to handle your revision requests. Once we are done finalizing everything, we share the completed file with you."
    }
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`${styles["main-text"]} ${monsterfont1.className} `}>Dynamic Process For</h1>
          <h2 className={`${styles["main-text"]} ${monsterfont.className}  text-white `}>
            Creative Design Services
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

export default DesignProcess;
