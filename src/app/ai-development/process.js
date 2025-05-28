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

const AIDesignProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Business Analysis",
      description: "We begin by analyzing your business data and industry landscape to uncover AI opportunities. Collaborating with your team, we identify challenges AI can address, from efficiency to customer experience. Based on this, we map use cases and set clear objectives. Finally, we create a structured roadmap with milestones, timelines, and resource planning, ensuring a seamless process."
    },
    {
      number: 2,
      title: "Design & Prototype",
      description: "Our AI app developers and designers collaborate to finalize the feature set based on defined use cases. We carefully select the most suitable AI technologies and tools to meet project requirements. A working prototype is then developed, allowing you to visualize and interact with the concept. Finally, rigorous user testing and feedback help refine and enhance the design and functionality before full-scale development."
    },
    {
      number: 3,
      title: "Proof of Concept (PoC)",
      description: "During the PoC phase, we train and fine-tune AI algorithms using relevant datasets, ensuring optimal performance. Rigorous testing validates that the algorithms meet predefined criteria and deliver expected results. Additionally, we assess scalability to ensure the solution can handle increased data loads and user demands efficiently."
    },
    {
      number: 4,
      title: "Implementation and Deployment",
      description: "We proceed with full-scale AI application development, following best practices and ensuring seamless machine learning model integration into the architecture. Rigorous quality assurance identifies and resolves any issues, and finally, the AI application is deployed in the desired environment, whether on-premises, in the cloud, or on a specific platform."
    },
    {
        number: 5,
        title: "Monitoring & Optimization",
        description: "We implement monitoring tools to track AI system performance in real time, enabling continuous feedback loops for necessary adjustments and improvements. This ensures the AI application remains effective and aligned with business goals, while scalable architecture allows for seamless growth and adaptation to evolving requirements."
    },
    {
        number: 6,
        title: "Maintenance and Support",
        description: "We provide ongoing maintenance and updates to keep the AI application secure and up-to-date, along with dedicated technical support to address any post-deployment issues. Continuous optimization ensures the AI solution adapts to evolving business needs and emerging technologies for sustained efficiency and performance."
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`${styles["main-text"]} ${monsterfont1.className} `}>Our Comprehensive AI</h1>
          <h2 className={`${styles["main-text"]} ${monsterfont.className}  text-white `}>
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

export default AIDesignProcess;
