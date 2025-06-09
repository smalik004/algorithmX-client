export const metadata = {
  title: "CRM Development Company | Custom CRM Solutions ",
  description:
    "Optimize your business operations with our expert CRM development services. AlgorithmX designs and builds custom CRM solutions tailored to your specific needs, enhancing customer relationships, streamlining processes, and driving growth. ",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CRMServices from "./crmservices";
import CRMDashboard from "./development";
import CRMSection from "./home";
import CRMSystem from "./crmsystem";
import CRMTechStack from "./crmtechstack";
import CRMDevelopmentTimeline from "./crmtimeline";
import CRMOutcomes from "./outcomes";
import CostEstimations from "./crmcost";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <CRMSection />
      <CRMServices />
      <CRMSystem />
      <CRMDashboard />
      <CRMOutcomes />
      <CRMTechStack />
      <CRMDevelopmentTimeline />
      <CostEstimations />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
