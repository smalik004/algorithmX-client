"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../video/styles.module.css";
import { Montserrat } from "next/font/google";

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

const IntegrationServices = () => {
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
      title: "Enterprise Application Integration (EAI)",
      description:
        "Enable bi-directional data flow across heterogeneous systems using AI-driven integration pipelines. We implement message brokers, service buses, and ETL layers to facilitate real-time sync, event propagation, and system orchestration with minimal latency.",
      image: "/images/eai.webp",
    },
    {
      id: "02",
      title: "API Development & Management",
      description:
        "Design and manage secure RESTful and GraphQL APIs with full lifecycle capabilities—versioning, rate limiting, JWT/OAuth2.0 authentication, and usage analytics. We enable seamless external and internal system communication via API gateways (e.g., Apigee, Kong, AWS API Gateway).",
      image: "/images/api-integration.webp",
    },
    {
      id: "03",
      title: "Middleware Implementation & Optimization",
      description:
        "Deploy enterprise middleware stacks (Kafka, RabbitMQ, ActiveMQ, MuleSoft) to decouple services, support asynchronous messaging, and improve system reliability. We optimize middleware configurations for high throughput, failover resilience, and real-time telemetry.",
      image: "/images/expertise_bd_3.svg",
    },
    {
      id: "04",
      title: "Cloud Integration",
      description:
        "Leverage prebuilt and custom adapters to connect on-prem systems with AWS, Azure, or GCP services. Our solutions support hybrid cloud patterns using secure VPN tunnels, event-driven APIs, and cloud-native message buses to enable scalable, low-latency connectivity.",
      image: "/images/expertise_bd_4.svg",
    },
    {
      id: "05",
      title: "Legacy System Modernization",
      description:
        "Wrap or refactor legacy monoliths using adapter patterns, microservice proxies, and API exposure layers. We apply strangler fig architecture principles to incrementally decompose outdated systems and reduce integration risk while improving maintainability.",
      image: "/images/expertise_bd_5.svg",
    },
    {
      id: "06",
      title: "Data Integration & Management",
      description:
        "Implement real-time data ingestion pipelines with tools like Apache NiFi, Kafka Connect, and Spark Streaming. Our architectures support schema evolution, data quality validation, and governance across distributed data lakes, warehouses, and operational data stores.",
      image: "/images/expertise_bd_6.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h2
            className={`text-white text-[2rem]  leading-[2.2rem] md:text-[3.5rem] md:leading-[3.7rem] tracking-[0.06em] ${monsterfont1.className} mb-4`}
          >
            Transformative Digital Solutions for <br /> Seamless Integration and
            Operational Excellence
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${
                styles["service-card1"]
              } relative group rounded-lg p-7 transition-all duration-700  ${
                styles["box-color"]
              } transform
                ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
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
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </div>
              <p
                className={`text-semi-white font-helveticaneue ${styles["video-description"]}`}
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

export default IntegrationServices;
