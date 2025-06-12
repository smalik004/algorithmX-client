"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../graphics-services/styles.module.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});

export default function Scalable() {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is in view
    );

    if (scalableRef.current) {
      observer.observe(scalableRef.current);
    }

    return () => {
      if (scalableRef.current) {
        observer.unobserve(scalableRef.current);
      }
    };
  }, [isInView]);

  const features = [
    {
      imageSrc: "/images/top.png",
      title: "Productivity at Scale",
      description:
        "We automate high-volume, rules-based tasks—invoice validation, ledger reconciliation, multi-step approvals—using a blend of RPA, ML classification, and decision logic. By decoupling routine execution from human input, we unlock parallel processing, reduce latency, and reallocate your team’s time to innovation, exception handling, and high-leverage analysis.",
      mobileOrder: 1,
    },
    {
      imageSrc: "/images/Fast.png",
      title: "Informed, Real-Time Decisions",
      description:
        "Our automation stack integrates with live analytics pipelines to enable continuous, closed-loop decision-making. Think: anomaly detection triggering automated responses, or next-best-action engines optimizing workflows based on user behavior and system state. The result is a system that not only moves data, but interprets and acts on it—at speed.",
      mobileOrder: 2,
    },
    {
      imageSrc: "/images/Fully.png",
      title: "Operational Cost Reduction",
      description:
        "Automation reduces the need for manual oversight and intervention. With system-driven accuracy, error correction costs go down, resource utilization improves, and you lower TCO (total cost of ownership) across functions.",
      mobileOrder: 3,
    },
    {
      imageSrc: "/images/Accurate.png",
      title: "Pricing Efficiency",
      description:
        "AlgorithmX delivers enterprise-grade automation at 30% lower implementation cost versus traditional consulting or in-house teams. Our modular approach reduces custom build overhead, accelerates time to deployment, and supports phased scaling—so you only invest when and where the ROI is clear.",
      mobileOrder: 4,
    },
    {
      imageSrc: "/images/Trained.png",
      title: "Enhanced Customer Experience",
      description:
        "With routine processes offloaded, your teams can invest in tailored customer engagement. Automated ticket triaging, real-time responses, and proactive support workflows improve both satisfaction and retention.",
      mobileOrder: 5,
    },
    {
      imageSrc: "/images/Built.png",
      title: "Error Reduction & Compliance Assurance",
      description:
        "Our workflows encode business logic and regulatory rules as enforceable code—ensuring process fidelity across runs. Version-controlled bots, audit trails, and validation checkpoints eliminate execution drift and simplify compliance with standards like SOC 2, HIPAA, or PCI-DSS. Less manual oversight, more system integrity.",
      mobileOrder: 6,
    },
  ];

  return (
    <div className="bg-black min-h-screen max-w-full py-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SCALABLE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={scalableRef}
              className={`mb-8 ${
                styles["main-scalable"]
              } transform transition-transform duration-700 ${
                monsterfont.className
              } ${
                isInView
                  ? `${styles["scale-110"]} ${styles["opacity-100"]}`
                  : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
            >
              WHY
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2
              className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-14 text-white`}
            >
              YOUR BUSINESS NEEDS
            </h2>
            <h2
              className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}
            >
              AUTOMATION SERVICES
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-6xl w-full items-stretch">
            {features
              .sort((a, b) => a.mobileOrder - b.mobileOrder)
              .map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex-1 ${
                    isInView
                      ? feature.mobileOrder === 1 || feature.mobileOrder === 4
                        ? styles["animate-slide-in-left1"]
                        : feature.mobileOrder === 3 || feature.mobileOrder === 6
                        ? styles["animate-slide-in-right1"]
                        : ""
                      : ""
                  }`}
                >
                  <FeatureCard
                    imageSrc={feature.imageSrc}
                    title={feature.title}
                    description={feature.description}
                    isHighlighted={index % 2 === 0}
                    className={`md:${
                      feature.mobileOrder === 1
                        ? "col-start-1"
                        : feature.mobileOrder === 2
                        ? "col-start-2"
                        : feature.mobileOrder === 3
                        ? "col-start-3"
                        : feature.mobileOrder === 4
                        ? "col-start-1"
                        : feature.mobileOrder === 5
                        ? "col-start-2"
                        : "col-start-3"
                    }`}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  imageSrc,
  title,
  description,
  isHighlighted,
  className,
}) => (
  <div
    className={`p-8 transition-transform duration-300 hover:-translate-y-2 text-center h-full flex flex-col ${
      isHighlighted
        ? `bg-black ${styles["box-border"]}`
        : `bg-[#0f0f0f] ${styles["black-box"]}`
    }
    ${className}`}
  >
    {/* Fixed top section with image and title */}
    <div className="flex-shrink-0">
      <div className="flex justify-center mb-4">
        <Image
          width={48}
          height={48}
          src={imageSrc}
          alt={title}
          className="w-12 h-12"
        />
      </div>
      <h3
        className={`text-white ${styles["scale-title"]} ${monsterfont.className} mb-4`}
      >
        {title}
      </h3>
    </div>

    {/* Flexible description section */}
    <div className="flex-1 flex items-start">
      <p className={`text-semi-white ${styles["scale-description"]}`}>
        {description}
      </p>
    </div>
  </div>
);
