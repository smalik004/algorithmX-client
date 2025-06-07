export const metadata = {
  title: " Business Intelligence Services | BI Solutions and Analytics",
  description:
    " Turn your data into real insights. AlgorithmX helps you make smarter decisions with custom business intelligence dashboards, reports, and analytics — built for results. Contact us now. ",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import BusinessIntelligenceSection from "./home";
import BiConsultingPage from "./services";
import BusinessModules from "./decision";
import BusinessDevelopment from "./offer";
import IndustriesGrid from "../branding/industries";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BusinessIntelligenceSection />
      <BiConsultingPage />
      <BusinessModules />
      <BusinessDevelopment />
      <IndustriesGrid />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
