export const metadata = {
  title: "Professional Back-End Development Services | App Development Company",
  description:
    "Boost your application’s performance with our top-notch backend development services. AlgorithmX specializes in creating scalable, secure, and efficient backend solutions tailored to your business needs. Contact us today.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import BackEndSection from "./home";
import HeroSection from "./consistency";
import BackEndTechStack from "./btechstack";
import BackDesignProcess from "./bdynamic";
import BackServicesGrid from "./backdevelopment";
import BackWebDevServices from "./bfullscale";
import InsightSection from "../graphics-services/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BackEndSection />
      <BackServicesGrid />
      <HeroSection />
      <CTASection/>
      <BackEndTechStack />
      <BackDesignProcess />
      <BackWebDevServices />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
