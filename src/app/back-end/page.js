export const metadata = {
  title: "Professional Back-End Development Services | App Development Company",
  description:
    "Boost your application’s performance with our top-notch backend development services. AlgorithmX specializes in creating scalable, secure, and efficient backend solutions tailored to your business needs. Contact us today.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import BackEndSection from "./home";
import HeroSection from "./consistency";
import BackEndTechStack from "./btechstack";
import BackDesignProcess from "./bdynamic";
import BackServicesGrid from "./backdevelopment";
import BackWebDevServices from "./bfullscale";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BackEndSection />
      <BackServicesGrid />
      <HeroSection />
      <BackEndTechStack />
      <BackDesignProcess />
      <BackWebDevServices />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
