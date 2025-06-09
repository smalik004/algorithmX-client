export const metadata = {
  title: "CMS Development Company in India | CMS Development Services",
  description:
    " As a leading CMS website development company, We provide comprehensive solutions for all major CMS platforms, including WordPress, Magento, BigCommerce, Shopify, Drupal, and Hubspot. Benefit from up to 50% savings on development costs, and kick off your project within 48 hours!",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CMSSection from "./home";
import ContentMarketingCMS from "./utilize";
import CMSServicesGrid from "./gains";
import CMSServices from "./how";
import IndustriesGrid from "../branding/industries";
import CMSTechStack from "./techstack";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <CMSSection />
      <ContentMarketingCMS />
      <CMSServicesGrid />
      <CMSServices />
      <IndustriesGrid />
      <CMSTechStack />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
