"use client";
import React, { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});

const StackCardAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Identifying the Issue",
      description:
        "We begin with a systems-level audit by assessing sensor architecture, network topology, and cloud/edge interfaces. This includes evaluating latency bottlenecks, firmware constraints, and integration limitations across the IoT stack.",
    },
    {
      id: 2,
      title: "Strategic Planning",
      description:
        "We define a technology roadmap incorporating protocol selection (MQTT, HTTP, BLE), edge vs. cloud processing trade-offs, security posture, and resource provisioning across device, network, and cloud layers.",
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "Our engineering team builds and deploys IoT firmware, middleware, and orchestration layers. We integrate device telemetry, implement secure OTA pipelines, and configure data ingestion pipelines using time-series databases and event brokers.",
    },
    {
      id: 4,
      title: "Training & Support",
      description:
        "We deliver technical enablement for devops and product teams—covering device management, data modeling, analytics dashboards, and exception handling, alongside SLAs for long-term support and system optimization.",
    },
    {
      id: 5,
      title: "Continuous Improvement",
      description:
        "We implement observability layers (e.g. Prometheus, Grafana, AWS CloudWatch) and feedback loops to fine-tune system behavior and support iterative ML/AI model updates at the edge or cloud.",
    },
    {
      id: 6,
      title: "Business Integration",
      description:
        "We integrate device outputs into ERP, CRM, and analytics ecosystems via APIs, webhooks, or middleware bridges, ensuring tight alignment between physical-world telemetry and business logic.",
    },
    {
      id: 7,
      title: "Performance Analytics",
      description:
        "Real-time telemetry is enriched, normalized, and visualized through configurable dashboards. We enable anomaly detection, usage trend analysis, and predictive alerts using AI/ML pipelines.",
    },
    {
      id: 8,
      title: "Future Roadmapping",
      description:
        "We define modular upgrade paths by adopting containerization, AI model versioning, or mesh networking as needed, so your IoT infrastructure stays extensible, secure, and competitive over time.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateCardPosition = (index) => {
    if (isMobile) return {}; // No sticky positioning on mobile

    const baseOffset = 150; // Starting position for cards
    const cardHeight = 200; // Approximate height of a card
    const cardGap = 300; // Consistent gap between cards (reduced from 500)
    const scrollThreshold = baseOffset + index * (cardHeight + cardGap);

    // Distance to move up before becoming sticky
    const visibilityThreshold = 150;

    if (scrollPosition < scrollThreshold - visibilityThreshold) {
      // Card is still below viewport, maintain full offset
      return { transform: `translateY(${scrollThreshold - scrollPosition}px)` };
    } else if (scrollPosition < scrollThreshold) {
      // Card is entering viewport but not yet sticky - gradually move up
      const progress = (scrollThreshold - scrollPosition) / visibilityThreshold;
      return { transform: `translateY(${progress * visibilityThreshold}px)` };
    } else {
      // Card is sticky
      return { transform: "translateY(0)" };
    }
  };

  const calculateFirstCardOffset = () => {
    if (isMobile) return {}; // No animation on mobile

    const maxOffset = 80; // Maximum amount the first card moves up
    const startOffset = 600; // When first card starts moving up
    const endOffset = 1400; // When first card reaches maximum up position

    if (scrollPosition < startOffset) {
      return { transform: "translateY(0)" };
    } else if (scrollPosition > endOffset) {
      return { transform: `translateY(-${maxOffset}px)` };
    } else {
      const progress =
        (scrollPosition - startOffset) / (endOffset - startOffset);
      return { transform: `translateY(-${progress * maxOffset}px)` };
    }
  };

  return (
    <div className="bg-black text-white min-h-screen w-full" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6 pt-16">
        {/* Left side content - becomes sticky only on desktop */}
        <div
          className={`md:w-1/2 ${
            !isMobile ? "sticky top-20" : ""
          } h-[calc(100vh-8rem)] md:pr-12 mb-12 md:mb-0 flex items-center`}
        >
          <div className="max-w-lg">
            <h2
              className={`text-[30px] md:text-[50px] md:leading-[60px] ${monsterfont.className}  text-white mb-4`}
            >
              IoT <br /> DEVELOPMENT <br /> Lifecycle
            </h2>
            <p className="text-[16px] leading-[24px] font-[500] font-helveticaneue text-semi-white">
              Our Agile IoT development lifecycle is visualized through an
              interactive scroll-based UI, where fixed content outlines each
              phase while contextual cards dynamically surface. This approach
              brings clarity to every technical milestone without disrupting
              narrative flow.
            </p>
          </div>
        </div>

        {/* Right side with stacking cards */}
        <div className="md:w-1/2 relative md:pt-32 pb-32">
          <div className="pt-16">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative backdrop-blur-md bg-[#000000b3]/70 border border-green-400/30 rounded-3xl p-8 shadow-xl w-full h-[340px] 
    ${index !== cards.length - 1 ? "mb-[40px]" : ""} 
    overflow-hidden flex flex-col justify-center transition-transform duration-300 hover:scale-[1.02]
    ${!isMobile ? "sticky top-[150px]" : ""}`}
                style={calculateCardPosition(index)}
              >
                {/* Enhanced green glow overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00ffcc]/25 via-[#00ffcc]/15 to-transparent opacity-80 pointer-events-none z-0" />

                {/* Brighter green grid texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#00ffcc55_1px,transparent_1px)] bg-[size:22px_22px] opacity-20 pointer-events-none rounded-3xl z-0" />

                <h3 className="text-[24px] leading-[28px]  font-[700] text-white font-helveticaneue mb-4 z-10 relative">
                  {card.title}
                </h3>
                <p className="text-[16px] leading-[20px]  font-[500]  font-helveticaneue text-semi-white z-10 relative">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCardAnimation;
