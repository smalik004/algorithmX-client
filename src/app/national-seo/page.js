export const metadata = {
  title: "Custom National SEO Services | National SEO Agency",
  description:
    "AlgorithmX provides customized national SEO services aimed at optimizing every aspect of your business to enhance visibility in the national market.",
};

import React from "react";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import SEONationalSection from "./home";
import NationalServices from "./nationalservices";
import NationalStrategy from "./opportunity";
import NationalSEOBenefits from "./benefits";
import NationalMarketingSection from "./marketing";
import NationalRevenueSection from "./revenue";
import NationalRiseSection from "./rise";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <SEONationalSection />
      <NationalServices />
      <NationalStrategy />
      <NationalSEOBenefits />
      <NationalMarketingSection />
      <NationalRevenueSection />
      <NationalRiseSection />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
