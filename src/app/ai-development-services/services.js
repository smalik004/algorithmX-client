"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../video-services/styles.module.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});

const AIServices = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger animation when 50% of the component is in view
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

  const services = [
    {
      id: "01",
      title: "AI-Powered Automation",
      description: [
        "Cut down on repetitive tasks and reduce manual overhead",
        "Improve accuracy and lower costs",
        "Free up resources for strategic work",
      ],
      image: "/images/Corporate.png",
    },
    {
      id: "02",
      title: "Agentic AI",
      description: [
        "Enable systems to act on your behalf",
        "Reduce decision friction and human bottlenecks",
        "Build agility into everyday operations",
      ],
      image: "/images/TVC.png",
    },
    {
      id: "03",
      title: "Predictive Analytics & Insights",
      description: [
        "Forecast trends and optimize inventory",
        "Make faster, better-informed choices",
        "Preempt risks and customer churn",
      ],
      image: "/images/Music-.png",
    },
    {
      id: "04",
      title: "Natural Language Processing",
      description: [
        "Power smarter conversations with users",
        "Extract meaning from messy, unstructured text.",
        "Enhance support and search experiences.",
      ],
      image: "/images/Infographic.png",
    },
    {
      id: "05",
      title: "Computer Vision & Image Recognition",
      description: [
        "Automate inspection, tagging, and categorization",
        "Enforce quality at scale",
        "Build engaging visual tools.",
      ],
      image: "/images/Product.png",
    },
    {
      id: "06",
      title: "AI-Driven Decision-Making",
      description: [
        "Flag and fix problems before they escalate",
        "Improve uptime, reliability, and resilience",
        "Let your systems tell you what to do next",
      ],
      image: "/images/Testimonial.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h2
            className={`text-white ${styles["video"]} ${monsterfont1.className} mb-4`}
          >
            Future-Proof Your Business with Next-Gen AI Solutions.
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <h2
            className={`text-semi-white ${styles["video-subtitle"]} ${monsterfont2.className} max-w-4xl mx-auto`}
          >
            Turn inefficiency into opportunity, data into direction, and
            ambition into action. Talk to our AI team and explore what’s
            possible today.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${
                styles["service-card1"]
              } relative group rounded-lg p-7 transition-all duration-700 ${
                styles["box-color"]
              } transform flex flex-col
              ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
              style={{
                transitionDelay: `${index * 150}ms`,
                height: "100%",
              }}
            >
              <div
                className={`absolute top-4 right-4 text-blue-500 ${styles["number"]} `}
              >
                {service.id}
              </div>

              <h3
                className={`${styles["video-title"]} text-white  ${monsterfont3.className}  transition-colors duration-300`}
              >
                {service.title}
              </h3>
              <div className="mb-6">
                <Image
                  width={48}
                  height={48}
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <ul
                className={`text-semi-white font-helveticaneue ${styles["video-description"]} list-disc pl-5`}
              >
                {service.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIServices;
