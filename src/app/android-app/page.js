export const metadata = {
  title:
    "Android App Development Services in USA | Android App Development Company ",
  description:
    "AlgorithmX is a global leader in the Android mobile app development landscape with clientele ranging across multiple industries and across the globe. ",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import AndriodSection from "./home";
import AppGrid from "./multiface";
import ServicesGrid from "./development";
import DevelopmentTimeline from "./dynamic";
import IndustriesGrid from "./industries";
import TechGrid from "./technologies";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <AndriodSection />
      <AppGrid />
      <ServicesGrid />
      <TechGrid />
      <DevelopmentTimeline />
      <IndustriesGrid />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
