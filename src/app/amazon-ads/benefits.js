"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../video-services/styles.module.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});

const AmazonServices = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
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
      title: "Enhanced Product Visibility",
      description:
        "Boost your product visibility on Amazon’s massive marketplace. Our Amazon ad management strategies ensure your listings get top placement in search results and product detail pages, increasing traffic and driving more sales opportunities.",
      image: "/images/Enhanced-Product-Visibility.png",
    },
    {
      id: "02",
      title: "Increased Sales and Conversions",
      description:
        "Turn shoppers into buyers. We optimize your campaigns to reach customers who are actively searching for products like yours—connecting you with high-intent shoppers.",
      image: "/images/Increased-Sales-and-Conversions.png",
    },
    {
      id: "03",
      title: "Enhanced Brand Awareness",
      description:
        "Grow your brand’s presence. We strategically position your ads and create impactful content, we help increase brand recognition and establish a deeper connection with potential customers.",
      image: "/images/Enhanced-Brand-Awareness.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto" ref={scalableRef}>
        <div className="text-center mb-8 md:mb-16">
          <h1
            className={`text-white text-[46px] leading-[52px] md:text-[64px] md:leading-[68px] ${monsterfont2.className} mb-4`}
          >
            Benefits of Amazon Ads Management
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${
                styles["service-card1"]
              } relative group rounded-lg p-7 transition-all duration-700   ${
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
              <h3
                className={`text-[18px] leading-[1.1] font-helveticaneue font-[400] text-white  transition-colors duration-300`}
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
              <p
                className={`text-semi-white font-[300] text-[13px] leading-[2] font-helveticaneue transition-colors duration-300`}
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

export default AmazonServices;
