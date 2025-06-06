"use client";
import React, { useState } from "react";
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

const BiConsultingPage = () => {
  const [activeService, setActiveService] = useState(4);

  const services = [
    { id: 1, title: "01. BI Consulting" },
    { id: 2, title: "02. Enterprise Business Intelligence" },
    { id: 3, title: "03. BI Application Implementation" },
    { id: 4, title: "04. BI Support & Maintenance" },
  ];

  const serviceDescriptions = {
    1: {
      title: "BI Consulting",
      description:
        "We assess data infrastructure, define BI architecture, and recommend tools aligned to business goals. Our strategy covers ETL/ELT design, governance, and platform readiness.",
    },
    2: {
      title: "Enterprise Business Intelligence",
      description:
        "We build centralized BI frameworks with governed data models, real-time dashboards, and unified KPIs—integrated across departments for cross-functional visibility.",
    },
    3: {
      title: "BI Application Implementation",
      description:
        "Deploy tools like Power BI, Tableau, or Looker with full integration to data warehouses, ERP, and CRM. We develop semantic layers, interactive dashboards, and secure, scalable reports.",
    },
    4: {
      title: "BI Support & Maintenance",
      description:
        "Ongoing support for ETL pipelines, report tuning, and performance optimization. We minimize downtime and TCO with proactive monitoring and SLA-based maintenance",
    },
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Heading and Description */}
      <div className="max-w-[1200px] text-center mb-8 px-4">
        <h2
          className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}
        >
          Business Intelligence Services
        </h2>
        <p
          className={`text-[20px] leading-[24px] ${monsterfont1.className}  text-semi-white `}
        >
          AlgorithmX delivers full-spectrum BI solutions—strategy,
          implementation, and support—designed to turn raw data into real-time,
          actionable insights. Our services optimize decision-making,
          scalability, and performance across enterprise systems.
        </p>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-2xl">
        {/* Services Navigation - Inline on Mobile, Full Width on Desktop */}
        <div className="w-full md:w-1/2  overflow-x-auto">
          <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 md:p-8 p-4 text-center overflow-x-auto">
            {services.map((service, index) => (
              <div key={service.id} className="relative">
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`inline-block md:w-full p-4 rounded-lg transition-all duration-300 text-left text-[18px] font-helveticaneue font-[600] 
                  ${
                    activeService === service.id
                      ? " text-white "
                      : "text-semi-white hover:text-white/60"
                  }`}
                >
                  {service.title}
                </button>
                {/* Dividing line - hidden on mobile */}
                {index < services.length - 1 && (
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[1px] bg-green-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area with Blue Border */}
        <div className="w-full md:flex-1 bg-black p-6 md:p-12  md:rounded-bl-none">
          <div className="bg-black w-full">
            <div className="flex items-start space-x-4 mb-6">
              <div>
                <h3 className="text-[24px] leading-[26px] font-helveticaneue text-white">
                  {serviceDescriptions[activeService].title}
                </h3>
              </div>
            </div>
            <p className="text-semii-white text-[16px] font-helveticaneue leading-relaxed">
              {serviceDescriptions[activeService].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiConsultingPage;
