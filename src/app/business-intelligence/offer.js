"use client";
import { useState } from "react";
import styles from "../crm/style.module.css";
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

const BusinessDevelopment = () => {
  const [activeBox, setActiveBox] = useState("sales");

  const boxes = [
    {
      id: "sales",
      title: "Uncover Hidden Opportunities",
      content:
        "Leverage integrated analytics to extract insights from CRM, ERP, and third-party data. Track sales performance, forecast trends, and identify revenue gaps in real time.",
    },
    {
      id: "accounts",
      title: "Flexible Analysis Formats",
      content:
        "Support for tabular, visual, and predictive analysis. Empower teams to explore data across sources—including social, transactional, and operational datasets—for a complete view of business performance.",
    },
    {
      id: "opportunity",
      title: "Interactive Dashboards",
      content:
        "Deploy role-based dashboards with drill-down capabilities, real-time updates, and predictive widgets—improving decision-making across departments.",
    },
    {
      id: "lead",
      title: "Rapid Deployment & Time-to-Value",
      content:
        "Accelerate ROI with streamlined BI implementations, prebuilt templates, and fast lead-to-insight cycles. Gain competitive advantage through faster campaign execution and lead conversion.",
    },
  ];

  const handleBoxClick = (id) => {
    setActiveBox(activeBox === id ? null : id);
  };

  return (
    <div className="bg-black text-white">
      <div className="container max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center md:sticky md:top-0">
            <h1
              className={`${styles["left-title"]} ${monsterfont1.className} text-left`}
            >
              Benefits
              <br />
              <div className={`${monsterfont.className}`}>
                We Offer as
                <br />
                BI Services
              </div>
            </h1>
            <div className="flex items-center gap-8 mt-6">
              <div className="w-[4px] h-[70px] bg-[#2775ff] rounded-[10px]  "></div>{" "}
              {/* Vertical line */}
              <div
                className={`${styles["development-subtitle"]} ${monsterfont1.className} text-semi-white text-left`}
              >
                Actionable Insights AND Faster Decisions
                <br />
                <div className={`${monsterfont.className} text-semi-white`}>
                  Smarter Growth.
                </div>
              </div>
            </div>
          </div>

          {/* Right Side wrapped in a div with padding */}
          <div className="lg:w-1/2 relative pl-[15px] pr-[15px]">
            <div className="flex flex-col overflow-x-visible">
              {boxes.map((box) => (
                <div key={box.id} className="relative">
                  <button
                    onClick={() => handleBoxClick(box.id)}
                    className={`w-full p-4 ${styles["border1"]} flex justify-between items-center bg-black transition-all`}
                  >
                    <span
                      className={`${styles["right-title1"]} ${monsterfont.className} text-center w-full`}
                    >
                      {box.title}
                    </span>
                    <span className="text-blue-500">⬡</span>
                  </button>

                  {activeBox === box.id && (
                    <div
                      className={`${styles["right-description"]} font-opensans  text-[#9f9f9f]  text-center ${styles["border-"]} min-w-[57px] -ml-[12px] -mr-[12px]`}
                    >
                      {box.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopment;
