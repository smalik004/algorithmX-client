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

const CloudDesignProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Strategic Cloud Roadmap",
      description:
        "Align business goals with a tailored multi-cloud or hybrid strategy designed to maximize uptime, scalability, and performance.​",
    },
    {
      number: 2,
      title: "Seamless Cloud Migration",
      description:
        "Accelerate cloud adoption through structured, low-risk migrations and data transfer with rollback-ready safeguards.",
    },
    {
      number: 3,
      title: "Agile Infrastructure Management",
      description:
        "Adopt infrastructure as code (IaC), auto-scaling, and policy-driven configuration to enable rapid iteration and operational agility.​",
    },
    {
      number: 4,
      title: "Continuous Integration and Deployment",
      description:
        "Automate deployment pipelines for faster, safer software releases. We integrate testing, monitoring, and rollback into every build.",
    },
    {
      number: 5,
      title: "Robust Security and Compliance",
      description:
        "Integrate security controls into the DevOps lifecycle (DevSecOps), ensuring policy enforcement, auditability, and runtime protection.",
    },
    {
      number: 6,
      title: "Scalability and Cost Optimization",
      description:
        "Enable dynamic resource provisioning, spot instance utilization, and autoscaling—keeping performance high while reducing cloud spend.",
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${styles["main-text"]} ${monsterfont1.className} `}>
            Why Your Business Needs{" "}
          </h2>
          <h2
            className={`${styles["main-text"]} ${monsterfont.className}  text-white `}
          >
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

export default CloudDesignProcess;
