export const metadata = {
  title: "AI Development Company in USA | Top AI Solutions and Consulting",
  description:
    "AlgorithmX creates smart AI solutions tailored to your business needs. From chatbots to data insights, we deliver reliable AI development services. Contact us now. ",
};

import React from "react";
import CTASection from "../ads-audit/ctabanner";
import ContactForm from "../ads-audit/form";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import AISection from "./home";
import AIServices from "./services";
import AIBusinessSection from "./business";
import AIServicesGrid from "./aiservice";
import AITechGrid from "./techstack";
import AIDesignProcess from "./process";
import IndustriesGrid from "../branding/industries";
import AIInsightSection from "./insight";
import Footer from "../(mainpage)/footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <AISection />
      <AIServicesGrid />
      <CTASection />
      <AIBusinessSection />
      <AIServices />
      <AIDesignProcess />
      <ContactForm />
      <IndustriesGrid />
      <AIInsightSection />
      <Footer />
    </div>
  );
};

export default page;
