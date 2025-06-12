export const metadata = {
  title: " Business Intelligence Services | BI Solutions and Analytics",
  description:
    " Turn your data into real insights. AlgorithmX helps you make smarter decisions with custom business intelligence dashboards, reports, and analytics — built for results. Contact us now. ",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import BusinessIntelligenceSection from "./home";
import BiConsultingPage from "./services";
import BusinessModules from "./decision";
import BusinessDevelopment from "./offer";
import IndustriesGrid from "../branding-services/industries";
 
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BusinessIntelligenceSection />
      <BiConsultingPage />
      <BusinessModules />
      <CTASection/>
      <BusinessDevelopment />
      <IndustriesGrid />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
