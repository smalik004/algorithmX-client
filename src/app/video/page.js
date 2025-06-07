export const metadata = {
  title: "Video Production Company | Corporate Video Production Services",
  description:
    "AlgorithmX offers professional video production, editing, and marketing services. From concept to completion, we deliver stunning video content.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import VideoSection from "./home";
import VideoServices from "./videoservices";
import DevelopmentProcess from "./craftmanship";
import TechnologyToolbox from "./toolbox";
import ResponsiveHero from "../graphics/experience";
import Home from "./digital";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <VideoSection />
      <VideoServices />
      <DevelopmentProcess />
      <ResponsiveHero />
      <Home />
      <TechnologyToolbox />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
