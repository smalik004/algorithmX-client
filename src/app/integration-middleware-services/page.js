export const metadata = {
  title: "Integration & Middleware Solutions | AlgorithmX ",
  description:
    "Connect systems, data, and applications with AlgorithmX’s enterprise-grade integration and middleware solutions. Boost efficiency and scalability today.",
};

import React from "react";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import IntegrationSection from "./home";
import IntegrationStrategyGrid from "./what";
import IntegrationServices from "./solution";
import IntegrationBenefits from "./choose";
import IntegrationTechnologyToolbox from "./toolbox";
import IntegrationDevelopmentTimeline from "./invest";
import InsightSection from "../graphics-services/insight";
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <IntegrationSection />
      <IntegrationStrategyGrid />
      <IntegrationServices />
      <CTASection/>
      <IntegrationDevelopmentTimeline />
      <IntegrationBenefits />
      <IntegrationTechnologyToolbox />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
