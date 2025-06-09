export const metadata = {
  title:
    " Professional Shopify Development Services | Custom Shopify Development Company",
  description:
    "Enhance your online store with our expert Shopify development services. We create custom, high-performance eCommerce solutions. From setup to optimization, we ensure your Shopify store stands out and drives sales.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import ShopifyFeatures from "./choose";
import ShopifyServices from "./sservices";
import QualityBanner from "./quality";
import ShopifySection from "./home";
import ShopifyDevelopmentTimeline from "./stimeline";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <ShopifySection />
      <ShopifyServices />
      <ShopifyFeatures />
      <QualityBanner />
      <ShopifyDevelopmentTimeline />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
