export const metadata = {
  title:
    " HubSpot Development Services in USA | Custom CRM & Marketing Solutions",
  description:
    "AlgorithmX helps you with custom HubSpot development. Get Increased leads, conversions, and ROI from our Experienced team and tailored solutions.",
};
import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import HubSpotSection from "./home";
import HubspotServices from "./hservices";
import HubSpotFeatures from "./hchoose";
import QualityBanner from "./hquality";
import HubspotDevelopmentTimeline from "./htimeline";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <HubSpotSection />
      <HubspotServices />
      <HubSpotFeatures />
      <CTASection/>
      <QualityBanner />
      <HubspotDevelopmentTimeline />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
