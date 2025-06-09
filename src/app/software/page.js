export const metadata = {
  title: "Top Software Development Company | Software Consulting Services",
  description:
    " AlgorithmX is a top-rated Software development company specializing in web, mobile, and enterprise applications. Custom solutions to drive your business forward.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import ContentSection from "./home";
import InteractiveBox from "./method";
import CostEstimation from "./cost";
import BusinessSolutions from "./software";
import SoftwareServices from "./discover";
import SoftwareDevelopmentTimeline from "./timeline";
import SoftwareTechStack from "./techstack";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <ContentSection />
      <SoftwareServices />
      <BusinessSolutions />
      <InteractiveBox />
      <SoftwareDevelopmentTimeline />
      <SoftwareTechStack />
      <CostEstimation />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
