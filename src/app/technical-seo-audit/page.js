export const metadata = {
  title: "Top Technical SEO Audit: Technical SEO Optimization ",
  description:
    "AlgorithmX helps you increase your website’s visibility and draw in up to 60% more organic traffic with our expert technical SEO audit and optimization services.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import TechnicalSEOSection from "./home";
import TechnicalServices from "./technicalservices";
import TechnicalStrategy from "./confidence";
import TechnicalBenefits from "./benefit";
import TechnicalLeaveSection from "./leave";
import TechnicalIdentifySection from "./identify";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <TechnicalSEOSection />
      <TechnicalServices />
      <TechnicalStrategy />
      <TechnicalBenefits />
      <TechnicalLeaveSection />
      <TechnicalIdentifySection />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
