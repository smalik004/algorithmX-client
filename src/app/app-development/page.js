export const metadata = {
  title:
    "AlgorithmX SEO Audit Services | Optimize Your Website for Search Engines",
  description:
    "AlgorithmX helps you Boost your online visibility with our SEO audit services. Our experts will analyze your website and provide actionable recommendations.",
};
import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import MobileSection from "./home";
import MobileAppServices from "./services";
import BenefitsSection from "./benefits";
import AppDevelopmentProcess from "./devlop";
import Accordion from "./practices";
import CostMob from "./cost";
import AppTechStack from "./techstack";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <MobileSection />
      <MobileAppServices />
      <BenefitsSection />
      <AppDevelopmentProcess />
      <Accordion />
      <CostMob />
      <AppTechStack />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
