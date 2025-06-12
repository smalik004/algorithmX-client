export const metadata = {
  title: "Ecommerce SEO Services | Top Ecommerce SEO Company USA",
  description:
    "Optimize your product pages, enhance your website’s SERP standing, and drive more customers to your online store in India and USA with AlgorithmX Ecommerce SEO strategies.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
import EcommerceSEOSection from "./home";
import EcommerceServices from "./ecommerceservices";
import EcommerceStrategy from "./opportunity";
import EcommerceSEOBenefits from "./benefits";
import EcommerceRankSection from "./rank";
import EcommerceImplementation from "./implement";
import EcommerceCodeSection from "./code";
import DeliverablesSection from "./client";
 
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <EcommerceSEOSection />
      <EcommerceServices />
      <EcommerceStrategy />
      <CTASection/> 
      <EcommerceSEOBenefits />
      <EcommerceRankSection />
      <EcommerceImplementation />
      <CTASectionBanner/>
      <EcommerceCodeSection />
      <DeliverablesSection />
      
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
