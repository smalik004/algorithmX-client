export const metadata = {
  title:
    " HubSpot Development Services in USA | Custom CRM & Marketing Solutions",
  description:
    "AlgorithmX helps you with custom HubSpot development. Get Increased leads, conversions, and ROI from our Experienced team and tailored solutions.",
};
import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import HubSpotSection from "./home";
import HubspotServices from "./hservices";
import HubSpotFeatures from "./hchoose";
import QualityBanner from "./hquality";
import HubspotDevelopmentTimeline from "./htimeline";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <HubSpotSection />
      <HubspotServices />
      <HubSpotFeatures />
      <QualityBanner />
      <HubspotDevelopmentTimeline />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
