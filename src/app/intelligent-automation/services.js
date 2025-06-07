import React from "react";
import styles from "../shopify/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});

const IntelligentServices = () => {
  const services = [
    {
      iconSrc: "images/bd_1.svg",
      title: "Process Discovery & Automation Roadmap",
      description:
        "We use process mining, task capture, and stakeholder interviews to identify inefficiencies, score automation potential, and define a data-backed automation roadmap tailored to your systems, tools, and objectives.",
      borderColor: "border-red-500",
      glowColor: styles.shadowred,
    },
    {
      iconSrc: "images/bd_2.svg",
      title: "Digital Transformation Consulting",
      description:
        "Our domain experts architect intelligent automation ecosystems—combining RPA, AI/ML, and low-code platforms—to solve high-impact problems. We advise on tooling, architecture, governance, and change management to drive adoption.",
      borderColor: "border-yellow-500",
      glowColor: styles.shadowyellow,
    },
    {
      iconSrc: "images/bd_3.svg",
      title: "Citizen Development at Scale",
      description:
        "We enable business users to co-create automations with pre-approved tools and guardrails. Through RBAC (role-based access control) and automation Centers of Excellence (CoEs), we democratize innovation while maintaining system integrity.",
      borderColor: "border-white-500",
      glowColor: styles.shadowblue,
    },
    {
      iconSrc: "images/bd_4.svg",
      title: "Intelligent Workflow Automation",
      description:
        "We connect siloed systems like ERP, CRM, ticketing, and document storage into unified, automated workflows. With real-time data flow and embedded logic, we reduce delays, eliminate redundant handoffs, and keep processes moving with accuracy and context.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowgreen,
    },
    {
      iconSrc: "images/bd_5.svg",
      title: "Intelligent Document Processing (IDP)",
      description:
        "Using OCR, NLP, and layout-aware AI models, we extract structured data from contracts, invoices, forms, and PDFs. IDP drastically reduces manual entry, enables real-time validation, and feeds clean data directly into downstream systems.",
      borderColor: "border-green-500",
      glowColor: styles.shadowpink,
    },
    {
      iconSrc: "images/bd_6.svg",
      title: "Rules-Based Bots",
      description:
        "We build high-precision bots to automate structured, rules-based tasks, whether it's order validation, claims processing, compliance checks, or employee onboarding. These bots are designed for performance, auditability, and minimal supervision.",
      borderColor: "border-pink-500",
      glowColor: styles.shadowlightgreen,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className={`${styles["offering-text"]} ${monsterfont1.className} mb-2 `}
          >
            {" "}
            OFFERINGS
          </p>
          <h2
            className={`text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] tracking-[0.06em] ${monsterfont2.className} text-white mb-2`}
          >
            INTELLIGENT AUTOMATION
          </h2>
          <h2
            className={`${styles["development-text"]} ${monsterfont.className} mb-2`}
          >
            SERVICES
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start gap-4 ${styles["pad"]}
                         border ${service.borderColor} rounded-2xl bg-black
                         shadow-lg ${service.glowColor}
                         transition-all duration-300`}
            >
              <div className="flex-shrink-0">
                <img
                  src={service.iconSrc}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`${styles["development-title"]} font-helveticaneue text-white mb-3`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${styles["development-description"]} font-helveticaneue text-semi-white`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntelligentServices;
