"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faClipboard,
  faCogs,
  faChartBar,
  faLaptop,
  faRocket,
  faMobileAlt,
  faWrench,
  faTasks,
  faLifeRing,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../crm-development-services/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});

const crmServices = [
  {
    id: 1,
    title: "Quality Assurance (QA)",
    icon: (
      <FontAwesomeIcon
        icon={faTrophy}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content: `We integrate AI and ML algorithms into the QA lifecycle to enhance defect prediction, anomaly detection, and test optimization. Our continuous learning models adapt to codebase changes, while AI-powered risk-based testing prioritizes coverage where it matters most, minimizing false positives and reducing regression testing overhead.`,
  },
  {
    id: 2,
    title: "Automation Testing",
    icon: (
      <FontAwesomeIcon
        icon={faTasks}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content:
      "We implement cross-platform automation using Selenium WebDriver, Appium, TestNG, Cypress, and JMeter, supporting UI, API, and performance layers. CI/CD integration via Jenkins, GitLab CI, and GitHub Actions ensures parallel test execution, real-time feedback, and test artifact traceability. Automation frameworks are modular, maintainable, and version-controlled for long-term scalability.",
  },
  {
    id: 3,
    title: "Center of Excellence (COE) Setup",
    icon: (
      <FontAwesomeIcon
        icon={faLifeRing}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content:
      "We establish QA COEs with shared repositories, reusable test libraries, governance models, and KPI-based dashboards. Our COEs enforce test strategy standardization across projects and align tooling with enterprise DevOps workflows—centralizing test data management, environment provisioning, and results reporting.",
  },
  {
    id: 4,
    title: "API Testing",
    icon: (
      <FontAwesomeIcon
        icon={faTasks}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content:
      "We validate RESTful and GraphQL APIs using tools like Postman, RestAssured, and Swagger/OpenAPI schemas. Automated test suites cover functional, contract, load, and security scenarios. We implement mocking/stubbing, rate-limit testing, and JWT/OAuth2 validation to ensure system interoperability and robustness under real-world conditions.",
  },
  {
    id: 5,
    title: "Performance Testing",
    icon: (
      <FontAwesomeIcon
        icon={faLifeRing}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content:
      "Using tools like JMeter, Gatling, and Locust, we simulate concurrent users, peak traffic, and stress scenarios to analyze response time, throughput, and system resource utilization. Performance bottlenecks are traced through APM tools (e.g., New Relic, Dynatrace), with insights fed back into capacity planning and architecture optimization.",
  },
  {
    id: 6,
    title: "Accessibility Testing",
    icon: (
      <FontAwesomeIcon
        icon={faTasks}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content:
      "We ensure WCAG 2.1, ADA, and Section 508 compliance via automated audits (Axe, Lighthouse, Pa11y) and manual screen reader validation (NVDA, JAWS). Our testing spans semantic HTML, ARIA roles, tab order, contrast ratios, and keyboard navigation. Reports include remediation recommendations and impact severity scoring.",
  },
  {
    id: 7,
    title: "Sustenance & Support",
    icon: (
      <FontAwesomeIcon
        icon={faLifeRing}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content:
      "Our QA sustenance services include test suite maintenance, environment monitoring, and root-cause defect triage. We provide SLA-backed post-release validation, log analysis, and automated alerting through observability platforms like ELK, Prometheus, and Datadog. This ensures continuous stability in production and staging environments.",
  },
  {
    id: 8,
    title: "Unit Test Case Development",
    icon: (
      <FontAwesomeIcon
        icon={faTasks}
        style={{ width: "14.4px", height: "12.8px" }}
      />
    ),
    content:
      "We write unit tests using frameworks like JUnit, NUnit, xUnit, Mocha, and Jest, with coverage metrics tracked via tools like JaCoCo and Istanbul. Tests are integrated into pre-commit hooks and CI pipelines, promoting early detection of regressions and faster MTTR (mean time to resolution). Emphasis is placed on mocking, assertions, and code path validation.",
  },
];

const TestingServices = () => {
  const [hoveredService, setHoveredService] = useState(crmServices[0]);
  const [activeService, setActiveService] = useState(crmServices[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentHoveredId, setCurrentHoveredId] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleServiceInteraction = (service) => {
    if (isMobile) {
      setActiveService(service);
      setHoveredService(service);
    } else {
      setHoveredService(service);
      setActiveService(service);
      setCurrentHoveredId(service.id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setCurrentHoveredId(null);
    }
  };

  const isIconGreen = (serviceId) => {
    if (isMobile) {
      return activeService.id === serviceId;
    }
    return (
      currentHoveredId === serviceId ||
      (!currentHoveredId && activeService.id === serviceId)
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1
        className={`${styles["services-text"]} ${monsterfont.className} mb-8 md:mb-16 text-center text-3xl`}
      >
        Testing & QA Solutions
      </h1>

      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
        <div
          className={`
          ${
            isMobile
              ? "overflow-x-auto"
              : "md:w-1/3 md:h-[300px] md:overflow-y-auto"
          }
          md:p-6 ${!isMobile && "border-red-700"} pr-4 mt-2
          ${styles["crm-scrollbar"]}
        `}
        >
          <div
            className={`${
              isMobile ? "flex space-x-0 min-w-max" : "space-y-2"
            } ${styles["crm-scrollbar"]}`}
          >
            {crmServices.map((service) => (
              <div
                key={service.id}
                className={`cursor-pointer
                  ${isMobile ? "flex-shrink-0 min-w-[100px]" : "w-full"}
                  ${
                    (
                      isMobile
                        ? activeService.id === service.id
                        : hoveredService.id === service.id
                    )
                      ? styles["box-border"]
                      : "border-black"
                  }
                  rounded`}
                onClick={() => isMobile && handleServiceInteraction(service)}
                onMouseEnter={() =>
                  !isMobile && handleServiceInteraction(service)
                }
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center md:pl-8 inline-block ${
                    isMobile ? "flex-col items-start" : "w-full relative"
                  }`}
                >
                  <span
                    className={`md:mr-6 transition-colors duration-300 w-[14.4px] ${
                      isIconGreen(service.id) ? "text-green-500" : "text-white"
                    }`}
                  >
                    {service.icon}
                  </span>
                  <span
                    className={`${
                      styles["left-text"]
                    } font-opensans font-[700] leading-[48px] ${
                      !isMobile && "whitespace-nowrap"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`ml-1 transition-colors duration-300 w-[6.4px] flex items-center justify-center mb-[1px] ${
                      isIconGreen(service.id) ? "text-green-500" : "text-white"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      style={{ width: "6.4px", height: "12.8px" }}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`md:w-2/3 ${!isMobile && "md:pl-[100px]"} mt-6 md:mt-0`}
        >
          <div
            className={`pt-6 pr-10 pl-10 ${styles["box-border1"]} rounded w-full h-[480px] md:h-[300px]`}
          >
            <h2 className={`${styles["right-title"]} ${monsterfont.className}`}>
              {isMobile ? activeService.title : hoveredService.title}
            </h2>
            <p
              className={`${styles["right-description"]} font-helveticaneue text-semi-white`}
            >
              {isMobile ? activeService.content : hoveredService.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingServices;
