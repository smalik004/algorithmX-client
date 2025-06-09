export const metadata = {
  title: "Expert Flutter App Development Services | Cross-Platform Solutions",
  description:
    " Unlock the power of Flutter with our expert app development services. AlgorithmX delivers high-performance, cross-platform mobile apps for your needs.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import FlutterSection from "./home";
import AppGrid from "../android-app/multiface";
import FlutterServicesGrid from "./fdevelopment";
import TechGrid from "../android-app/technologies";
import FlutterDevelopmentTimeline from "./fdynaictimeline";
import IndustriesGrid from "../android-app/industries";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <FlutterSection />
      <AppGrid />
      <FlutterServicesGrid />
      <TechGrid />
      <FlutterDevelopmentTimeline />
      <IndustriesGrid />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
