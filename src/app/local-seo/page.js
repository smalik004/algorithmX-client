export const metadata = {
  title: "AlgorithmX Local SEO Services | Local SEO Strategies",
  description:
    " Increase your visibility to nearby customers with our powerful Local SEO Services. Strengthen your online presence with AlgorithmX Local SEO strategies. Get in touch now.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import SEOLocalSection from "./home";
import LocalServices from "./localservices";
import LocalStrategy from "./opportunity";
import LocalSEOBenefits from "./benefits";
import LocalAudienceSection from "./audience";
import SeoResults from "./result";
import LocalBusinessSection from "./audience2";
import Deliverables from "./client";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <SEOLocalSection />
      <LocalServices />
      <LocalStrategy />
      <CTASection/>
      <LocalSEOBenefits />
      <LocalAudienceSection />
      <SeoResults />
      <CTASectionBanner/>
      <LocalBusinessSection />
      <Deliverables />
      
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
