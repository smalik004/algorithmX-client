export const metadata = {
  title:
    " AlgorithmX SEO Audit Services | Optimize Your Website for Search Engines",
  description:
    " AlgorithmX helps you Boost your online visibility with our SEO audit services. Our experts will analyze your website and provide actionable recommendations.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import SEOAuditSection from "./home";
import AuditServices from "./auditservices";
import SEOStrategy from "./opportunity";
import SEOStrategyGrid from "./techstack";
import SEOFactors from "./seofactor";
import SEOReports from "./reports";
import SEOChecklist from "./profiling";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <SEOAuditSection />
      <AuditServices />
      <SEOStrategy />
      <CTASection/>
      <SEOStrategyGrid />
      <SEOFactors />
      <CTASectionBanner/>
      <SEOReports />
      <SEOChecklist />
      
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
