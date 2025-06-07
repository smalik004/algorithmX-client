export const metadata = {
  title: "Top IOS App Development Company | Custom Mobile Solutions",
  description:
    " Looking for expert IOS app development? Our top-rated company delivers custom mobile solutions tailored to your industry needs. We create high-performance apps to help your business succeed.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import IosSection from "./home";
import AppGrid from "../android-app/multiface";
import IosServicesGrid from "./idevelopment";
import IosDevelopmentTimeline from "./dynamictimeline";
import TechGrid from "../android-app/technologies";
import IndustriesGrid from "../android-app/industries";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <IosSection />
      <AppGrid />
      <IosServicesGrid />
      <TechGrid />
      <IosDevelopmentTimeline />
      <IndustriesGrid />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
