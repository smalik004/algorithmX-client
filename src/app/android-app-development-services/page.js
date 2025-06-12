export const metadata = {
  title:
    "Android App Development Services in USA | Android App Development Company ",
  description:
    "AlgorithmX is a global leader in the Android mobile app development landscape with clientele ranging across multiple industries and across the globe. ",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASection from "./ctabanner";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
import AndriodSection from "./home";
import AppGrid from "./multiface";
import ServicesGrid from "./development";
import DevelopmentTimeline from "./dynamic";
import IndustriesGrid from "./industries";
import TechGrid from "./technologies";
 
import Footer from "../(mainpage)/footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <AndriodSection />
      <CTASection/>
      <AppGrid />
      <ServicesGrid />
      <TechGrid />
      <CTASectionBanner/>
      <DevelopmentTimeline />
      <IndustriesGrid />
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
