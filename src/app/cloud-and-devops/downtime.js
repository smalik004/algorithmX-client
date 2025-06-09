"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../front-end/style.module.css";
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

const services = [
  {
    title: "Cloud Transformation​​​​",
    description:
      "Modernize legacy systems with cloud-native architectures, containerization, and workload replatforming for scalability and agility",
    image: "/images/cloud-.gif",
    alt: "Consultation Icon",
  },
  {
    title: "Data Security",
    description:
      "Implement zero-trust policies, encryption, and real-time threat monitoring. Ensure compliance with SOC 2, HIPAA, and GDPR.",
    image: "/images/UX.png",
    alt: "Design Icon",
  },
  {
    title: "Cloud Architecture Design",
    description:
      "Design high-availability, autoscaling systems using IaC (Terraform, CloudFormation) with modular, resilient infrastructure patterns",
    image: "/images/Front.png",
    alt: "Custom Development Icon",
  },
  {
    title: "Cloud Migration",
    description:
      "Execute secure, low-downtime migrations via lift-and-shift, replatforming, or rebuilds using tools like Migration Hub and Azure Migrate.",
    image: "/images/Responsive.png",
    alt: "Testing Icon",
  },
  {
    title: "Cloud Capacity Planning and TCO Calculation",
    description:
      "Forecast demand using telemetry and modeling. Optimize spend with detailed TCO analysis across compute, storage, and licensing.",
    image: "/images/HTML.png",
    alt: "Deployment Icon",
  },
  {
    title: "Managed Cloud Services",
    description:
      "Full lifecycle cloud ops: CI/CD orchestration, observability, SRE practices, disaster recovery, and multi-cloud infrastructure support.",
    image: "/images/Performance.png",
    alt: "Support Icon",
  },
];

const CloudGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const allInOneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
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
              SOLUTIONS
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-14">
            <h2
              className={` ${styles["multi-subtitle"]} ${monsterfont1.className} text-white`}
            >
              Reduce Downtimes &
            </h2>
            <h2
              className={` ${styles["multi-subtitle"]} ${monsterfont.className} text-white`}
            >
              Streamline Workflows
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles["card"]} hover:bg-[#1c1c1e]  hover:border-[#1c1c1e;] border border-zinc-800 group transition-colors duration-1000 ease-in-out `}
            >
              <Image
                width={32}
                height={32}
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

export default CloudGrid;
