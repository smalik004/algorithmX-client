export const metadata = {
  title:
    " Professional Shopify Development Services | Custom Shopify Development Company",
  description:
    "Enhance your online store with our expert Shopify development services. We create custom, high-performance eCommerce solutions. From setup to optimization, we ensure your Shopify store stands out and drives sales.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import ShopifyFeatures from "./choose";
import ShopifyServices from "./sservices";
import QualityBanner from "./quality";
import ShopifySection from "./home";
import ShopifyDevelopmentTimeline from "./stimeline";
 
import Footer from "../(mainpage)/footer";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <ShopifySection />
      <ShopifyServices />
      <ShopifyFeatures />
      <CTASectionBanner/>
      <QualityBanner />
      <ShopifyDevelopmentTimeline />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
