export const metadata = {
  title: " Professional Branding Agency | Digital Branding Services",
  description:
    "Build a powerful brand identity with AlgorithmX. Our expert branding strategies help businesses stand out, connect with their audience, and drive growth.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import BrandingSection from "./Home";
import ServicesSection from "./Services";
import BrandingProcess from "./process";
import LogoTypes from "./logo";
import MarketingFeatures from "./better";
import IndustriesGrid from "./industries";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BrandingSection />
      <ServicesSection />
      <BrandingProcess />
      <LogoTypes />
      <MarketingFeatures />
      <IndustriesGrid />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default Page;
