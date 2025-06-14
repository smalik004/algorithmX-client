"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
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
      title: "TOP DESIGNERS",
      description:
        "AlgorithmX boasts a top-tier talent team of dedicated graphic designers from across the globe renowned for their exceptional creativity and impressive designs.",
      mobileOrder: 1,
    },
    {
      imageSrc: "/images/Fast.png",
      title: "FAST TURNAROUNDS",
      description:
        "We are at your disposal day and night. With our continuous graphic design services, we excel at completing tasks within 12 to 24 hours.",
      mobileOrder: 2,
    },
    {
      imageSrc: "/images/Fully.png",
      title: "FULLY MANAGED",
      description:
        "At our best graphic design company, we offer a reliable, tested, and completely managed system that adjusts to your needs as they expand.",
      mobileOrder: 3,
    },
    {
      imageSrc: "/images/Accurate.png",
      title: "ACCURATE PRICING",
      description:
        "AlgorithmX continues to offer affordable graphic design services as we are 30% cheaper than what other agencies charge or the overall cost of keeping full-time in-house personnel.",
      mobileOrder: 4,
    },
    {
      imageSrc: "/images/Trained.png",
      title: "Trained on brand guidelines",
      description:
        "We're available around the clock, capable of completing tasks within 12 to 24 hours.",
      mobileOrder: 5,
    },
    {
      imageSrc: "/images/Built.png",
      title: "BUILT FOR ENTERPRISE",
      description:
        "As a trustworthy graphic design company, our customized graphic design services are crafted for small and big teams of enterprises that value security and privacy.",
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
              SCALABLE
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2
              className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-14 text-white`}
            >
              HOW WE
            </h2>
            <h2
              className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}
            >
              STAND OUT?
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-6xl w-full">
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
    className={`p-8 transition-transform duration-300 hover:-translate-y-2 text-center h-full flex flex-col justify-between ${
      isHighlighted
        ? `bg-black ${styles["box-border"]}`
        : `bg-[#0f0f0f] ${styles["black-box"]}`
    }
    ${className}`}
  >
    <div className="flex justify-center mb-4">
      <Image
        width={48}
        height={48}
        src={imageSrc}
        alt={title}
        className="w-12 h-12"
      />
    </div>
    <div>
      <h3
        className={`text-white ${styles["scale-title"]} ${monsterfont.className} mb-4`}
      >
        {title}
      </h3>
      <p className={`text-semi-white ${styles["scale-description"]} `}>
        {description}
      </p>
    </div>
  </div>
);
