export const metadata = {
  title: "Cloud & DevOps Services | Secure & Automated Solutions | AlgorithmX",
  description:
    " We make the cloud work for your business. From setting up pipelines to managing cloud platforms, we help you build smarter, more reliable systems.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import CloudSection from "./home";
import CloudGrid from "./downtime";
import CloudDesignProcess from "./process";
import CloudStrategy from "./streamlined";
import CloudBenefits from "./choose";
import CloudTechnologyToolbox from "./toolbox";
import InsightSection from "../graphics-services/insight";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <CloudSection />
      <CloudGrid />
      <CloudDesignProcess />
      <CTASection/>
      <CloudStrategy />
      <CloudBenefits />
      <CloudTechnologyToolbox />
      <ContactForm/>
    </div>
  );
};

export default page;
