"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../video-services/styles.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});

const DevelopmentProcess = () => {
  const [isInView, setIsInView] = useState(false);
  const craftRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Data Discovery",
      description: "Audit and explore existing data assets",
      color: "bg-green-400",
    },
    {
      number: "02",
      title: "Opportunity Mapping",
      description: "Identify high-impact use cases",
      color: "bg-cyan-400",
    },
    {
      number: "03",
      title: "Technology Roadmap",
      description: "Define architecture and tooling",
      color: "bg-red-400",
    },
    {
      number: "04",
      title: "Project Planning",
      description: "Prioritize initiatives aligned to ROI",
      color: "bg-orange-400",
    },
    {
      number: "05",
      title: "Data Implementation",
      description: "Ingest, clean, and organize datasets",
      color: "bg-yellow-400",
    },
    {
      number: "06",
      title: "Continuous Optimization",
      description: "Measure, refine, and evolve strategy",
      color: "bg-blue-400",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (craftRef.current) {
      observer.observe(craftRef.current);
    }

    return () => {
      if (craftRef.current) {
        observer.unobserve(craftRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="bg-black p-8">
      <div className="max-w-[1100px] mx-auto mt-10">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "CRAFTMANSHIP" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={craftRef}
              className={`mb-8 ${styles["main-craft"]} ${
                monsterfont.className
              } font-bold text-gray-600/20 transform transition-transform duration-700 ${
                isInView ? "scale-110 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ top: "-20px" }}
            >
              STEPS
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2
              className={`${styles["submain-craft"]} ${monsterfont2.className} mt-14 text-white`}
            >
              TO A SMARTER
            </h2>
            <h2
              className={`${styles["submain-craft"]} ${monsterfont.className} text-white`}
            >
              DATA-DRIVEN STRATEGY
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex-1">
              {/* Desktop slanted line container */}
              <div className="absolute top-0 right-0 h-full w-2 md:block hidden">
                {/* Top slanted section */}
                <div
                  className={`${step.color} absolute top-0 right-0 w-full h-[30%]`}
                  style={{
                    transform: "skew(0deg, 50deg)",
                    transformOrigin: "top right",
                  }}
                />
                {/* Middle straight section */}
                <div
                  className={`${step.color} absolute top-[25%] right-0 w-full h-[50%]`}
                />
                {/* Bottom slanted section */}
                <div
                  className={`${step.color} absolute bottom-0 right-0 w-full h-[30%]`}
                  style={{
                    transform: "skew(0deg, -50deg)",
                    transformOrigin: "bottom right",
                  }}
                />
              </div>

              {/* Mobile slanted line */}
              <div className="md:hidden block relative h-16 ">
                {/* Left slanted section */}
                <div
                  className={`${step.color} absolute left-0 top-[250px] w-[30%] h-1`}
                  style={{
                    transform: "skew(50deg, 0deg)",
                    transformOrigin: "left center",
                  }}
                />
                {/* Middle straight section */}
                <div
                  className={`${step.color} absolute left-[25%] top-[250px] w-[50%] h-1`}
                />
                {/* Right slanted section */}
                <div
                  className={`${step.color} absolute right-0 top-[250px] w-[30%] h-1`}
                  style={{
                    transform: "skew(-50deg, 0deg)",
                    transformOrigin: "right center",
                  }}
                />
              </div>

              <div className="p-4 mt-2 md:mt-0">
                <div className="flex items-center mb-2">
                  <span
                    className={`transform rotate-90 ${monsterfont1.className} ${styles["step"]} mr-2`}
                  >
                    STEP
                  </span>
                  <span
                    className={`${styles["number1"]} ${monsterfont.className} text-white`}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className={`text-xl font-medium mb-2 ${
                    monsterfont1.className
                  } ${styles["craft-title"]} ml-[30px] ${
                    index === 0
                      ? "text-green-400"
                      : index === 1
                      ? "text-cyan-400"
                      : index === 2
                      ? "text-red-400"
                      : index === 3
                      ? "text-orange-400"
                      : index === 4
                      ? "text-yellow-400"
                      : "text-blue-400"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-white font-helveticaneue ${styles["craft-description"]} ml-[30px]`}
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

export default DevelopmentProcess;
