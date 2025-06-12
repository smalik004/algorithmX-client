"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "../erp-development-services/style.module.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const AIBusinessSection = () => {
  const [isInView, setIsInView] = useState(false);
  const modulifyRef = useRef(null); // Reference for the MODULIFY text

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true); // Set to true when text enters the view
        }
      },
      { threshold: 0.5 } // Trigger animation when 50% of the component is in view
    );

    if (modulifyRef.current) {
      observer.observe(modulifyRef.current);
    }

    return () => {
      if (modulifyRef.current) {
        observer.unobserve(modulifyRef.current);
      }
    };
  }, [isInView]);

  const modules = [
    {
      title: "Your Data’s Talking But You Can’t Hear It",
      description:
        "When insights are buried in dashboards and no one has time to dig them out.",
      imageSrc: "/images/Increased-recognization.png", // Replace with actual image path
    },
    {
      title: "You’re Missing the Window",
      description:
        " If decisions lag because your tools or teams can’t keep up with market shifts.",
      imageSrc: "/images/Growth-and-Profits.png", // Replace with actual image path
    },
    {
      title: "People Are Doing Robot Work",
      description:
        "Manual, repetitive tasks shouldn’t eat into creative or strategic time.",
      imageSrc: "/images/Cost-Reduction.png", // Replace with actual image path
    },
    {
      title: "Mistakes Are Too Expensive",
      description:
        "If human error leads to real losses, AI adds the guardrails you need.",
      imageSrc: "/images/Process-Automation.png", // Replace with actual image path
    },
    {
      title: "Personalization Isn’t Scaling",
      description:
        "You want 1:1 customer experiences, but you’re stuck in one-size-fits-all.",
      imageSrc: "/images/Customer-Engagement.png", // Replace with actual image path
    },
    {
      title: "You’re Falling Behind",
      description:
        "If your competitors are building AI capabilities, you’re already behind the curve.",
      imageSrc: "/images/Stand-out-from-Crowd.png", // Replace with actual image path
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center  relative overflow-hidden">
          {/* Background "MODULIFY" text */}

          {/* Main titles */}
          <div className="relative z-10">
            <h2
              className={`text-[64px] leading-[80px] text-white ${monsterfont.className} mt-16`}
            >
              Is Your Business Ready for AI?
            </h2>
            <h2
              className={`text-[21px] leading-[1.1] text-semi-white ${monsterfont1.className}`}
            >
              You don’t need AI because it’s trendy. You need it when:
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-[7rem]">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              imageSrc={module.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ModuleCard = ({ title, description, imageSrc }) => (
  <div className="pt-6 pl-6 pr-6 bg-black relative">
    <div className="flex items-start gap-4 mb-4">
      <div className="relative w-[50px] h-[50px]">
        {" "}
        {/* fixed height or responsive height */}
        <Image
          fill
          src={imageSrc || "/images/Supply-Chain-Management.png"}
          alt={title}
          className={`object-contain ${style["border-design"]}`}
        />
      </div>

      <div className="flex-1">
        <h3
          className={`${style["modules-title"]} ${monsterfont1.className} text-white`}
        >
          {title}
        </h3>
        <p className={`${style["modules-description"]} text-semi-white`}>
          {description}
        </p>
      </div>
    </div>
    <div
      className={`${style["line"]} absolute bottom-0 left-6 right-6 h-px `}
    ></div>
  </div>
);

export default AIBusinessSection;
