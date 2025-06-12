import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import AdsAudit from "./home";
import PPCAuditSection from "./what";
import ServicesAccordion from "./include";
import TestimonialSection from "./coatation";
import PPCAudit from "./happens";
import Footer from "../(mainpage)/footer";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      
      <AdsAudit />
      <PPCAuditSection />
      <ServicesAccordion />
      <CTASectionBanner/>
      <TestimonialSection />

      <PPCAudit />
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
