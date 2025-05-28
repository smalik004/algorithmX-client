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

const CloudDesignProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Strategic Cloud Roadmap",
      description: "Gain a competitive edge with our expert cloud consulting services as we develop a tailored roadmap to align your business objectives with the right cloud solutions, ensuring optimal efficiency and scalability.​"
    },
    {
      number: 2,
      title: "Seamless Cloud Migration",
      description: "Our specialists streamline the migration process, ensuring a seamless transition of your applications and data to the cloud, minimizing downtime, and maximizing productivity."
    },
    {
      number: 3,
      title: "Agile Infrastructure Management",
      description: "Benefit from our comprehensive solutions, enabling agile infrastructure management and automation, optimizing resource allocation, and enhancing overall operational efficiency.​"
    },
    {
      number: 4,
      title: "Continuous Integration and Deployment",
      description: "Our expertise enables seamless integration and deployment of software updates and enhancements, facilitating faster time-to-market and improved customer satisfaction."
    },
    {
        number: 5,
        title: "Robust Security and Compliance",
        description: "Safeguard your business's critical data and ensure compliance with industry regulations through our expert cloud consulting and DevOps solutions, implementing robust security measures and monitoring capabilities."
    },
    {
        number: 6,
        title: "Scalability and Cost Optimization",
        description: "Leverage the scalability of cloud infrastructure and optimize costs by partnering with us for cloud consulting and DevOps solutions, allowing your business to scale effortlessly while optimizing resource utilization."
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`${styles["main-text"]} ${monsterfont1.className} `}>Why Your Business Needs </h1>
          <h2 className={`${styles["main-text"]} ${monsterfont.className}  text-white `}>
          Cloud Consulting and DevOps​
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

export default CloudDesignProcess;
