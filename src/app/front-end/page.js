export const metadata = {
  title:
    " Professional Front-End Development Services | App Development Company",
  description:
    " AlgorithmX helps you transform your digital presence with our expert front-end development services. We specialize in creating stunning, user-friendly interfaces that enhance user experience and engagement. Explore.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import FrontEndSection from "./home";
import FrontServicesGrid from "./frontdevelopment";
import WebDevServices from "./fullscale";
import HeroSection from "./consistency";
import TechStack from "./techstack";
import FrontDesignProcess from "./fdynamic";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <FrontEndSection />
      <FrontServicesGrid />
      <HeroSection />
      <TechStack />
      <FrontDesignProcess />
      <WebDevServices />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
