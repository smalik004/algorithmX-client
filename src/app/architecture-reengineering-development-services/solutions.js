"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../app-development/style.module.css";
import style from "../android-app-development-services/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});

// Adding the bold font for MULTIFACETED text
const monsterfont700 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "800",
  fallback: ["sans-serif"],
});

const AiOptmizationServices = () => {
  const [isInView, setIsInView] = useState(false);
  const multifacetedRef = useRef(null);

  const services = [
    {
      title: "Smart Architectural Solutions",
      description:
        "We craft future-ready blueprints using scalable patterns like microservices, API-first architecture, and cloud-native infrastructure. Every design aligns technical capability with business growth.",
      borderColor: styles.border1,
    },
    {
      title: "Legacy System Modernization​",
      description:
        "We assess, refactor, and upgrade legacy systems with minimal disruption. Our approach extends system life, reduces tech debt, and prepares platforms for evolving workloads.",
      borderColor: styles.border1,
    },
    {
      title: "Cloud Migration & Optimization",
      description:
        "We enable secure, low-latency migration to AWS, Azure, or GCP—optimizing workloads post-migration for cost, availability, and resource efficiency.",
      borderColor: styles.border2,
    },
    {
      title: "Performance Engineering​",
      description:
        "We tune system architecture and application logic to improve throughput, reduce latency, and optimize resource utilization across large-scale deployments.",
      borderColor: styles.border3,
    },
    {
      title: "Scalability & Reliability​",
      description:
        "We build architectures that scale horizontally and maintain high availability through resilient design, load balancing, and failover planning.​",
      borderColor: styles.border4,
    },
    {
      title: "Security by Design​",
      description:
        "Security is embedded into architecture—identity management, data encryption, secure APIs, and audit trails—aligned with modern compliance standards.",
      borderColor: styles.border5,
    },
    {
      title: "Cloud Management & Monitoring​",
      description:
        "We provide continuous cloud ops support, including usage monitoring, autoscaling, cost governance, and infrastructure optimization.​",
      borderColor: styles.border2,
    },
    {
      title: "ROI-Driven Efficiency",
      description:
        "Our solutions are built for business impact—balancing modernization with measurable ROI, from reduced maintenance costs to faster release cycles.",
      borderColor: styles.border3,
    },
  ];

  // Refs for animation
  const boxRefs = useRef([]);

  // Set up intersection observer for animation for service boxes
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when box comes into view
          entry.target.classList.remove("translate-y-20", "opacity-0");
          entry.target.classList.add("translate-y-0", "opacity-100");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    boxRefs.current.forEach((box) => {
      if (box) {
        observer.observe(box);
      }
    });

    return () => {
      boxRefs.current.forEach((box) => {
        if (box) {
          observer.unobserve(box);
        }
      });
    };
  }, []);

  // Set up intersection observer for MULTIFACETED text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (multifacetedRef.current) {
      observer.observe(multifacetedRef.current);
    }

    return () => {
      if (multifacetedRef.current) {
        observer.unobserve(multifacetedRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="bg-black text-white min-h-screen p-8 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-16 pt-4 md:pt-8 relative">
          {/* Background "MULTIFACETED" text with zoom-in effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              ref={multifacetedRef}
              className={`${style["multi-title"]} ${
                monsterfont700.className
              } text-gray-600/20 select-none transform transition-transform duration-700 ${
                isInView ? "scale-110 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              SOLUTIONS
            </span>
          </div>
          {/* Main titles with relative positioning to appear above the background text */}
          <div className="relative z-10 mt-[50px]">
            <h2
              className={` ${style["multi-subtitle"]} ${monsterfont1.className} text-white`}
            >
              Driving Scalable Transformation
            </h2>
            <h2
              className={` ${style["multi-subtitle"]} ${monsterfont1.className} text-white`}
            >
              Through AI Architecture
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)}
              className={`relative ${service.borderColor}  p-6 md:p-[30px] rounded bg-black translate-y-20 opacity-0 transition-all duration-700 ease-out`}
            >
              <div className="absolute top-4 right-4 md:top-8 md:right-8 w-20 h-20 md:w-32 md:h-32 overflow-hidden">
                <div
                  className="w-full h-[70%] flex items-center justify-center opacity-50"
                  style={{
                    backgroundImage: "url('/images/faq_15_icon.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                />
              </div>
              <h3
                className={`text-[16px]  leading=[1.4] mb-[10px] ${monsterfont.className} text-center  `}
              >
                {service.title}
              </h3>
              <p className="text-[16px]  leading=[1.4] text-[#83779e] text-helveticaneue text-center ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiOptmizationServices;
