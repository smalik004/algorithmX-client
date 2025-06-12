export const metadata = {
  title: " Professional Branding Agency | Digital Branding Services",
  description:
    "Build a powerful brand identity with AlgorithmX. Our expert branding strategies help businesses stand out, connect with their audience, and drive growth.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import BrandingSection from "./Home";
import ServicesSection from "./Services";
import BrandingProcess from "./process";
import LogoTypes from "./logo";
import MarketingFeatures from "./better";
import IndustriesGrid from "./industries";
import InsightSection from "../graphics-services/insight";
import Footer from "../(mainpage)/footer";
import CTASectionBanner from "./ctabanner2";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BrandingSection />
      <ServicesSection />
      <CTASection/>
      <BrandingProcess />
      <LogoTypes />
      <CTASectionBanner/>
      <MarketingFeatures />
      <IndustriesGrid />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Page;
