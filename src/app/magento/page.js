export const metadata = {
  title: " Top Magento Development Company in USA",
  description:
    " AlgorithmX is a leading Magento development company in USA, with a comprehensive suite of Magento development services that span a wide range of industry domains.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import MagentoSection from "./home";
import MagentoServices from "./mservices";
import MagentoFeatures from "./mchoose";
import QualityBanner from "./mquality";
import MagentoDevelopmentTimeline from "./mtimeline";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <MagentoSection />
      <MagentoServices />
      <MagentoFeatures />
      <QualityBanner />
      <MagentoDevelopmentTimeline />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
