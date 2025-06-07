"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../front-end/style.module.css";
import { Montserrat } from "next/font/google";

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

const services = [
  {
    title: "AI Strategy & Consulting",
    description:
      "We identify high-ROI AI opportunities through technical and business assessments, then deliver roadmaps grounded in data readiness, integration feasibility, and business value. Our focus: models that solve real problems and scale in production.",
    image: "images/User.png",
    alt: "Consultation Icon",
  },
  {
    title: "Generative AI Development",
    description:
      "We build domain-specific generative systems using LLMs and diffusion models—optimized for tasks like summarization, data synthesis, content creation, and copilots. Guardrails ensure outputs are safe, grounded, and enterprise-ready.",
    image: "images/UX.png",
    alt: "Design Icon",
  },
  {
    title: "Prompt Engineering",
    description:
      "We design high-performance prompts tailored to your LLM stack, using techniques like few-shot learning, RAG, and function calling. Every prompt is tested and refined to deliver consistent, high-precision outputs at scale.",
    image: "images/Front.png",
    alt: "Custom Development Icon",
  },
  {
    title: "Adaptive AI Solutions",
    description:
      "Our models learn continuously from live data, adapting to new patterns via reinforcement learning, online updates, and human-in-the-loop feedback. Ideal for use cases where static models degrade, like personalization and anomaly detection.",
    image: "images/Responsive.png",
    alt: "Testing Icon",
  },
  {
    title: "Machine Learning",
    description:
      "We build and deploy ML models for classification, regression, and forecasting—containerized, CI/CD-enabled, and monitored in production. Governance, drift tracking, and explainability are built in by design.",
    image: "images/HTML.png",
    alt: "Deployment Icon",
  },
  {
    title: "Conversational AI Development",
    description:
      "We create NLP-driven agents that understand context, manage dialogue, and integrate with real-time systems. From multilingual bots to custom LLM interfaces, our solutions are built for accuracy, scale, and brand fit.",
    image: "images/Performance.png",
    alt: "Support Icon",
  },
];

const AIServicesGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const allInOneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (allInOneRef.current) {
      observer.observe(allInOneRef.current);
    }

    return () => {
      if (allInOneRef.current) {
        observer.unobserve(allInOneRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "ALL-IN-ONE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={allInOneRef}
              className={`mb-8 ${
                styles["main-allinone"]
              } transform transition-transform duration-700 ${
                monsterfont.className
              } ${
                isInView
                  ? `${styles["scale-110"]} ${styles["opacity-100"]}`
                  : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
            >
              SERVICES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2
              className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}
            >
              AI
            </h2>
            <h2
              className={` ${styles["multi-subtitle"]} ${monsterfont.className} text-white`}
            >
              DEVELOPMENT SERVICES
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles["card"]} hover:bg-[#1c1c1e]  hover:border-[#1c1c1e;] border border-zinc-800 group transition-colors duration-1000 ease-in-out `}
            >
              <img
                src={service.image}
                alt={service.alt}
                className={`${styles["image1"]} object-contain `}
              />
              <h3
                className={`${styles["card-title"]} font-helveticaneue mb-4 transition-colors duration-300 `}
              >
                {service.title}
              </h3>
              <p
                className={`${styles["card-description"]} font-helveticaneue transition-colors duration-300 `}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIServicesGrid;
